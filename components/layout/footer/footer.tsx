import Link from "next/link";
import styles from "./footer.module.css";
import logo from "../../../public/media/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { facebook, instagram, telegram } from "../../../public/icons";
import { useContext } from "react";
import { SiteInfoContext } from "../../../contexts/siteinfo";

export function Footer() {
  const { pathname } = useRouter();
  const { siteInfo, numbers } = useContext(SiteInfoContext);

  const socialmedia = [
    {
      id: 1,
      path: siteInfo.facebook,
      icon: facebook,
    },
    {
      id: 2,
      path: siteInfo.telegram,
      icon: telegram,
    },
    {
      id: 3,
      path: siteInfo.instagram,
      icon: instagram,
    },
  ];

  return (
    <>
      <footer
        className={
          pathname === "/" || pathname.includes("/products")
            ? styles.footer
            : `${styles.footer} ${styles.footer_with_margin}`
        }
      >
        <div className={`box ${styles.footer_inner}`}>
          <div className={styles.inner_left}>
            <div className={styles.left_top}>
              <Link href={"/"}>
                <Image
                  src={logo}
                  alt={"logo"}
                  className={styles.logo}
                  quality={100}
                />
              </Link>
              <p>
                ООО «BARAKA FOOD» - компания-производитель масложировой
                продукции, одна из крупнейших в Узбекистане
              </p>
            </div>
            <div className={styles.left_div}>
              <p>Bizning ijtimoiy tarmoqlarimiz:</p>
              <nav className={styles.footer_nav}>
                <div>
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
                </div>
                <a href={`tel: ${numbers[0]}`} className={styles.ft_number}>
                  {numbers[0]}
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
                {numbers.map((num: string) => {
                  return (
                    <a key={num} href={`tel: ${num}`}>
                      {num}
                    </a>
                  );
                })}
                <a href={`mailto: ${siteInfo.email}`}>{siteInfo.email}</a>
                <p>{siteInfo.adres}</p>
              </nav>
            </div>
          </div>
          <div className={styles.left_top_mobile}>
            <Link href={"/"}>
              <Image
                src={logo}
                alt={"logo"}
                className={styles.logo}
                quality={100}
              />
            </Link>
            <p>
              ООО «BARAKA FOOD» - компания-производитель масложировой продукции,
              одна из крупнейших в Узбекистане
            </p>
          </div>
        </div>
      </footer>
      <div className={styles.footer_bottom}>
        <div className={`box ${styles.footer_bottom_inner}`}>
          <p>Copyright © PERO | Designed by abba marketing</p>
          <p>{new Date().getFullYear()} - Powered by ABBA marketing</p>
        </div>
      </div>
    </>
  );
}
