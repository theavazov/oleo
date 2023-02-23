import styles from "../../styles/home.module.css";
import Accordion from "react-bootstrap/Accordion";
import { chevron } from "../../public/icons";

export function MainFAQ() {
  const faqs = [
    {
      question:
        "Oleo saryog`larini qayerdan sotib olsam bo’ladi? Oleo saryog`larini qayerdan sotib olsam bo’ladi? Oleo saryog`larini qayerdan sotib olsam bo’ladi? Oleo saryog`larini qayerdan sotib olsam bo’ladi?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Oleo saryog`larini qayerdan sotib olsam bo’ladi?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Oleo saryog`larini qayerdan sotib olsam bo’ladi?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <article className="section">
      <div className="box section_inner">
        <h3 className="section_title">F.A.Q</h3>
        <Accordion className={styles.faqs_container}>
          {faqs.map((faq: any, i: number) => {
            return (
              <Accordion.Item key={i} eventKey={`${i}`} className={styles.faq}>
                <Accordion.Header className={styles.accordion_header}>
                  {faq.question}
                  {chevron}
                </Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </article>
  );
}
