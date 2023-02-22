import { NewsCard } from "../../components/universal/news_card/news_card";
import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";
import { Location } from "../../components/utils/location/location";
import styles from "../../styles/news.module.css";
import newsImg from "../../public/media/about_img.jpg";

export default function NewsPage() {
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
        <Location location={"Yangiliklarimiz"} backPath={"/"} />
        <article className={styles.news_section}>
          <h3 className="box section_title">Barcha yangiliklarimiz</h3>
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
