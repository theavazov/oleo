import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { arrowRight, chevron, play } from "../../public/icons";
import { getRecipes } from "../../server/getRecipes";
import styles from "../../styles/home.module.css";
import { RecipeCard } from "../universal/recipe_card/recipe_card";
import motto from "../../public/media/motto.png";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { TranslationsContext } from "../../contexts/translations";

export function MainRecipes() {
  const { locale } = useRouter();
  const [recipes, setRecipes] = useState<any>([]);
  const { t } = useContext(TranslationsContext);

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);

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
              <button ref={nextBtn}>{play}</button>
              <p>{t["main.recipe_btn"]}</p>
            </div>
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
              <button
                className={styles.btnlast}
                ref={(node) => setNextEl(node)}
              >
                {arrowRight}
              </button>
              <Image src={motto} alt="motto" className={styles.recipes_motto} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "100%", width: "100%" }} className="desktop">
        <div className={`bigbox ${styles.recipes_wrapper}`}>
          <div className={styles.recipes_swiper}>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView="auto"
              breakpoints={{
                0: { slidesPerView: 2 },
                1800: { slidesPerView: 3.5 },
              }}
              speed={1600}
              autoplay={{ delay: 2000, disableOnInteraction: true }}
              navigation={{ nextEl: nextBtn.current }}
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

const DesktopSwiper = ({
  nextBtn,
  recipes,
}: {
  nextBtn: any;
  recipes: any;
}) => {
  return (
    <div style={{ maxWidth: "100%", width: "100%" }} className="desktop">
      <div className={`bigbox ${styles.recipes_wrapper}`}>
        <div className={styles.recipes_swiper}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView="auto"
            breakpoints={{
              0: { slidesPerView: 2 },
              1800: { slidesPerView: 3.5 },
            }}
            speed={1600}
            autoplay={{ delay: 2000, disableOnInteraction: true }}
            navigation={{ nextEl: nextBtn.current }}
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
  );
};
