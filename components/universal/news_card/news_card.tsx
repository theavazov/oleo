import Link from "next/link";
import { CustomImage } from "../../utils/image";
import styles from "./news_card.module.css";

type Props = {
  news: any;
};

export function NewsCard({ news }: Props) {
  return (
    <Link href={`/news/${news.slug}`} className={styles.card}>
      <div className={styles.card_img}>
        <CustomImage source={news.image} alt={news.title} />
      </div>
      <div className={styles.card_content}>
        <p className={styles.card_title}>{news.title}</p>
        <p className={styles.card_btn}>Yangilikni batafsil o`qish</p>
      </div>
    </Link>
  );
}
