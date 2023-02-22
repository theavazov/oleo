import { MainAbout } from "../components/home/about";
import { MainBottomForm } from "../components/home/bottom-form";
import { MainBottomSection } from "../components/home/bottom-section";
import { MainNewsSection } from "../components/home/news";
import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";

export default function Home() {
  return (
    <>
      <CustomHead />
      <Layout>
        <MainAbout />
        <MainNewsSection />
        <MainBottomSection />
        <MainBottomForm />
      </Layout>
    </>
  );
}
