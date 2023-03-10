import { useContext } from "react";
import { TranslationsContext } from "../../../contexts/translations";
import { galochka } from "../../../public/icons";
import styles from "./toast.module.css";

type Props = {
  toastCase: string;
  isSuccess: boolean;
};

export function Toast({ toastCase, isSuccess }: Props) {
  const { t } = useContext(TranslationsContext);

  switch (toastCase) {
    case "copy":
      return (
        <p
          className={
            isSuccess
              ? `${styles.toast} ${styles.show} ${styles.copy}`
              : styles.toast
          }
        >
          {galochka} {t["main.copied"]}
        </p>
      );
    default:
      return (
        <p
          className={
            isSuccess
              ? `${styles.toast} ${styles.show} ${styles.message}`
              : styles.toast
          }
        >
          {galochka} {t["main.sent"]}
        </p>
      );
  }
}
