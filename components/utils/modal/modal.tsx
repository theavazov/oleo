import { useContext, useEffect } from "react";
import { ModalContext } from "../../../contexts/modal";
import styles from "./modal.module.css";

export function Modal() {
  const { variant, setIsModal } = useContext(ModalContext);

  useEffect(() => {
    if (window.innerWidth >= 880) {
      window.addEventListener("click", (e) => {
        const target = e.target as Element;
        if (target?.className === styles.modal) {
          setIsModal(false);
        } else if (target?.className === styles.modal_inner) {
          setIsModal(true);
        }
      });
    }
  }, []);

  return (
    <article className={styles.modal}>
      <div className={styles.modal_inner}></div>
    </article>
  );
}
