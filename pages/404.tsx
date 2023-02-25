import { CustomHead } from "../components/utils/head";
import styles from "../styles/error.module.css";
import error from "../public/media/error.png";
import Image from "next/image";
import Link from "next/link";
import { arrowRight } from "../public/icons";
import { url } from "./_app";

export default function ErrorPage() {
  return (
    <>
      <CustomHead title={"Error - 404"} desc={"Error page"} canonical={url} />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Image src={error} alt="error image" />
          <p>Bunday sahifa mavjud emas (404)</p>
          <Link href={"/"}>{arrowRight} Asosiy menu qaytish</Link>
        </div>
      </div>
    </>
  );
}
