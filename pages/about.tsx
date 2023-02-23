import { Advantages } from "../components/universal/advantages/advantages";
import { CustomHead } from "../components/utils/head";
import { CustomImage } from "../components/utils/image";
import { Layout } from "../components/utils/layout";
import { Location } from "../components/utils/location/location";
import styles from "../styles/about.module.css";
import aboutImg from "../public/media/ab_pg.jpg";
import { facebook, instagram, telegram, twitter } from "../public/icons";
import { MainForm } from "../components/universal/form/form";
import chel from "../public/media/chel.png";
import Image from "next/image";
import { url } from "./_app";

export default function Home() {
  const socialmedia = [
    {
      id: 1,
      path: "#",
      icon: facebook,
    },
    {
      id: 2,
      path: "#",
      icon: twitter,
    },
    {
      id: 3,
      path: "#",
      icon: telegram,
    },
    {
      id: 4,
      path: "#",
      icon: instagram,
    },
  ];

  return (
    <>
      <CustomHead
        title={"Oleo | Biz haqimizda"}
        desc={
          "“BARAKA FOOD” MChJ 2012-yilda tashkil etilgan bo‘lib, OLEO savdo belgisi ostida sariyog‘, sabzavot-qaymoq yormalari va margarinlar ishlab chiqarish bilan shug‘ullanadi. Mahsulotlarimizning keng assortimenti funksionallik, lazzat va teksturani yuqori ozuqaviy qiymat bilan birlashtiradi."
        }
        canonical={`${url}/about`}
      />
      <Layout>
        <Location location={"Biz haqimizda"} backPath={"/"} />
        <article className="mini_section">
          <div className={`box ${styles.intro_inner}`}>
            <div className={styles.intro_left}>
              <h3 className="section_title">“OLEO” MCHJ korxonasi haqida</h3>
              <p>
                “BARAKA FOOD” MChJ 2012-yilda tashkil etilgan bo‘lib, OLEO savdo
                belgisi ostida sariyog‘, sabzavot-qaymoq yormalari va
                margarinlar ishlab chiqarish bilan shug‘ullanadi.
                Mahsulotlarimizning keng assortimenti funksionallik, lazzat va
                teksturani yuqori ozuqaviy qiymat bilan birlashtiradi.
                Mahsulotlarni ishlab chiqaruvchi professionallar jamoasi xavfsiz
                va yuqori sifatli mahsulotlarni ishlab chiqarish uchun xom ashyo
                tanlashda juda ma‘suliyatli.“BARAKA FOOD” MChJ 2012-yilda
                tashkil etilgan bo‘lib,“BARAKA FOOD” MChJ 2012-yilda tashkil
                etilgan bo‘lib, OLEO savdo belgisi ostida sariyog‘,
                sabzavot-qaymoq yormalari va margarinlar ishlab chiqarish bilan
                shug‘ullanadi.{" "}
              </p>
            </div>
            <div className={styles.intro_right}></div>
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
                <h3 className="section_title">Bizning jamoamiz</h3>
                <p className={styles.middle_desc}>
                  Mamlakatimiz agrosanoat kompleksining barqaror va jadal
                  rivojlanayotganMamlakatimiz agrosanoat kompleksining barqaror
                  va jadal rivojlanayotganMamlakatimiz agrosanoat kompleksining
                  barqaror
                </p>
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
                <a
                  href={`tel: +998 00 000 00 00`}
                  className={styles.middle_number}
                >
                  +998 00 000 00 00
                </a>
              </nav>
            </div>
          </div>
        </article>
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
