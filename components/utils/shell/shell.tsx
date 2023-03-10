import { useContext } from "react";
import { TranslationsContext } from "../../../contexts/translations";
import styles from "./shell.module.css";

export function Shell({ background }: { background: string }) {
  const { t } = useContext(TranslationsContext);

  return (
    <div className={styles.shell} style={{ color: background }}>
      <p>{t["main.shell"]}</p>
    </div>
  );
}
