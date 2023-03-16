import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { arrowRight, play } from "../../public/icons";
import { getRecipes } from "../../server/getRecipes";
import styles from "../../styles/home.module.css";
import { RecipeCard } from "../universal/recipe_card/recipe_card";
import motto from "../../public/media/motto.png";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { TranslationsContext } from "../../contexts/translations";

SwiperCore.use([Navigation]);

export function MainRecipes() {
  const { locale } = useRouter();
  const [recipes, setRecipes] = useState<any>([]);
  const { t } = useContext(TranslationsContext);

  useEffect(() => {
    getRecipes(locale)
      .then((res) => {
        setRecipes(res.results);
      })
      .catch((e) => console.log(e));
  }, [locale]);

  return (
    <article className={styles.recipes_section}>
      <div className={styles.recipes_content}>
        <div className={`box ${styles.recipes_inner}`}>
          <div className={styles.recipes_inner_content}>
            <div className={styles.recipes_titles}>
              <h3 className="section_title">{t["main.recipe_title"]}</h3>
              <p>{t["main.recipe_desc"]}</p>
            </div>
            <div className={styles.recipes_middle}>
              <button className="custom-next-btn">{play}</button>
              <p>{t["main.recipe_btn"]}</p>
            </div>
            <MobileSwiper recipes={recipes} />
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "100%", width: "100%" }} className="desktop">
        <div className={`bigbox ${styles.recipes_wrapper}`}>
          <div className={styles.recipes_swiper}>
            <Swiper
              modules={[Autoplay, Navigation]}
              loop={true}
              centeredSlides={true}
              loopedSlides={3}
              spaceBetween={30}
              slidesPerView={2}
              breakpoints={{
                1800: { slidesPerView: 3.5 },
              }}
              speed={1600}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              navigation={{ nextEl: ".custom-next-btn" }}
            >
              {recipes.map((recipe: any, i: number) => {
                return (
                  <SwiperSlide key={i}>
                    <RecipeCard recipe={recipe} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </article>
  );
}

const MobileSwiper = ({ recipes }: { recipes: object[] }) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <>
      <div className="mobile">
        <div className="recipes" style={{ marginTop: "48px" }}>
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={"auto"}
            spaceBetween={12}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              380: { slidesPerView: 2 },
              580: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 30,
              },
              1200: { slidesPerView: 4 },
              1800: { slidesPerView: 5 },
            }}
            speed={1600}
            navigation={{ prevEl, nextEl }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
          >
            {recipes.map((recipe: any, i: number) => {
              return (
                <SwiperSlide key={i}>
                  <RecipeCard recipe={recipe} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className={styles.mobile_motto}>
        <button className={styles.btn} ref={(node) => setPrevEl(node)}>
          {arrowRight}
        </button>
        <button className={styles.btnlast} ref={(node) => setNextEl(node)}>
          {arrowRight}
        </button>
        <Image src={motto} alt="motto" className={styles.recipes_motto} />
      </div>
    </>
  );
};
