import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { play } from "../../public/icons";
import { getRecipes } from "../../server/getRecipes";
import styles from "../../styles/home.module.css";
import { RecipeCard } from "../universal/recipe_card/recipe_card";
import motto from "../../public/media/motto.png";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

export function MainRecipes() {
  const { locale } = useRouter();
  const [recipes, setRecipes] = useState<any>([]);

  const nextBtn = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    getRecipes(locale)
      .then((res) => {
        console.log(res.results);
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
              <h3 className="section_title">“Oleo” Pishiriqlar</h3>
              <p>
                Oleo margarin va saryog’laridan tayyorlangan psihiriqlarimiz.
                Bizning Margarinlarimizdan tayyorlangan narsalarni retseptini
                koring
              </p>
            </div>
            <div className={styles.recipes_middle}>
              <button ref={nextBtn}>{play}</button>
              <p>Keyingi taom</p>
            </div>
            <div className="mobile">
              <div style={{ marginTop: "48px" }}>
                <Swiper
                  spaceBetween={30}
                  slidesPerView={"auto"}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    380: { slidesPerView: 2 },
                    580: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                    1800: { slidesPerView: 5 },
                  }}
                >
                  {recipes.map((recipe: any, i: number) => {
                    return (
                      <SwiperSlide key={i}>
                        <RecipeCard recipe={recipe} />
                      </SwiperSlide>
                    );
                  })}
                  <SwiperSlide>Slie 1</SwiperSlide>
                  <SwiperSlide>Slie 1</SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className={styles.mobile_motto}>
              <Image src={motto} alt="motto" className={styles.recipes_motto} />
            </div>
          </div>
        </div>
      </div>
      <div className="desktop">
        <div className={`bigbox`}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView="auto"
            breakpoints={{
              0: { slidesPerView: 2 },
              580: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
              1800: { slidesPerView: 5 },
            }}
            speed={1600}
            autoplay={{ delay: 2000, disableOnInteraction: true }}
            navigation={{
              nextEl: nextBtn.current,
            }}
            onBeforeInit={(swiper: any) => {
              swiper.params.navigation.nextEl = nextBtn.current;
            }}
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
    </article>
  );
}
