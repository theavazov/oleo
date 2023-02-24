import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { getSiteInfo } from "../server/getSiteInfo";

export const SiteInfoContext = createContext();

export default function SiteInfoContextProvider({ children }) {
  const { locale } = useRouter();
  const [siteInfo, setSiteInfo] = useState({});
  const [nums, setNums] = useState([]);

  useEffect(() => {
    getSiteInfo(locale)
      .then((res) => {
        setSiteInfo(res);
        setNums(res.nbm);
      })
      .catch((e) => console.log(e));
  }, []);

  let numbers = [];

  if (nums.length > 0) {
    numbers = nums.split("| ");
  }

  return (
    <SiteInfoContext.Provider value={{ siteInfo, numbers }}>
      {children}
    </SiteInfoContext.Provider>
  );
}
