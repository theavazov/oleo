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
      title: "Asosiy",
      path: "/",
      isActive: pathname === "/" ? true : false,
    },
    {
      id: 2,
      title: "Biz haqimizda",
      path: "/about",
      isActive: pathname === "/about" ? true : false,
    },
    {
      id: 3,
      title: "Mahsulotlarimiz",
      path: "/products",
      isActive: pathname.includes("/products") ? true : false,
    },
    {
      id: 4,
      title: "Yangiliklar",
      path: "/news",
      isActive: pathname.includes("/news") ? true : false,
    },
    {
      id: 5,
      title: "Hamkorlik",
      path: "/business",
      isActive: pathname === "/business" ? true : false,
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
                  className={
                    nav.isActive
                      ? `${styles.nav_link} ${styles.active}`
                      : styles.nav_link
                  }
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
