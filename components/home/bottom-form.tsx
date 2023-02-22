import styles from "../../styles/home.module.css";
import { MainForm } from "../universal/form/form";

export function MainBottomForm() {
  return (
    <article className={styles.bottom_form_section}>
      <div className={`box ${styles.bottom_form_section_inner}`}>
        <span></span>
        <MainForm />
      </div>
    </article>
  );
}
