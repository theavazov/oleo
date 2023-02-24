import styles from "./whyus.module.css";

type Props = {
  variant: "stats" | "business";
  className: string;
  title: string | any;
};

export function WhyUsSection({ variant, className, title }: Props) {
  return (
    <article className={className}>
      <div className="box section_inner">
        <h3 className="section_title">{title}</h3>
        <>{variant === "business" ? <Business /> : <Stats />}</>
      </div>
    </article>
  );
}

const Stats = () => {
  return (
    <div className={styles.container}>
      <div className={styles.stats_div}></div>
      <span></span>
      <div className={styles.stats_right}>
        <div className={styles.stats_div}></div>
        <div className={styles.stats_div}></div>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <div className={styles.container}>
      <div className={styles.stats_div}></div>
    </div>
  );
};
