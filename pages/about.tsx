import { Advantages } from "../components/universal/advantages/advantages";
import { CustomHead } from "../components/utils/head";
import { CustomImage } from "../components/utils/image";
import { Layout } from "../components/utils/layout";
import { Location } from "../components/utils/location/location";
import styles from "../styles/about.module.css";
import aboutImg from "../public/media/ab_pg.jpg";
import { facebook, instagram, telegram } from "../public/icons";
import { MainForm } from "../components/universal/form/form";
import chel from "../public/media/chel.png";
import Image from "next/image";
import { url } from "./_app";
import { WhyUsSection } from "../components/universal/whyus/whyus";
import { useContext } from "react";
import { ModalContext } from "../contexts/modal";
import { SiteInfoContext } from "../contexts/siteinfo";
import yt from "../public/media/yt.png";
import { TranslationsContext } from "../contexts/translations";

export default function Home() {
  const { t } = useContext(TranslationsContext);
  const { siteInfo, numbers } = useContext(SiteInfoContext);
  const { setVariant, setIsModal, setVideo } = useContext(ModalContext);

  const socialmedia = [
    {
      id: 1,
      path: siteInfo.facebook,
      icon: facebook,
    },
    {
      id: 2,
      path: siteInfo.telegram,
      icon: telegram,
    },
    {
      id: 3,
      path: siteInfo.instagram,
      icon: instagram,
    },
  ];

  return (
    <>
      <CustomHead
        title={`Oleo | ${t["main.about"]}`}
        desc={
          "“BARAKA FOOD” MChJ 2012-yilda tashkil etilgan bo‘lib, OLEO savdo belgisi ostida sariyog‘, sabzavot-qaymoq yormalari va margarinlar ishlab chiqarish bilan shug‘ullanadi. Mahsulotlarimizning keng assortimenti funksionallik, lazzat va teksturani yuqori ozuqaviy qiymat bilan birlashtiradi."
        }
        canonical={`${url}/about`}
      />
      <Layout>
        <Location location={t["main.about"]} backPath={"/"} />
        <article className="mini_section">
          <div className={`box ${styles.intro_inner}`}>
            <div className={styles.intro_left}>
              <h3 className="section_title">{t["main.about_title"]}</h3>
              <p>{t["main.about_desc"]}</p>
            </div>
            <div
              className={styles.intro_right}
              onClick={() => {
                setVariant("youtube");
                setVideo(siteInfo?.youtube);
                setIsModal(true);
              }}
            >
              <Image src={yt} alt="button" />
            </div>
          </div>
        </article>
        <Advantages className="mini_section" />
        <article className="mini_section">
          <div className={`box ${styles.middle_inner}`}>
            <div className={styles.middle_img}>
              <CustomImage source={aboutImg} alt="about image" />
            </div>
            <div className={styles.middle_content}>
              <div className={styles.middle_texts}>
                <h3 className="section_title">{t["main.our_team"]}</h3>
                <p className={styles.middle_desc}>{t["main.our_team_desc"]}</p>
              </div>
              <nav className={styles.middle_nav}>
                {socialmedia.map((sm) => {
                  return (
                    <a
                      href={sm.path}
                      key={sm.id}
                      className={styles.sm}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      {sm.icon}
                    </a>
                  );
                })}
                <a href={`tel: ${numbers[0]}`} className={styles.middle_number}>
                  {numbers[0]}
                </a>
              </nav>
            </div>
          </div>
        </article>
        <WhyUsSection
          variant="stats"
          className="mini_section"
          title={t["whyus.title_about"]}
        />
        <article className="mini_section">
          <div className={`box ${styles.about_bottom_inner}`}>
            <MainForm />
            <div className={styles.about_bottom_right}>
              <Image src={chel} alt="chelovek" />
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
}
