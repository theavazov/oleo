import { useContext, useEffect } from "react";
import { ModalContext } from "../../../contexts/modal";
import styles from "./modal.module.css";
import { ModalForm } from "./form";
import { Shell } from "../shell/shell";
import { BusinessForm } from "./businessform";
import { TranslationsContext } from "../../../contexts/translations";

export function Modal() {
  const { variant, setIsModal } = useContext(ModalContext);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      const target = e.target as Element;
      if (target?.className === styles.modal) {
        setIsModal(false);
      } else if (target?.className === styles.modal_inner) {
        setIsModal(true);
      }
    });
  }, []);

  return (
    <article className={styles.modal}>
      <div
        style={{ maxWidth: variant === "post" ? "560px" : "" }}
        className={styles.modal_inner}
      >
        {variant === "youtube" ? (
          <YoutubeModal />
        ) : variant === "business" ? (
          <BusinessModal />
        ) : variant === "post" ? (
          <PostModal />
        ) : null}
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

const BusinessModal = () => {
  return (
    <div className={styles.business_container}>
      <div className={styles.shell_wrapper}>
        <Shell background="#ffffff" />
      </div>
      <BusinessForm />
    </div>
  );
};

const PostModal = () => {
  const { t } = useContext(TranslationsContext);
  return (
    <div className={styles.post_container}>
      <p>{t["form.text"]}</p>
      <ModalForm />
    </div>
  );
};
