import { useContext } from "react";
import { ModalContext } from "../../contexts/modal";
import { arrowRight, buy } from "../../public/icons";
import styles from "../../styles/home.module.css";
import { Button } from "../utils/buttons/buttons";
import { Shell } from "../utils/shell/shell";
import myVideo from "../../public/media/oleo.mp4";

export function MainBusiness() {
  const { setVariant, setIsModal } = useContext(ModalContext);

  const customFunction = () => {
    setVariant("business");
    setIsModal(true);
  };

  return (
    <article className={styles.business_section}>
      <div className={`box ${styles.business_inner}`}>
        <Shell background="var(--yellow)" />
        <div className={styles.business_content_container}>
          <p>
            Мы приглашаем к сотрудничеству розничные сети, оптовые компании, и
            производителей:
          </p>
          <div className={styles.business_advantages}>
            <p>Крупные поставщики HoReCa</p>
            <p>Предприятия общественного питания</p>
            <p>Хлебокомбинаты</p>
            <p>Детские сады и больницы</p>
            <p>Кондитерские предприятия</p>
            <p>Социальные учреждения</p>
          </div>
        </div>
        <div className={styles.business_btns}>
          <Button variant="primary" icon={buy} customFunction={customFunction}>
            Sotib olish
          </Button>
          <Button variant="secondary" icon={arrowRight} path={"/business"}>
            Batafsil tanishish
          </Button>
        </div>
      </div>
      <video playsInline autoPlay loop muted>
        <source src={myVideo} type="video/mp4" />
      </video>
    </article>
  );
}
