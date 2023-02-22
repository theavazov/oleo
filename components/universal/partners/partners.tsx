import styles from "./partners.module.css";

export function Partners() {
  return (
    <article className="section">
      <div className="box section_inner">
        <h3 className="section_title">Bizga ishonch bildirgan kompaniyalar</h3>
        <div className={styles.partners_container}>
          <div className={styles.partner}>
            <div className={styles.partner_img}></div>
          </div>
          <div className={styles.partner}>
            <div className={styles.partner_img}></div>
          </div>
          <div className={styles.partner}>
            <div className={styles.partner_img}></div>
          </div>
          <div className={styles.partner}>
            <div className={styles.partner_img}></div>
          </div>
          <div className={styles.partner}>
            <div className={styles.partner_img}></div>
          </div>
          <div className={styles.partner}>
            <div className={styles.partner_img}></div>
          </div>
          <div className={styles.partner}>
            <div className={styles.partner_img}></div>
          </div>

          <div className={styles.partner}>
            <div className={styles.partner_img}></div>
          </div>
        </div>
      </div>
    </article>
  );
}
