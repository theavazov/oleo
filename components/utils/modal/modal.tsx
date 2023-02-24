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
      <div className={styles.modal_inner}>
        {variant === "youtube" ? <YoutubeModal /> : null}
      </div>
    </article>
  );
}

const YoutubeModal = () => {
  const { video } = useContext(ModalContext);

  return (
    <div className={styles.youtube_container}>
      <iframe src={`${video}?autoplay=1&mute=1&controls=1`}></iframe>
    </div>
  );
};
