import { MainAbout } from "../components/home/about";
import { MainBottomForm } from "../components/home/bottom-form";
import { MainBottomSection } from "../components/home/bottom-section";
import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";

export default function Home() {
  return (
    <>
      <CustomHead />
      <Layout>
        <MainAbout />
        <MainBottomSection />
        <MainBottomForm />
      </Layout>
    </>
  );
}
