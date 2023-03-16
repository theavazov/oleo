import { useContext } from "react";
import { TranslationsContext } from "../../../contexts/translations";
import { adv1, adv2, adv4, avd3 } from "../../../public/icons";
import styles from "./advantages.module.css";

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
      icon: avd3,
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
                {advantage.icon}
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
