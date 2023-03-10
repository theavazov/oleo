import { useContext } from "react";
import { ModalContext } from "../../contexts/modal";
import { arrowRight, buy } from "../../public/icons";
import styles from "../../styles/home.module.css";
import { Button } from "../utils/buttons/buttons";
import { Shell } from "../utils/shell/shell";
import myVideo from "../../public/media/oleo.mp4";
import { TranslationsContext } from "../../contexts/translations";

export function MainBusiness() {
  const { setVariant, setIsModal } = useContext(ModalContext);
  const { t } = useContext(TranslationsContext);

  const customFunction = () => {
    setVariant("business");
    setIsModal(true);
  };

  return (
    <article className={styles.business_section}>
      <div className={`box ${styles.business_inner}`}>
        <Shell background="var(--yellow)" />
        <div className={styles.business_content_container}>
          <p>{t["main.call_to_business"]}</p>
          <div className={styles.business_advantages}>
            <p>{t["main.business1"]}</p>
            <p>{t["main.business2"]}</p>
            <p>{t["main.business3"]}</p>
            <p>{t["main.business4"]}</p>
            <p>{t["main.business5"]}</p>
            <p>{t["main.business6"]}</p>
          </div>
        </div>
        <div className={styles.business_btns}>
          <Button variant="primary" icon={buy} customFunction={customFunction}>
            {t["main.buy"]}
          </Button>
          <Button variant="secondary" icon={arrowRight} path={"/business"}>
            {t["main.view_all"]}
          </Button>
        </div>
      </div>
      <video playsInline autoPlay loop muted>
        <source src={myVideo} type="video/mp4" />
      </video>
    </article>
  );
}
