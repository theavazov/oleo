import Link from "next/link";
import { CustomImage } from "../../utils/image";
import styles from "./news_card.module.css";
import noimage from "../../../public/media/logo.png";
import { useContext } from "react";
import { TranslationsContext } from "../../../contexts/translations";

type Props = {
  news: any;
};

export function NewsCard({ news }: Props) {
  const { t } = useContext(TranslationsContext);
  console.log(news);

  return (
    <Link href={`/news/${news.slug}`} className={styles.card}>
      <div className={styles.card_img}>
        <CustomImage
          source={news.image ? news.image : noimage}
          alt={news.title}
          width={430}
          height={270}
        />
      </div>
      <div className={styles.card_content}>
        <p className={styles.card_title}>{news.title}</p>
        <p className={styles.card_subtitle}>{news.subtitle}</p>
        <p className={styles.card_btn}>{t["main.readmore"]}</p>
      </div>
    </Link>
  );
}
