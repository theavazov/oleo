import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";
import { Location } from "../../components/utils/location/location";
import styles from "../../styles/news.module.css";
import noimage from "../../public/media/logo.png";
import { CustomImage } from "../../components/utils/image";
import { share } from "../../public/icons";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { getNewsBySlug } from "../../server/getNewsBySlug";
import { url } from "../_app";
import { AllNews } from "../../components/news";
import { Toast } from "../../components/universal/toast/toast";
import { TranslationsContext } from "../../contexts/translations";

export default function NewsInnerPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { t } = useContext(TranslationsContext);

  const [singleOne, setSingleOne] = useState<any>({});
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${url}/news/${slug}`).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  useEffect(() => {
    if (router.isReady) {
      getNewsBySlug(router.locale, slug)
        .then((res) => {
          setSingleOne(res);
        })
        .catch(() => router.push("/404"));
    }
  }, [router]);

  return (
    <>
      <CustomHead
        title={singleOne?.title}
        desc={singleOne.meta?.meta_deck}
        canonical={`${url}/news/${slug}`}
      />
      <Layout>
        <Location
          location={singleOne?.title}
          backPath={"/news"}
          parent={{ text: t["main.news"], path: "/news" }}
        />
        <article>
          <div className={`box ${styles.single_news_inner}`}>
            <div className={styles.single_news_top}>
              <h2 className="section_title">{singleOne?.title}</h2>
              <div className={styles.single_news_extra}>
                <button className={styles.share_btn} onClick={copyToClipboard}>
                  {share}
                </button>
                <p className={styles.single_news_date}>
                  {singleOne.created_date?.substring(0, 10)}
                </p>
              </div>
            </div>
            <div className={styles.single_news_content}>
              <div className={styles.single_news_img}>
                <img
                  src={singleOne.image ? singleOne.image : noimage}
                  alt="single news"
                />
              </div>
              <div
                className={styles.single_news_desc}
                dangerouslySetInnerHTML={{ __html: singleOne?.body }}
              ></div>
            </div>
          </div>
        </article>
        <article className={styles.news_section}>
          <AllNews title={t["main.another_news"]} />
        </article>
        <Toast isSuccess={isCopied} toastCase={"copy"} />
      </Layout>
    </>
  );
}
