import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";
import { Location } from "../../components/utils/location/location";
import styles from "../../styles/product.module.css";

export default function ProductsPage() {
  return (
    <>
      <CustomHead />
      <Layout>
        <Location location={"Mahsulotlarimiz"} backPath={"/"} />
      </Layout>
    </>
  );
}
