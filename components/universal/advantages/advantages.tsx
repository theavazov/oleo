import Image from "next/image";
import { adv } from "../../../public/icons";
import styles from "./advantages.module.css";

type Props = {
  className: string;
  title?: string | any;
};

export function Advantages({ className, title }: Props) {
  const advantages = [
    {
      id: 1,
      title: "Sifatli mahsulotlardan",
      description:
        "Mamlakatimiz agrosanoat kompleksining barqaror va jadal rivojlanayotgan",
    },
    {
      id: 2,
      title: "Sifatli mahsulotlardan",
      description:
        "Mamlakatimiz agrosanoat kompleksining barqaror va jadal rivojlanayotgan",
    },
    {
      id: 3,
      title: "Sifatli mahsulotlardan",
      description:
        "Mamlakatimiz agrosanoat kompleksining barqaror va jadal rivojlanayotgan",
    },
    {
      id: 4,
      title: "Sifatli mahsulotlardan",
      description:
        "Mamlakatimiz agrosanoat kompleksining barqaror va jadal rivojlanayotgan",
    },
  ];

  return (
    <article className={className}>
      <div className={`box section_inner`}>
        {title ? <h3 className="section_title">{title}</h3> : null}
        <div className={styles.advantages_container}>
          {advantages.map((advantage) => {
            return (
              <div key={advantage.id} className={styles.advantage}>
                {adv}
                <div className={styles.advantage_texts}>
                  <p className={styles.advantage_title}>{advantage.title}</p>
                  <p className={styles.advantage_desc}>
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
