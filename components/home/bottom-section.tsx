import styles from "../../styles/home.module.css";
import { Advantages } from "../universal/advantages/advantages";
import { MainFAQ } from "./faq";

export function MainBottomSection() {
  return (
    <section className={styles.bottom_section}>
      <Advantages className="section" title={"Bizning afzalliklarimiz"} />
      <MainFAQ />
    </section>
  );
}
