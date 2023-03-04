import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { chevron, phone } from "../../../public/icons";
import logo from "../../../public/media/logo.png";
import mobileLogo from "../../../public/media/mobile_logo.png";
import uz from "../../../public/media/uzb.png";
import ru from "../../../public/media/rus.png";
import gb from "../../../public/media/gb.png";
import { useContext } from "react";
import { SiteInfoContext } from "../../../contexts/siteinfo";

type Props = {
  isLangs: boolean;
  setIsLangs: Function;
  isMenu: boolean;
  setIsMenu: Function;
};

export function Header({ isLangs, setIsLangs, isMenu, setIsMenu }: Props) {
  const { pathname, locale, locales, asPath } = useRouter();
  const { numbers } = useContext(SiteInfoContext);

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
      style={{ backgroundColor: isMenu ? "var(--red)" : "" }}
    >
      <div className={`header_box ${styles.header_inner}`}>
        <button className={styles.hamburger} onClick={() => setIsMenu(!isMenu)}>
          <span className={isMenu ? styles.rotate45 : ""}></span>
          <span className={isMenu ? styles.hide : ""}></span>
          <span className={isMenu ? styles.rotate_45 : ""}></span>
        </button>
        <a href={`tel: ${numbers[0]}`} className={styles.mobile_number}>
          {phone}
        </a>
        <div className={styles.main_nav}>
          <Link href={"/"}>
            <Image src={logo} alt="logo" className={`desktop ${styles.logo}`} />
            <Image
              src={mobileLogo}
              alt="logo"
              className={`mobile ${styles.mobile_logo}`}
            />
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
          <button
            className={
              isLangs
                ? `${styles.lang_changer} ${styles.lang_changer_inherit}`
                : styles.lang_changer
            }
            onClick={() => setIsLangs(!isLangs)}
          >
            {locale === "uz"
              ? "O'zbekcha"
              : locale === "ru"
              ? "Русский"
              : locale === "en"
              ? " English"
              : ""}
            {chevron}
            <div
              className={
                isLangs ? `${styles.dropdown} ${styles.show}` : styles.dropdown
              }
            >
              {locales?.map((locale) => {
                if (locale === "uz") {
                  return (
                    <Link
                      key={locale}
                      href={asPath}
                      locale={locale}
                      className={styles.dropdown_link}
                    >
                      <Image src={uz} alt={"lang"} />
                      O&apos;zbekcha
                    </Link>
                  );
                } else if (locale === "ru") {
                  return (
                    <Link
                      key={locale}
                      href={asPath}
                      locale={locale}
                      className={styles.dropdown_link}
                    >
                      <Image src={ru} alt={"lang"} />
                      Русский
                    </Link>
                  );
                } else if (locale === "en") {
                  return (
                    <Link
                      key={locale}
                      href={asPath}
                      locale={locale}
                      className={styles.dropdown_link}
                    >
                      <Image src={gb} alt={"lang"} />
                      English
                    </Link>
                  );
                }
              })}
            </div>
          </button>
          <a href={`tel: ${numbers[0]}`} className={styles.number}>
            {numbers[0]}
          </a>
        </div>
      </div>
      {isMenu ? (
        <MobileMenu navigation={navigation} setIsMenu={setIsMenu} />
      ) : null}
    </header>
  );
}

const MobileMenu = ({
  navigation,
  setIsMenu,
}: {
  navigation: any;
  setIsMenu: Function;
}) => {
  const { locale, locales, asPath } = useRouter();

  return (
    <div className={styles.menu}>
      <div className={styles.menu_inner}>
        <nav className={styles.menu_nav}>
          {navigation.map((nav: any) => {
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
        <div className={styles.menu_bottom}>
          <p>Tilni tanlang:</p>
          <nav>
            {locales?.map((sl) => {
              return (
                <Link
                  key={sl}
                  href={asPath}
                  locale={sl}
                  className={
                    sl === locale
                      ? `${styles.menu_locale} ${styles.active}`
                      : styles.menu_locale
                  }
                  onClick={() => setIsMenu(false)}
                >
                  {sl.toUpperCase()}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};
