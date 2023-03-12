import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";
import { Location } from "../components/utils/location/location";
import { getRecipeBySlug } from "../server/getRecipeBySlug";
import { url } from "./_app";
import recipeImg from "../public/media/recipe.jpg";
import styles from "../styles/recipe.module.css";
import { CustomImage } from "../components/utils/image";
import { play } from "../public/icons";
import { ModalContext } from "../contexts/modal";
import Image from "next/image";
import motto from "../public/media/motto.png";
import { TranslationsContext } from "../contexts/translations";

export default function RetseptPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { t } = useContext(TranslationsContext);

  const { setVariant, setIsModal, setVideo } = useContext(ModalContext);

  const [recipe, setRecipe] = useState<any>({});

  useEffect(() => {
    if (router.isReady) {
      getRecipeBySlug(router.locale, slug)
        .then((res) => {
          setRecipe(res);
        })
        .catch(() => router.push("/"));
    }
  }, [router]);

  return (
    <>
      <CustomHead
        title={recipe?.title}
        desc={recipe?.subtitle}
        canonical={`${url}/${slug}`}
      />
      <Layout>
        <Location location={recipe?.title} backPath={"/"} />
        <article>
          <div className={`box ${styles.recipe_inner}`}>
            <div className={styles.recipe_content}>
              <h3
                style={{ textTransform: "uppercase" }}
                className="section_title"
              >
                {recipe?.title}
              </h3>
              <div className="desktop">
                <div className={styles.opisaniye_div}>
                  <p>{t["main.sostav"]}:</p>
                  <div
                    className={styles.opisaniye}
                    dangerouslySetInnerHTML={{ __html: recipe?.body }}
                  ></div>
                </div>
              </div>
            </div>
            <div className={styles.image_side}>
              <button
                className={styles.play_btn}
                onClick={() => {
                  setVariant("youtube");
                  setVideo(recipe?.video);
                  setIsModal(true);
                }}
              >
                {play}
              </button>
              <div className={styles.recipe_image}>
                <CustomImage
                  source={recipe.image ? recipe.image : recipeImg}
                  alt="recipe image"
                  width={520}
                  height={520}
                />
              </div>
            </div>
            <div className="mobile">
              <div className={styles.opisaniye_div}>
                <p>{t["main.sostav"]}:</p>
                <div
                  className={styles.opisaniye}
                  dangerouslySetInnerHTML={{ __html: recipe?.body }}
                ></div>
              </div>
              <Image src={motto} alt="motto" className={styles.motto} />
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
}
