import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";
import { Location } from "../../components/utils/location/location";
import styles from "../../styles/product.module.css";
import { ProductCard } from "../../components/universal/product_card/product_card";
import { useRouter } from "next/router";
import { url } from "../_app";
import { useContext, useEffect, useRef, useState } from "react";
import { ProductsContext } from "../../contexts/products";
import { getProductBySlug } from "../../server/getProductBySlug";
import { SiteInfoContext } from "../../contexts/siteinfo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Button } from "../../components/utils/buttons/buttons";
import { arrowRight, buy, chevron, download } from "../../public/icons";
import Image from "next/image";
import { ModalContext } from "../../contexts/modal";
import noimage from "../../public/media/logo.png";
import { TranslationsContext } from "../../contexts/translations";

export default function ProductInnerPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { t } = useContext(TranslationsContext);
  const { siteInfo } = useContext(SiteInfoContext);
  const { products } = useContext(ProductsContext);
  const { setVariant, setIsModal, setProductContent } =
    useContext(ModalContext);

  const [product, setProduct] = useState<any>({});

  const prevBtn = useRef<HTMLButtonElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (router.isReady) {
      getProductBySlug(router.locale, slug)
        .then((res) => {
          setProduct(res);
        })
        .catch(() => router.push("/404"));
    }
  }, [slug, router.locale]);

  const customFunction = () => {
    setProductContent(product);
    setVariant("post");
    setIsModal(true);
  };

  return (
    <>
      <CustomHead
        title={product?.name}
        desc={product.meta?.meta_deck}
        canonical={`${url}/products/${slug}`}
      />
      <Layout>
        <Location
          location={product?.name}
          backPath={"/products"}
          parent={{ text: t["main.products"], path: "/products" }}
        />
        <article className={styles.single_product}>
          <div className={`box ${styles.single_product_inner}`}>
            <div className="desktop">
              <Image
                src={product.image ? product.image : noimage}
                alt={product?.name}
                width={450}
                height={400}
                className={styles.product_image}
                quality={100}
              />
            </div>
            <div>
              <div className={styles.product_titles}>
                <h3 className="section_title">{product?.name}</h3>
                <p>{product?.subtitle}</p>
              </div>
              <div className="mobile">
                <Image
                  style={{ marginTop: "32px" }}
                  src={product.image ? product.image : noimage}
                  alt={product?.name}
                  width={450}
                  height={400}
                  className={styles.product_image}
                />
              </div>
              <div className={styles.product_info}>
                <div className={styles.info_container}>
                  <p>{t["main.sostav"]}:</p>
                  <div
                    className={styles.info_div}
                    dangerouslySetInnerHTML={{ __html: product?.description }}
                  ></div>
                </div>
                <div className={styles.info_container}>
                  <p>{t["main.expiration_date"]}:</p>
                  <div
                    className={styles.info_div}
                    dangerouslySetInnerHTML={{ __html: product?.bb_date }}
                  ></div>
                </div>
              </div>
              <div className={styles.inner_bottom_button}>
                <Button
                  variant="primary"
                  icon={buy}
                  customFunction={customFunction}
                >
                  {t["main.buy"]}
                </Button>
              </div>
            </div>
          </div>
        </article>
        <article className={styles.another_products_section}>
          <div className="box section_inner">
            <h3 className="section_title">{t["main.related_products"]}</h3>
          </div>
          <div className={`bigbox ${styles.another_products_container}`}>
            <div className="desktop">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView="auto"
                breakpoints={{
                  880: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  1800: {
                    slidesPerView: 4,
                  },
                }}
                speed={1600}
                autoplay={{ delay: 2000, disableOnInteraction: true }}
                navigation={{
                  prevEl: prevBtn.current,
                  nextEl: nextBtn.current,
                }}
                onBeforeInit={(swiper: any) => {
                  swiper.params.navigation.prevEl = prevBtn.current;
                  swiper.params.navigation.nextEl = nextBtn.current;
                }}
              >
                {products.length > 0
                  ? products.map((product: any, i: number) => {
                      return (
                        <SwiperSlide key={i}>
                          <ProductCard product={product} />
                        </SwiperSlide>
                      );
                    })
                  : null}
              </Swiper>
            </div>
            <div className="mobile">
              <div className="grid_container">
                {products.length > 0
                  ? products.map((product: any, i: number) => {
                      return <ProductCard key={i} product={product} />;
                    })
                  : null}
              </div>
            </div>
            <div className={`box ${styles.another_products_container_bottom}`}>
              <div className={styles.another_products_container_buttons}>
                <div
                  className={
                    styles.another_products_container_buttons_container
                  }
                >
                  <Button
                    variant="primary"
                    icon={arrowRight}
                    path={"/products"}
                  >
                    {t["main.view_catalogue"]}
                  </Button>
                  <Button
                    variant="third"
                    icon={download}
                    isDownload={true}
                    path={siteInfo.cotalog}
                  >
                    {t["main.dowload"]}
                  </Button>
                </div>
                <p>{t["main.uzun_text"]}</p>
              </div>
              <div className="desktop">
                <div className="swiper_buttons">
                  <button
                    ref={prevBtn}
                    aria-label="previous"
                    className="swiper_btn"
                  >
                    {chevron}
                  </button>
                  <button
                    ref={nextBtn}
                    aria-label="next"
                    className="swiper_btn"
                  >
                    {chevron}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
}
