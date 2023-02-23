import { useRouter } from "next/router";
import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";
import { Location } from "../components/utils/location/location";
import { url } from "./_app";

export default function RetseptPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <CustomHead
        title={"Oleo | Retseptlar"}
        desc={"Barcha retseptlar"}
        canonical={`${url}/${slug}`}
      />
      <Layout>
        <Location location={"retsept page"} backPath={"/"} />
      </Layout>
    </>
  );
}
