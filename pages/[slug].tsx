import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";
import { Location } from "../components/utils/location/location";

export default function RetseptPage() {
  return (
    <>
      <CustomHead />
      <Layout>
        <Location location={"retsept page"} backPath={"/"} />
      </Layout>
    </>
  );
}
