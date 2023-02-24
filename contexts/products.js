import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { getProducts } from "../server/getProducts";

export const ProductsContext = createContext();

export default function ProductsContextProvider({ children }) {
  const { locale } = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(locale)
      .then((res) => {
        setProducts(res.results);
      })
      .catch((e) => console.log(e));
  }, [locale]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}
