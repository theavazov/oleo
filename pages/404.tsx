import { CustomHead } from "../components/utils/head";
import styles from "../styles/error.module.css";
import error from "../public/media/error.png";
import Image from "next/image";
import Link from "next/link";
import { arrowRight } from "../public/icons";
import { url } from "./_app";
import { useContext } from "react";
import { TranslationsContext } from "../contexts/translations";

export default function ErrorPage() {
  const { t } = useContext(TranslationsContext);

  return (
    <>
      <CustomHead title={"Error - 404"} desc={"Error page"} canonical={url} />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Image src={error} alt="error image" />
          <p>{t["main.error_title"]} (404)</p>
          <Link href={"/"}>
            {arrowRight} {t["main.error_link"]}
          </Link>
        </div>
      </div>
    </>
  );
}
