import Link from "next/link";
import { CustomImage } from "../../utils/image";
import styles from "./recipe_card.module.css";
import testImg from "../../../public/media/about_img.jpg";
import noimage from "../../../public/media/logo.png";
import { play } from "../../../public/icons";

export function RecipeCard({ recipe }: { recipe: any }) {
  return (
    <Link href={`/${recipe.slug}`} className={styles.card}>
      <div className={styles.card_img}>
        <CustomImage source={testImg ? testImg : noimage} alt={recipe.title} />
      </div>
      <div className={styles.card_content}>
        <p className={styles.card_title}>{recipe.title}</p>
        <p className={styles.card_subtitle}>{recipe.subtitle}</p>
        <p className={styles.tipa_link}>{play} Retseptni ko’rish</p>
      </div>
    </Link>
  );
}
