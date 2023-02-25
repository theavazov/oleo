import { arrowRight, download } from "../../public/icons";
import styles from "../../styles/home.module.css";
import { Button } from "../utils/buttons/buttons";
import bl from "../../public/media/bl.png";
import logo from "../../public/media/logo.png";
import { CustomImage } from "../utils/image";
import Image from "next/image";
import { useContext } from "react";
import { SiteInfoContext } from "../../contexts/siteinfo";

export function MainAbout() {
  const { siteInfo } = useContext(SiteInfoContext);

  return (
    <article className={styles.about_section}>
      <div className="mobile">
        <div className={styles.mobile_big_img}>
          <div>
            <Image src={logo} alt="logo" className={styles.about_logo} />
            <h3 className={styles.mobile_title}>Biz haqimizda</h3>
          </div>
          <CustomImage source={bl} alt="about image" />
        </div>
      </div>
      <div className={`box ${styles.about_inner}`}>
        <h3 className="section_title desktop">Biz haqimizda</h3>
        <p className={styles.about_desc}>
          “BARAKA FOOD” MChJ 2012-yilda tashkil etilgan bo‘lib, OLEO savdo
          belgisi ostida sariyog‘, sabzavot-qaymoq yormalari va margarinlar
          ishlab chiqarish bilan shug‘ullanadi. Mahsulotlarimizning keng
          assortimenti funksionallik, lazzat va teksturani yuqori ozuqaviy
          qiymat bilan birlashtiradi. Mahsulotlarni ishlab chiqaruvchi
          professionallar jamoasi xavfsiz va yuqori sifatli mahsulotlarni ishlab
          chiqarish uchun xom ashyo tanlashda juda ma‘suliyatli.
        </p>
        <div className={styles.about_buttons}>
          <Button variant="primary" path="/about" icon={arrowRight}>
            Batafsil
          </Button>
          <Button
            variant="secondary"
            icon={download}
            path={siteInfo.cotalog}
            isDownload={true}
          >
            Katalogni Yuklab olish
          </Button>
        </div>
      </div>
    </article>
  );
}
