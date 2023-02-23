import { MainAbout } from "../components/home/about";
import { MainBottomForm } from "../components/home/bottom-form";
import { MainBottomSection } from "../components/home/bottom-section";
import { MainNewsSection } from "../components/home/news";
import { MainProducts } from "../components/home/products";
import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";
import { url } from "./_app";

export default function Home() {
  return (
    <>
      <CustomHead title={"Oleo"} desc={"Oleo home page"} canonical={url} />
      <Layout>
        <MainProducts />
        <MainAbout />
        <MainNewsSection />
        <MainBottomSection />
        <MainBottomForm />
      </Layout>
    </>
  );
}
