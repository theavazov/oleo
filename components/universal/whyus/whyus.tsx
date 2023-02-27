import { useContext } from "react";
import { ModalContext } from "../../../contexts/modal";
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
  return (
    <div className={styles.container}>
      <div className={styles.stats_div}>
        <p>biz bilan oson bog’laning va hamkorlikni boshlang</p>
        <h5>500+</h5>
      </div>
      <div className={styles.stats_white}>
        <p>Yillik ishlab chiqarish soni</p>
        <div className={styles.animation_box}>
          <svg className={styles.svg} viewBox="0 0 100 100">
            <circle className={styles.meter} cx="50" cy="50" r="40" />
          </svg>
          <h6>500 T</h6>
        </div>
      </div>
      <div className={styles.stats_right}>
        <div className={styles.stats_div}>
          <p>Katta buyurtmalarni ham yetkazib bera olami oz vaqtida</p>
          <h5 style={{ paddingLeft: "80px" }}>3K+</h5>
        </div>
        <div className={styles.stats_div}>
          <p>Katta buyurtmalarni ham yetkazib bera olami oz vaqtida</p>
          <h5>50+</h5>
        </div>
      </div>
    </div>
  );
};

const Business = () => {
  const { setVariant, setIsModal } = useContext(ModalContext);

  const myFunction = () => {
    setVariant("business");
    setIsModal(true);
  };

  return (
    <div className={styles.business_container}>
      <div className={styles.stats_container}>
        <div className={styles.stats_div}>
          <p>biz bilan oson bog’laning va hamkorlikni boshlang</p>
          <h5>B2B</h5>
        </div>
        <div className={styles.stats_div}>
          <p>Katta buyurtmalarni ham yetkazib bera olami oz vaqtida</p>
          <h5 style={{ paddingLeft: "40px" }}>1 T</h5>
        </div>
        <div className={styles.stats_white}>
          <p>Qisqa vaqt ichida yetkazib beramiz. Kutib qolmaysiz</p>
          <div className={styles.animation_box}>
            <svg className={styles.svg} viewBox="0 0 100 100">
              <circle className={styles.meter} cx="50" cy="50" r="40" />
            </svg>
            <h6>1 ish kuni</h6>
          </div>
        </div>
      </div>
      <div className={styles.business_content}>
        <p>
          orem Ipsum has been the industry&apos;s standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five1500s,
          when an unknown printer took a galley of
        </p>
        <Button variant="primary" icon={buy} customFunction={myFunction}>
          Zayavka yuborish
        </Button>
      </div>
    </div>
  );
};
