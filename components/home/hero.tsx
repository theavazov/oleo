import Image from "next/image";
import styles from "../../styles/home.module.css";
import background from "../../public/media/hero_bg.jpg";
import mask from "../../public/media/hero_mask.png";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ModalContext } from "../../contexts/modal";
import noimage from "../../public/media/logo.png";
import mumu from "../../public/media/mumu.mp4";
import { pause, play } from "../../public/icons";
import { url } from "../../pages/_app";
import { TranslationsContext } from "../../contexts/translations";

export function MainHero() {
  const { locale } = useRouter();

  const { t } = useContext(TranslationsContext);
  const { setVariant, setProductContent, setIsModal } =
    useContext(ModalContext);

  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isCookie, setIsCookie] = useState<boolean>(true);

  const [product, setProduct] = useState<any>({});

  async function getMainProduct(locale: any) {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_ENDPOINT + "/main_product",
      { headers: { language: locale } }
    );

    const data = await res.data;

    return data;
  }

  useEffect(() => {
    getMainProduct(locale)
      .then((res) => {
        setProduct(res);
      })
      .catch((e) => console.log(e));
  }, [locale]);

  return (
    <section className={styles.hero}>
      <div className={`box ${styles.hero_inner}`}>
        <Image
          src={product.image ? product.image : noimage}
          alt={product.name}
          width={500}
          height={500}
        />
        <div className={styles.hero_content}>
          <div className={styles.hero_titles}>
            <h1 className={styles.hero_title}>{product.name}</h1>
            <p className={styles.hero_subtitle}>{product.subtitle}</p>
          </div>
          <div className={styles.hero_buttons}>
            <Link href={`/products/${product.slug}`}>{t["main.readmore"]}</Link>
            <button
              onClick={() => {
                setVariant("post");
                setProductContent(product);
                setIsModal(true);
              }}
            >
              {t["main.contact"]}
            </button>
          </div>
        </div>
        <button className={styles.pult} onClick={() => setIsMuted(!isMuted)}>
          {isMuted ? play : pause}
        </button>
        {isCookie ? (
          <div className={styles.cookie}>
            <p>
              {url} {t["main.cookie_text"]}
            </p>
            <div>
              <button
                onClick={() => {
                  setIsCookie(false);
                }}
              >
                {t["main.descline"]}
              </button>
              <button
                onClick={() => {
                  setIsMuted(false);
                  setIsCookie(false);
                }}
              >
                {t["main.accept"]}
              </button>
            </div>
          </div>
        ) : null}
      </div>
      <video
        className={styles.background}
        playsInline
        loop
        autoPlay
        muted={isMuted ? true : false}
      >
        <source src={mumu} type="video/mp4" />
      </video>
      <Image src={mask} alt="background" className={styles.mask} />
    </section>
  );
}
