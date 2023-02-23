import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAllNews } from "../server/getAllNews";
import { NewsCard } from "./universal/news_card/news_card";

export function AllNews({ title }: { title: string | any }) {
  const router = useRouter();
  const [news, setNews] = useState<any>([]);

  useEffect(() => {
    getAllNews(router.locale)
      .then((res) => {
        setNews(res.results);
      })
      .catch((e) => console.log(e));
  }, [router]);

  return (
    <>
      <div className="box">
        <h3 className="section_title">{title}</h3>
      </div>
      <div className={`bigbox grid_container`}>
        {news.map((news: any, i: number) => {
          return <NewsCard key={i} news={news} />;
        })}
      </div>
    </>
  );
}
