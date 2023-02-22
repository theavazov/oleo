import { Advantages } from "../components/universal/advantages/advantages";
import { Partners } from "../components/universal/partners/partners";
import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";
import { Location } from "../components/utils/location/location";

export default function Home() {
  return (
    <>
      <CustomHead />
      <Layout>
        <Location location={"Hamkorlikka chaqiramiz"} backPath={"/"} />
        <Advantages className="section" title={"Bizning afzalliklarimiz"} />
        <Partners />
      </Layout>
    </>
  );
}
