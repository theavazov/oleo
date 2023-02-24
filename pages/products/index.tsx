import { ProductCard } from "../../components/universal/product_card/product_card";
import { Button } from "../../components/utils/buttons/buttons";
import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";
import { Location } from "../../components/utils/location/location";
import { download } from "../../public/icons";
import styles from "../../styles/product.module.css";
import { url } from "../_app";
import { useContext } from "react";
import { SiteInfoContext } from "../../contexts/siteinfo";
import { ProductsContext } from "../../contexts/products";

export default function ProductsPage() {
  const { siteInfo } = useContext(SiteInfoContext);
  const { products } = useContext(ProductsContext);

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
                <p>(Jami {products.length} ta tovar)</p>
              </div>
              <div className="desktop">
                <Button
                  variant="third"
                  icon={download}
                  path={siteInfo.cotalog}
                  isDownload={true}
                >
                  Katalogni Yuklab olish
                </Button>
              </div>
            </div>
          </article>
          <article className={styles.products_section}>
            <div
              className={`bigbox grid_container ${styles.products_container}`}
            >
              {products
                ? products.map((product: any, i: number) => {
                    return <ProductCard key={i} product={product} />;
                  })
                : null}
            </div>
            <div className="box mobile">
              <div className={styles.j_btn}>
                <Button
                  variant="third"
                  icon={download}
                  path={siteInfo.cotalog}
                  isDownload={true}
                >
                  Katalogni Yuklab olish
                </Button>
              </div>
            </div>
          </article>
        </section>
      </Layout>
    </>
  );
}
