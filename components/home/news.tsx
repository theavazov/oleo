import { arrowRight, chevron } from "../../public/icons";
import styles from "../../styles/home.module.css";
import { Button } from "../utils/buttons/buttons";
import { NewsCard } from "../universal/news_card/news_card";
import { useContext, useRef } from "react";
import { ProductsContext } from "../../contexts/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { TranslationsContext } from "../../contexts/translations";

export function MainNewsSection() {
  const { news, lastUpdate } = useContext(ProductsContext);
  const { t } = useContext(TranslationsContext);

  const prevBtn = useRef<HTMLButtonElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);

  return (
    <article className={`section news ${styles.news_section}`}>
      <div className={`box ${styles.news_section_texts}`}>
        <h3 className="section_title">{t["main.news_title"]}</h3>
        <p>{t["main.news_desc"]}</p>
      </div>
      <div className={`bigbox ${styles.news_section_slides_container}`}>
        <div className="desktop">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView="auto"
            breakpoints={{
              0: {
                slidesPerView: 0,
              },
              380: {
                slidesPerView: 2,
              },
              580: {
                slidesPerView: 3,
              },
              1200: {
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
            {news.map((news: any, i: number) => {
              return (
                <SwiperSlide key={i}>
                  <NewsCard news={news} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="mobile">
          <div className="grid_container">
            {news.length > 0
              ? news.map((news: any, i: number) => {
                  return <NewsCard key={i} news={news} />;
                })
              : null}
          </div>
        </div>
      </div>
      <div className={`box ${styles.news_section_bottom}`}>
        <div className={styles.yetim_div}>
          <Button variant="primary" path="/news" icon={arrowRight}>
            {t["main.all_news"]}
          </Button>
          <p>
            {lastUpdate} {t["main.last_update"]}
          </p>
        </div>
        <div className="desktop">
          <div className="swiper_buttons">
            <button
              ref={prevBtn}
              className="swiper_btn"
              aria-label="Previous slide"
            >
              {chevron}
            </button>
            <button
              ref={nextBtn}
              className="swiper_btn"
              aria-label="Next slide"
            >
              {chevron}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
