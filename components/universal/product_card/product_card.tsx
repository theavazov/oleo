import Image from "next/image";
import Link from "next/link";
import styles from "./product_card.module.css";
import noimage from "../../../public/media/logo.png";
import { useContext } from "react";
import { TranslationsContext } from "../../../contexts/translations";

export function ProductCard({ product }: { product: any }) {
  const { t } = useContext(TranslationsContext);

  return (
    <Link href={`/products/${product.slug}`} className={styles.card}>
      <div className={styles.card_top}>
        <p>{product.category?.name}</p>
        <Image
          src={product.image ? product.image : noimage}
          alt={product.name ? product.name : "product image"}
          width={280}
          height={245}
        />
      </div>
      <div className={styles.card_bottom}>
        <p className={styles.card_title}>{product.name}</p>
        <p className={styles.card_subtitle}>{product.subtitle}</p>
        <p className={styles.readmore}>{t["main.readmore"]}</p>
      </div>
    </Link>
  );
}
