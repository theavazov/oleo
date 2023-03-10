import { arrowRight, download } from "../../public/icons";
import styles from "../../styles/home.module.css";
import { Button } from "../utils/buttons/buttons";
import bl from "../../public/media/bl.png";
import logo from "../../public/media/logo.png";
import { CustomImage } from "../utils/image";
import Image from "next/image";
import { useContext } from "react";
import { SiteInfoContext } from "../../contexts/siteinfo";
import { TranslationsContext } from "../../contexts/translations";

export function MainAbout() {
  const { siteInfo } = useContext(SiteInfoContext);
  const { t } = useContext(TranslationsContext);

  return (
    <article className={styles.about_section}>
      <div className="mobile">
        <div className={styles.mobile_big_img}>
          <div>
            <Image src={logo} alt="logo" className={styles.about_logo} />
            <h3 className={styles.mobile_title}>{t["main.about"]}</h3>
          </div>
          <CustomImage source={bl} alt="about image" />
        </div>
      </div>
      <div className={`box ${styles.about_inner}`}>
        <div className="mobile">
          <div className={styles.mobile_div}>
            <Image src={logo} alt={"logo"} />
            <p>OOO “OLEO BARAKA”</p>
          </div>
        </div>
        <h3 className="section_title desktop">{t["main.about"]}</h3>
        <p className={styles.about_desc}>{t["main.about_desc"]}</p>
        <div className={styles.about_buttons}>
          <Button variant="primary" path="/about" icon={arrowRight}>
            {t["main.view_all"]}
          </Button>
          <Button
            variant="secondary"
            icon={download}
            path={siteInfo.cotalog}
            isDownload={true}
          >
            {t["main.dowload"]}
          </Button>
        </div>
      </div>
    </article>
  );
}
