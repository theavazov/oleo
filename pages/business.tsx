import { Advantages } from "../components/universal/advantages/advantages";
import { Partners } from "../components/universal/partners/partners";
import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";
import { Location } from "../components/utils/location/location";
import styles from "../styles/business.module.css";
import introImg from "../public/media/intro.png";
import Image from "next/image";
import { url } from "./_app";

export default function Home() {
  return (
    <>
      <CustomHead
        title={"Oleo | Hamkorlik"}
        desc={"Biz bilan hamkorlik"}
        canonical={`${url}/about`}
      />
      <Layout>
        <Location location={"Hamkorlikka chaqiramiz"} backPath={"/"} />
        <article className={styles.intro_section}>
          <div className={`box ${styles.intro_inner}`}>
            <div className={styles.intro_content}>
              <h2 className={styles.intro_title}>
                B2B hamkorligiga chaqiramiz
              </h2>
              <p className={styles.intro_desc}>
                lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five
              </p>
            </div>
            <Image
              src={introImg}
              alt="intro image"
              className={styles.intro_img}
            />
          </div>
        </article>
        <Advantages className="section" title={"Bizning afzalliklarimiz"} />
        <Partners />
      </Layout>
    </>
  );
}
