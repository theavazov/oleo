import Image from "next/image";
import styles from "../../styles/home.module.css";
import background from "../../public/media/hero_bg.jpg";
import mask from "../../public/media/hero_mask.png";

export function MainHero() {
  return (
    <section className={styles.hero}>
      <div></div>
      <Image src={background} alt="background" className={styles.background} />
      <Image src={mask} alt="background" className={styles.mask} />
    </section>
  );
}
