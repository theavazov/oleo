import { useContext } from "react";
import { ProductsContext } from "../contexts/products";
import { NewsCard } from "./universal/news_card/news_card";

export function AllNews({ title }: { title: string | any }) {
  const { news } = useContext(ProductsContext);

  return (
    <>
      <div className="box">
        <h3 className="section_title">{title}</h3>
      </div>
      <div className={`bigbox grid_container`}>
        {news.length > 0
          ? news.map((news: any, i: number) => {
              return <NewsCard key={i} news={news} />;
            })
          : null}
      </div>
    </>
  );
}
