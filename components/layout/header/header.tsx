import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import logo from "../../../public/media/logo.png";
import { chevron } from "../../../public/icons";

export function Header() {
  const { pathname } = useRouter();

  const navigation = [
    {
      id: 1,
      title: "Biz haqimizda",
      path: "/",
    },
    {
      id: 2,
      title: "Mahsulotlarimiz",
      path: "/",
    },
    {
      id: 3,
      title: "Yangiliklar",
      path: "/",
    },
    {
      id: 4,
      title: "Aloqa",
      path: "/",
    },
    {
      id: 5,
      title: "Nega biz",
      path: "/",
    },
  ];

  return (
    <header
      className={
        pathname === "/"
          ? `${styles.header} ${styles.main}`
          : `${styles.header} ${styles.extra}`
      }
    >
      <div className={`box ${styles.header_inner}`}>
        <div className={styles.main_nav}>
          <Link href={"/"}>
            <Image src={logo} alt="logo" className={styles.logo} />
          </Link>
          <nav className={styles.header_nav}>
            {navigation.map((nav) => {
              return (
                <Link
                  key={nav.id}
                  href={`${nav.path}`}
                  className={styles.nav_link}
                >
                  {nav.title}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className={styles.extra_nav}>
          <button className={styles.lang_changer}>Uz {chevron}</button>
          <a href={`tel: +998 00 000 00 00`} className={styles.number}>
            +998 00 000 00 00
          </a>
        </div>
      </div>
    </header>
  );
}
