import { useContext } from "react";
import { TranslationsContext } from "../../../contexts/translations";
import styles from "./advantages.module.css";
import adv1 from "../../../public/media/adv1.svg";
import adv2 from "../../../public/media/adv2.svg";
import adv3 from "../../../public/media/adv3.svg";
import adv4 from "../../../public/media/adv4.svg";
import Image from "next/image";

type Props = {
  className: string;
  title?: string | any;
};

export function Advantages({ className, title }: Props) {
  const { t } = useContext(TranslationsContext);

  const advantages = [
    {
      id: 1,
      title: t["advantages.title1"],
      description: t["advantages.desc1"],
      icon: adv1,
    },
    {
      id: 2,
      title: t["advantages.title2"],
      description: t["advantages.desc2"],
      icon: adv2,
    },
    {
      id: 3,
      title: t["advantages.title3"],
      description: t["advantages.desc3"],
      icon: adv3,
    },
    {
      id: 4,
      title: t["advantages.title4"],
      description: t["advantages.desc4"],
      icon: adv4,
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
                <Image
                  src={advantage.icon}
                  alt="svg"
                  width={115}
                  height={130}
                />
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
