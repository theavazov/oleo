import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";
import { Location } from "../../components/utils/location/location";

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
      </Layout>
    </>
  );
}
