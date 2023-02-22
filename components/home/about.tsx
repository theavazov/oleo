import Link from "next/link";
import styles from "../../styles/home.module.css";

export function MainAbout() {
  return (
    <article className={styles.about_section}>
      <div className={`box ${styles.about_inner}`}>
        <p className="section_title">Biz haqimizda</p>
        <p className={styles.about_desc}>
          “BARAKA FOOD” MChJ 2012-yilda tashkil etilgan bo‘lib, OLEO savdo
          belgisi ostida sariyog‘, sabzavot-qaymoq yormalari va margarinlar
          ishlab chiqarish bilan shug‘ullanadi. Mahsulotlarimizning keng
          assortimenti funksionallik, lazzat va teksturani yuqori ozuqaviy
          qiymat bilan birlashtiradi. Mahsulotlarni ishlab chiqaruvchi
          professionallar jamoasi xavfsiz va yuqori sifatli mahsulotlarni ishlab
          chiqarish uchun xom ashyo tanlashda juda ma‘suliyatli.
        </p>
        <div className={styles.about_buttons}>
          <Link href={"/about"} className={styles.about_link}>
            <div></div>
            <p>Batafsil</p>
          </Link>
          <button className={styles.about_video}></button>
        </div>
      </div>
    </article>
  );
}
