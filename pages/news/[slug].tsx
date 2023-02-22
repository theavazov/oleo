import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";
import { Location } from "../../components/utils/location/location";
import styles from "../../styles/news.module.css";
import newsImg from "../../public/media/about_img.jpg";
import { NewsCard } from "../../components/universal/news_card/news_card";
import { CustomImage } from "../../components/utils/image";
import { share } from "../../public/icons";

export default function NewsInnerPage() {
  const newsList = [
    {
      title: 'Растительно-сливочный спред "OLEO"',
      slug: "news-1",
      image: newsImg,
    },
    {
      title: 'Растительно-сливочный спред "OLEO"',
      slug: "news-2",
      image: newsImg,
    },
    {
      title: 'Растительно-сливочный спред "OLEO"',
      slug: "news-3",
      image: newsImg,
    },
    {
      title: 'Растительно-сливочный спред "OLEO"',
      slug: "news-4",
      image: newsImg,
    },
    {
      title: 'Растительно-сливочный спред "OLEO"',
      slug: "news-5",
      image: newsImg,
    },
    {
      title: 'Растительно-сливочный спред "OLEO"',
      slug: "news-6",
      image: newsImg,
    },
  ];

  return (
    <>
      <CustomHead />
      <Layout>
        <Location
          location={"slug"}
          backPath={"/news"}
          parent={{ text: "Yangiliklarimiz", path: "/news" }}
        />
        <article>
          <div className={`box ${styles.single_news_inner}`}>
            <div className={styles.single_news_top}>
              <h2 className="section_title">
                Iran protests: &apos;No going back&apos; as unrest hits 100 days
              </h2>
              <div className={styles.single_news_extra}>
                <button className={styles.share_btn}>{share}</button>
                <p className={styles.single_news_date}>21.05.1998</p>
              </div>
            </div>
            <div className={styles.single_news_content}>
              <div className={styles.single_news_img}>
                <CustomImage source={newsImg} alt="single news" />
              </div>
              <div className={styles.single_news_desc}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae itaque unde ipsum voluptas accusantium natus
                  quibusdam eos illum est necessitatibus. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Molestiae itaque unde ipsum
                  voluptas accusantium natus quibusdam eos illum est
                  necessitatibus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae itaque unde ipsum voluptas accusantium natus
                  quibusdam eos illum est necessitatibus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae itaque unde ipsum voluptas accusantium natus
                  quibusdam eos illum est necessitatibus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae itaque unde ipsum voluptas accusantium natus
                  quibusdam eos illum est necessitatibus.
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className={styles.news_section}>
          <h3 className="box section_title">Boshqa yangiliklar</h3>
          <div className={`bigbox ${styles.news_section_inner}`}>
            {newsList.map((news: any, i: number) => {
              return <NewsCard key={i} news={news} />;
            })}
          </div>
        </article>
      </Layout>
    </>
  );
}
