import { useContext } from "react";
import { ModalContext } from "../../../contexts/modal";
import { TranslationsContext } from "../../../contexts/translations";
import { buy } from "../../../public/icons";
import { Button } from "../../utils/buttons/buttons";
import styles from "./whyus.module.css";

type Props = {
  variant: "stats" | "business";
  className: string;
  title: string | any;
};

export function WhyUsSection({ variant, className, title }: Props) {
  return (
    <article className={className}>
      <div
        style={{ maxWidth: variant === "stats" ? "1032px" : "" }}
        className="box section_inner"
      >
        <h3 className="section_title">{title}</h3>
        <>{variant === "business" ? <Business /> : <Stats />}</>
      </div>
    </article>
  );
}

const Stats = () => {
  const { t } = useContext(TranslationsContext);

  return (
    <div className={styles.container}>
      <div className={styles.stats_div}>
        <p>{t["whyus.about_desc1"]}</p>
        <h5>{t["whyus.about_title1"]}</h5>
      </div>
      <div className={styles.stats_white}>
        <p>{t["whyus.about_desc2"]}</p>
        <div className={styles.animation_box}>
          <svg className={styles.svg} viewBox="0 0 100 100">
            <circle className={styles.meter} cx="50" cy="50" r="40" />
          </svg>
          <h6>{t["whyus.about_title2"]}</h6>
        </div>
      </div>
      <div className={styles.stats_right}>
        <div className={styles.stats_div}>
          <p>{t["whyus.about_desc3"]}</p>
          <h5 className={styles.yetim_title}>{t["whyus.about_title3"]}</h5>
        </div>
        <div className={styles.stats_div}>
          <p>{t["whyus.about_desc4"]}</p>
          <h5>{t["whyus.about_title4"]}</h5>
        </div>
      </div>
    </div>
  );
};

const Business = () => {
  const { setVariant, setIsModal } = useContext(ModalContext);
  const { t } = useContext(TranslationsContext);

  const myFunction = () => {
    setVariant("business");
    setIsModal(true);
  };

  return (
    <div className={styles.business_container}>
      <div className={styles.stats_container}>
        <div className={styles.stats_div}>
          <p>{t["whyus.business_desc1"]}</p>
          <h5>{t["whyus.business_title1"]}</h5>
        </div>
        <div className={styles.stats_div}>
          <p>{t["whyus.business_desc2"]}</p>
          <h5 className={styles.yetim_title}>{t["whyus.business_title2"]}</h5>
        </div>
        <div className={styles.stats_white}>
          <p>{t["whyus.business_desc3"]}</p>
          <div className={styles.animation_box}>
            <svg className={styles.svg} viewBox="0 0 100 100">
              <circle className={styles.meter} cx="50" cy="50" r="40" />
            </svg>
            <h6>{t["whyus.business_title2"]}</h6>
          </div>
        </div>
      </div>
      <div className={styles.business_content}>
        <p>{t["whyus.business_last_text"]}</p>
        <Button variant="primary" icon={buy} customFunction={myFunction}>
          {t["main.send_request"]}
        </Button>
      </div>
    </div>
  );
};
