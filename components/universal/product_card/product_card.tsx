import Image from "next/image";
import Link from "next/link";
import styles from "./product_card.module.css";

export function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/products/${product.slug}`} className={styles.card}>
      <div className={styles.card_top}>
        <p>{product.category?.name}</p>
        <Image
          src={product.image}
          alt={product.name ? product.name : "product image"}
          width={280}
          height={245}
        />
      </div>
      <div className={styles.card_bottom}>
        <p className={styles.card_title}>{product.name}</p>
        <p className={styles.readmore}>Batafsil ko`rish</p>
      </div>
    </Link>
  );
}
