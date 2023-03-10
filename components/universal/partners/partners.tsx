import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { TranslationsContext } from "../../../contexts/translations";
import { getPartners } from "../../../server/getPartners";
import styles from "./partners.module.css";

export function Partners() {
  const { locale } = useRouter();
  const { t } = useContext(TranslationsContext);
  const [partners, setPartners] = useState<any>([]);

  useEffect(() => {
    getPartners(locale)
      .then((res) => {
        setPartners(res.results);
      })
      .catch((e) => console.log(e));
  }, [locale]);

  return (
    <article className="section">
      <div className="box section_inner">
        <h3 className="section_title">{t["main.partners_title"]}</h3>
        <div className={styles.partners_container}>
          {partners.map((partner: any, i: number) => {
            return (
              <div key={i} className={styles.partner}>
                <Image
                  src={partner.image}
                  alt="partner"
                  className={styles.partner_img}
                  width={165}
                  height={70}
                />
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
