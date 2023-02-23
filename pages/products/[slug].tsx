import { products } from "./index";
import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";
import { Location } from "../../components/utils/location/location";
import styles from "../../styles/product.module.css";
import { ProductCard } from "../../components/universal/product_card/product_card";

export default function ProductInnerPage() {
  return (
    <>
      <CustomHead />
      <Layout>
        <Location
          location={"slug"}
          backPath={"/products"}
          parent={{ text: "Mahsulotlarimiz", path: "/products" }}
        />
        <article>
          <div className={`box ${styles.single_product_inner}`}></div>
        </article>
        <article className={styles.another_products_section}>
          <div className="box section_inner">
            <h3 className="section_title">O`xshash mahsulotlar</h3>
          </div>
          <div
            className={`bigbox grid_container ${styles.another_products_container}`}
          >
            {products.map((product: any, i: number) => {
              return <ProductCard key={i} product={product} />;
            })}
          </div>
        </article>
      </Layout>
    </>
  );
}
