import Link from "next/link";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`box ${styles.footer_inner}`}>
          <div className={styles.inner_left}></div>
          <div className={styles.inner_right}>
            <div className={styles.inner_nav_container}>
              <p>Oleo kompaniyasi</p>
              <nav className={styles.inner_nav}>
                <Link href={"#"}>Terms of Usage</Link>
                <Link href={"#"}>Terms of Usage</Link>
                <Link href={"#"}>Terms of Usage</Link>
                <Link href={"#"}>Terms of Usage</Link>
                <Link href={"#"}>Terms of Usage</Link>
              </nav>
            </div>
            <div className={styles.inner_nav_container}>
              <p>Aloqa</p>
              <nav className={styles.inner_nav}>
                <a href={`tel: +998 00 000 00 00`}>+998 00 000 00 00</a>
                <a href={`tel: +998 00 000 00 00`}>+998 00 000 00 00</a>
                <a href={`mailto: test@gmail.com`}>test@gmail.com</a>
                <a href={`mailto: test@gmail.com`}>test@gmail.com</a>
                <a href={`#`}>Toshkent shahar Uchtepa tumani 12-uy</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.footer_bottom}>
        <div className={`box ${styles.footer_bottom_inner}`}>
          <p>Copyright © PERO | Designed by abba marketing</p>
          <p>- Powered by ABBA</p>
        </div>
      </div>
    </>
  );
}
