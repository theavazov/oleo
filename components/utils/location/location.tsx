import Link from "next/link";
import { useContext } from "react";
import { TranslationsContext } from "../../../contexts/translations";
import { chevron } from "../../../public/icons";
import styles from "./location.module.css";

type Props = {
  location: string | any;
  backPath: string;
  parent?: {
    text: string | any;
    path: string;
  };
};

export function Location({ location, backPath, parent }: Props) {
  const { t } = useContext(TranslationsContext);

  return (
    <article className={styles.location_section}>
      <div
        className={
          parent
            ? `header_box ${styles.location_inner} ${styles.none}`
            : `header_box ${styles.location_inner}`
        }
      >
        <Link href={`${backPath}`} className={styles.nazad}>
          {chevron} {t["main.back"]}
        </Link>
        <nav className={styles.location_nav}>
          <Link href={"/"} className={styles.node}>
            {t["main.main"]}
          </Link>
          <span className={styles.node}>/</span>
          {parent ? (
            <>
              <Link href={parent.path} className={styles.node}>
                {parent.text}
              </Link>
              <span className={styles.node}>/</span>
            </>
          ) : null}
          <p className={styles.node}>{location}</p>
        </nav>
      </div>
    </article>
  );
}
