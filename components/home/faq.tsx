import styles from "../../styles/home.module.css";
import Accordion from "react-bootstrap/Accordion";
import { chevron } from "../../public/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getFAQ } from "../../server/getFAQ";

export function MainFAQ() {
  const { locale } = useRouter();
  const [faqs, setFaqs] = useState<any>([]);

  useEffect(() => {
    getFAQ(locale)
      .then((res) => {
        setFaqs(res.results);
      })
      .catch((e) => console.log(e));
  }, [locale]);

  return (
    <article className="section">
      <div className="box section_inner">
        <h3 className="section_title">F.A.Q</h3>
        <Accordion className={styles.faqs_container}>
          {faqs.map((faq: any, i: number) => {
            return (
              <Accordion.Item key={i} eventKey={`${i}`} className={styles.faq}>
                <Accordion.Header className={styles.accordion_header}>
                  {faq?.question}
                  {chevron}
                </Accordion.Header>
                <Accordion.Body>{faq?.answer}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </article>
  );
}
