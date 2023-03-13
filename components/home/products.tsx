import { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { ProductsContext } from "../../contexts/products";
import { arrowRight, chevron, download } from "../../public/icons";
import styles from "../../styles/home.module.css";
import { ProductCard } from "../universal/product_card/product_card";
import { Button } from "../utils/buttons/buttons";
import { SiteInfoContext } from "../../contexts/siteinfo";
import { TranslationsContext } from "../../contexts/translations";

export function MainProducts() {
  const { t } = useContext(TranslationsContext);
  const { products } = useContext(ProductsContext);
  const { siteInfo } = useContext(SiteInfoContext);

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <article className={styles.products_section}>
      <div className="bigbox">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={8}
          slidesPerView="auto"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            380: {
              slidesPerView: 2.2,
            },
            580: {
              spaceBetween: 16,
            },
            880: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          speed={1600}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          navigation={{ prevEl, nextEl }}
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
      {/* <div className="mobile">
        <div className="bigbox grid_container">
          {products
            ? products.map((product: any, i: number) => {
                return <ProductCard key={i} product={product} />;
              })
            : null}
        </div>
      </div> */}
      <div className={`box ${styles.products_bottom_info}`}>
        <div className={styles.info_div_1}>
          <div className={styles.products_btns}>
            <Button variant="primary" icon={arrowRight} path={"/products"}>
              {t["main.view_all"]}
            </Button>
            <Button
              variant="third"
              icon={download}
              path={siteInfo.cotalog}
              isDownload={true}
            >
              {t["main.dowload"]}
            </Button>
          </div>
          <p>{t["main.uzun_text"]}</p>
        </div>
        <div className={`swiper_buttons ${styles.desktop}`}>
          <button
            ref={(node) => setPrevEl(node)}
            aria-label="previous"
            className="swiper_btn"
          >
            {chevron}
          </button>
          <button
            ref={(node) => setNextEl(node)}
            aria-label="next"
            className="swiper_btn"
          >
            {chevron}
          </button>
        </div>
      </div>
      {/* <div className={styles.mobile_bottom}>
        <div className={styles.mobile_bottom_top}>
          <div className={styles.mobile_top_btn}>
            <Button variant="primary" icon={arrowRight} path={"/products"}>
              Batafsil ko`rish
            </Button>
            <a
              href={siteInfo.cotalog}
              aria-label="download"
              className={styles.mobile_download}
              download
              target={"_blank"}
              rel="noreferrer"
            >
              {download}
            </a>
          </div>
          <div className={`swiper_buttons ${styles.mobile_gap}`}>
            <button
              ref={(node) => setPrevEl(node)}
              aria-label="previous"
              className="swiper_btn"
            >
              {chevron}
            </button>
            <button
              ref={(node) => setNextEl(node)}
              aria-label="next"
              className="swiper_btn"
            >
              {chevron}
            </button>
          </div>
        </div>
        <p>Katalogimizda barcha tovarlarimizni ko‘rishingiz mumkin</p>
      </div> */}
    </article>
  );
}
