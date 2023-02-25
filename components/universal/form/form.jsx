import Image from "next/image";
import styles from "./form.module.css";
import logo from "../../../public/media/logo.png";

export function MainForm() {
  return (
    <div className={styles.bottom_form_div}>
      <div className={styles.bottom_form_top}>
        <Image src={logo} alt="logo" className={styles.bottom_form_logo} />
        <div className={styles.bottom_form_top_texts}>
          <h3 style={{ color: "var(--white)" }} className="section_title">
            Taklif va savollar uchun
          </h3>
          <p>
            Bizning operatorilarimiz siz bilan 24 soat ichida siz bilan
            bog’lanishadi
          </p>
        </div>
      </div>
      <form className={styles.bottom_form}>
        <input type="text" placeholder="Ism familiyangiz" />
        <input type="text" placeholder="Telefon raqamingiz" />
        <textarea
          cols="30"
          rows="6"
          placeholder="Habaringizni yozib qoldiring..."
        ></textarea>
        <button>Ma’lumotlarni yuborish</button>
      </form>
    </div>
  );
}
