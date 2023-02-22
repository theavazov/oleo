import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import { arrowRight, chevron } from "../../public/icons";
import styles from "../../styles/home.module.css";
import { Button } from "../utils/buttons/buttons";
import newsImg from "../../public/media/about_img.jpg";
import { NewsCard } from "../universal/news_card/news_card";

export function MainNewsSection() {
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
    <article className={`section news ${styles.news_section}`}>
      <div className={`box ${styles.news_section_texts}`}>
        <h3 className="section_title">Yangiliklar va voqea hodisalar</h3>
        <p>
          Siz bu yerda sohadagi songgi yangiliklar bilan tanishishingiz mumkin
        </p>
      </div>
      <div className={`bigbox ${styles.news_section_slides_container}`}>
        <Splide
          options={{
            type: "loop",
            gap: "20px",
            perPage: 4,
            drag: "free",
            focus: "center",
            autoScroll: {
              speed: 1,
            },
            classes: {
              prev: "splide__arrow--prev prev",
              next: "splide__arrow--next next",
            },
          }}
        >
          {newsList.map((news: any, i: number) => {
            return (
              <SplideSlide key={i}>
                <NewsCard news={news} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className={`box ${styles.news_section_bottom}`}>
        <Button variant="primary" path="/news" icon={arrowRight}>
          Barcha yangiliklar
        </Button>
        <div className={styles.news_section_buttons}>
          <button
            className="my__arrow splide__arrow--prev prev"
            aria-label="Next slide"
            aria-controls="splide01-track"
          >
            {chevron}
          </button>
          <button
            className="my__arrow splide__arrow--next next"
            aria-label="Next slide"
            aria-controls="splide01-track"
          >
            {chevron}
          </button>
        </div>
      </div>
    </article>
  );
}
