import { useContext, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { ProductsContext } from "../../contexts/products";
import { arrowRight, chevron, download } from "../../public/icons";
import styles from "../../styles/home.module.css";
import { ProductCard } from "../universal/product_card/product_card";
import { Button } from "../utils/buttons/buttons";

export function MainProducts() {
  const { products } = useContext(ProductsContext);

  const prevBtn = useRef<HTMLButtonElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);

  return (
    <article className={styles.products_section}>
      <div className="desktop">
        <div className="bigbox">
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
      </div>
      <div className="mobile">
        <div className="bigbox grid_container">
          {products
            ? products.map((product: any, i: number) => {
                return <ProductCard key={i} product={product} />;
              })
            : null}
        </div>
      </div>
      <div className={`box ${styles.products_bottom_info}`}>
        <div className={styles.info_div_1}>
          <div className={styles.products_btns}>
            <Button variant="primary" icon={arrowRight} path={"/products"}>
              Batafsil ko`rish
            </Button>
            <Button variant="third" icon={download} path={"#"}>
              Katalogni Yuklab olish
            </Button>
          </div>
          <p>Katalogimizda barcha tovarlarimizni ko‘rishingiz mumkin</p>
        </div>
        <div className="desktop">
          <div className="swiper_buttons">
            <button ref={prevBtn} aria-label="previous" className="swiper_btn">
              {chevron}
            </button>
            <button ref={nextBtn} aria-label="next" className="swiper_btn">
              {chevron}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
