import { useContext } from "react";
import { TranslationsContext } from "../../contexts/translations";
import styles from "../../styles/home.module.css";
import { Advantages } from "../universal/advantages/advantages";
import { MainFAQ } from "./faq";

export function MainBottomSection() {
  const { t } = useContext(TranslationsContext);

  return (
    <section className={styles.bottom_section}>
      <Advantages className="section" title={t["advantages.main_title"]} />
      <MainFAQ />
    </section>
  );
}
