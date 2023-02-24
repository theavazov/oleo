import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";
import { Location } from "../../components/utils/location/location";
import styles from "../../styles/product.module.css";
import { ProductCard } from "../../components/universal/product_card/product_card";
import { useRouter } from "next/router";
import { url } from "../_app";
import { useContext, useEffect, useRef } from "react";
import { ProductsContext } from "../../contexts/products";
import { getProductBySlug } from "../../server/getProductBySlug";
import { SiteInfoContext } from "../../contexts/siteinfo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Button } from "../../components/utils/buttons/buttons";
import { arrowRight, chevron, download } from "../../public/icons";

export default function ProductInnerPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { siteInfo } = useContext(SiteInfoContext);
  const { products } = useContext(ProductsContext);

  const prevBtn = useRef<HTMLButtonElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (router.isReady) {
      getProductBySlug(router.locale, slug)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    }
  }, [router]);

  return (
    <>
      <CustomHead
        title={slug}
        desc={"Oleoning aynan bitta mahsuloti"}
        canonical={`${url}/products/${slug}`}
      />
      <Layout>
        <Location
          location={"slug"}
          backPath={"/products"}
          parent={{ text: "Mahsulotlarimiz", path: "/products" }}
        />
        <article>
          <div className={`box ${styles.single_product_inner}`}></div>
        </article>
        <article className={styles.another_products_section}>
          <div className="box section_inner">
            <h3 className="section_title">O`xshash mahsulotlar</h3>
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
                {products
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
                {products
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
                    Katalogni ko’rish
                  </Button>
                  <Button
                    variant="third"
                    icon={download}
                    isDownload={true}
                    path={siteInfo.cotalog}
                  >
                    Katalogni Yuklab olish
                  </Button>
                </div>
                <p>Katalogimizda barcha tovarlarimizni ko‘rishingiz mumkin</p>
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
