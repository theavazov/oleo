import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getRecipes } from "../../server/getRecipes";
import styles from "../../styles/home.module.css";
import { RecipeCard } from "../universal/recipe_card/recipe_card";

export function MainRecipes() {
  const { locale } = useRouter();
  const [recipes, setRecipes] = useState<any>([]);

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
        <div className={`box ${styles.recipes_inner}`}>Recipes</div>
      </div>
      <div className={`bigbox`}>
        <Swiper spaceBetween={30} slidesPerView={5}>
          {recipes.map((recipe: any, i: number) => {
            return (
              <SwiperSlide key={i}>
                <RecipeCard recipe={recipe} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </article>
  );
}
