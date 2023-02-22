import Link from "next/link";
import styles from "./footer.module.css";
import logo from "../../../public/media/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { facebook, instagram, telegram, twitter } from "../../../public/icons";

export function Footer() {
  const { pathname } = useRouter();

  const socialmedia = [
    {
      id: 1,
      path: "#",
      icon: facebook,
    },
    {
      id: 2,
      path: "#",
      icon: twitter,
    },
    {
      id: 3,
      path: "#",
      icon: telegram,
    },
    {
      id: 4,
      path: "#",
      icon: instagram,
    },
  ];

  return (
    <>
      <footer
        className={styles.footer}
        style={{ marginTop: pathname === "/" ? "0px" : "120px" }}
      >
        <div className={`box ${styles.footer_inner}`}>
          <div className={styles.inner_left}>
            <div className={styles.left_top}>
              <Link href={"/"}>
                <Image src={logo} alt={"logo"} className={styles.logo} />
              </Link>
              <p>
                ООО «BARAKA FOOD» - компания-производитель масложировой
                продукции, одна из крупнейших в Узбекистане
              </p>
            </div>
            <div className={styles.left_div}>
              <p>Bizning ijtimoiy tarmoqlarimiz:</p>
              <nav className={styles.footer_nav}>
                {socialmedia.map((sm) => {
                  return (
                    <a
                      href={sm.path}
                      key={sm.id}
                      className={styles.sm}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      {sm.icon}
                    </a>
                  );
                })}
                <a href={`tel: +998 00 000 00 00`} className={styles.ft_number}>
                  +998 00 000 00 00
                </a>
              </nav>
            </div>
          </div>
          <div className={styles.inner_right}>
            <div className={styles.inner_nav_container}>
              <p>Oleo kompaniyasi</p>
              <nav className={styles.inner_nav}>
                <Link href={"/"}>Asosiy sahifa</Link>
                <Link href={"/about"}>Biz haqimizda</Link>
                <Link href={"/products"}>Mahsulotlarimiz</Link>
                <Link href={"/news"}>Yangiliklar</Link>
                <Link href={"/business"}>Hamkorlik</Link>
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
          <p>{new Date().getFullYear()} - Powered by ABBA</p>
        </div>
      </div>
    </>
  );
}
