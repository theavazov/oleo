import { Advantages } from "../components/universal/advantages/advantages";
import { Partners } from "../components/universal/partners/partners";
import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";
import { Location } from "../components/utils/location/location";
import styles from "../styles/business.module.css";
import introImg from "../public/media/intro.png";
import Image from "next/image";
import { url } from "./_app";
import { WhyUsSection } from "../components/universal/whyus/whyus";
import { useContext } from "react";
import { TranslationsContext } from "../contexts/translations";

export default function Home() {
  const { t } = useContext(TranslationsContext);

  return (
    <>
      <CustomHead
        title={`Oleo | ${t["main.business"]}`}
        desc={"Biz bilan hamkorlik"}
        canonical={`${url}/about`}
      />
      <Layout>
        <Location location={t["main.lets_business"]} backPath={"/"} />
        <article className={styles.intro_section}>
          <div className={`box ${styles.intro_inner}`}>
            <div className={styles.intro_content}>
              <h2 className={styles.intro_title}>{t["main.business_title"]}</h2>
              <p className={styles.intro_desc}>{t["main.business_desc"]}</p>
            </div>
            <Image
              src={introImg}
              alt="intro image"
              className={styles.intro_img}
            />
          </div>
        </article>
        <WhyUsSection
          variant="business"
          className="section"
          title={t["whyus.title_business"]}
        />
        <Partners />
        <Advantages className="section" title={t["advantages.main_title"]} />
      </Layout>
    </>
  );
}
