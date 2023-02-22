import styles from "../../styles/home.module.css";

export function MainFAQ() {
  return (
    <article className="section">
      <div className="box section_inner">
        <h3 className="section_title">F.A.Q</h3>
        <div className={styles.faqs_container}></div>
      </div>
    </article>
  );
}
