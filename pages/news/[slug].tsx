import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";
import { Location } from "../../components/utils/location/location";

export default function NewsInnerPage() {
  return (
    <>
      <CustomHead />
      <Layout>
        <Location
          location={"slug"}
          backPath={"/news"}
          parent={{ text: "Yangiliklarimiz", path: "/news" }}
        />
      </Layout>
    </>
  );
}
