import { ProductCard } from "../../components/universal/product_card/product_card";
import { Button } from "../../components/utils/buttons/buttons";
import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";
import { Location } from "../../components/utils/location/location";
import { download } from "../../public/icons";
import styles from "../../styles/product.module.css";
import saryog from "../../public/media/saryo.png";
import { url } from "../_app";

export const products = [
  {
    title: "Oleo mazali saryog’lari 200gr",
    slug: "oleo-mazali-saryoglari-200gr",
    category: "Oleo margarin",
    image: saryog,
  },
  {
    title: "Oleo viola 300gr",
    slug: "oleo-viola-300gr",
    category: "Oleo saryog`",
    image: saryog,
  },
  {
    title: "Oleo mazali saryog’lari 500gr",
    slug: "oleo-mazali-saryoglari-500gr",
    category: "Oleo margarin",
    image: saryog,
  },
  {
    title: "Oleo mazali saryog’lari 200gr",
    slug: "oleo-mazali-saryoglari-200gr",
    category: "Oleo margarin",
    image: saryog,
  },
];

export default function ProductsPage() {
  return (
    <>
      <CustomHead
        title={"Oleo | Mahsulotlar"}
        desc={"Oleoning barcha mahsulotlari"}
        canonical={`${url}/products}`}
      />
      <Layout>
        <Location location={"Mahsulotlarimiz"} backPath={"/"} />
        <section className={styles.big_section}>
          <article>
            <div className={`box ${styles.products_page_top}`}>
              <div>
                <h3 className="section_title">Barcha mahsulotlarimiz</h3>
                <p>(Jami n ta tovar)</p>
              </div>
              <Button variant="third" icon={download} path={"#"}>
                Katalogni Yuklab olish
              </Button>
            </div>
          </article>
          <article className={styles.products_section}>
            <div
              className={`bigbox grid_container ${styles.products_container}`}
            >
              {products.map((product: any, i: number) => {
                return <ProductCard key={i} product={product} />;
              })}
            </div>
          </article>
        </section>
      </Layout>
    </>
  );
}
