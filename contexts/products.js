import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { getAllNews } from "../server/getAllNews";
import { getProducts } from "../server/getProducts";

export const ProductsContext = createContext();

export default function ProductsContextProvider({ children }) {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [news, setNews] = useState([]);
  const [lastUpdate, setLastUpdate] = useState("");

  useEffect(() => {
    getProducts(router.locale)
      .then((res) => {
        setProducts(res.results);
      })
      .catch((e) => console.log(e));

    getAllNews(router.locale)
      .then((res) => {
        setLastUpdate(res.results[0].created_date);
        setNews(res.results);
      })
      .catch((e) => console.log(e));
  }, [router]);

  return (
    <ProductsContext.Provider value={{ products, news, lastUpdate }}>
      {children}
    </ProductsContext.Provider>
  );
}
