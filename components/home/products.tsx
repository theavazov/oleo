import { useContext } from "react";
import { ProductsContext } from "../../contexts/products";
import { arrowRight, download } from "../../public/icons";
import styles from "../../styles/home.module.css";
import { ProductCard } from "../universal/product_card/product_card";
import { Button } from "../utils/buttons/buttons";

export function MainProducts() {
  const { products } = useContext(ProductsContext);
  return (
    <article className={styles.products_section}>
      <div className="bigbox grid_container">
        {products.map((product: any, i: number) => {
          return <ProductCard key={i} product={product} />;
        })}
      </div>
      <div className={`box ${styles.products_bottom_info}`}>
        <div className={styles.products_btns}>
          <Button variant="primary" icon={arrowRight} path={"/products"}>
            Batafsil ko`rish
          </Button>
          <Button variant="third" icon={download} path={"#"}>
            Katalogni Yuklab olish
          </Button>
        </div>
      </div>
    </article>
  );
}
