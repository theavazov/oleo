import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";
import { Location } from "../../components/utils/location/location";
import styles from "../../styles/news.module.css";
import { url } from "../_app";
import { AllNews } from "../../components/news";
import { useContext } from "react";
import { TranslationsContext } from "../../contexts/translations";

export default function NewsPage() {
  const { t } = useContext(TranslationsContext);

  return (
    <>
      <CustomHead
        title={`Oleo | ${t["main.news"]}`}
        desc={t["main.news_meta_desc"]}
        canonical={`${url}/news`}
      />
      <Layout>
        <Location location={t["main.news"]} backPath={"/"} />
        <article className={styles.news_section}>
          <AllNews title={t["main.all_news"]} />
        </article>
      </Layout>
    </>
  );
}
