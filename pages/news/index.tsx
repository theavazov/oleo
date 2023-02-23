import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";
import { Location } from "../../components/utils/location/location";
import styles from "../../styles/news.module.css";
import { url } from "../_app";
import { AllNews } from "../../components/news";

export default function NewsPage() {
  return (
    <>
      <CustomHead
        title={"Oleo | Yangiliklar"}
        desc={"Oleo barcha yangiliklar"}
        canonical={`${url}/news`}
      />
      <Layout>
        <Location location={"Yangiliklarimiz"} backPath={"/"} />
        <article className={styles.news_section}>
          <AllNews title={"Barcha yangiliklarimiz"} />
        </article>
      </Layout>
    </>
  );
}
