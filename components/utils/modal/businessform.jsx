import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import Select from "react-select";
import { ModalContext } from "../../../contexts/modal";
import { TranslationsContext } from "../../../contexts/translations";
import { buy } from "../../../public/icons";
import { Toast } from "../../universal/toast/toast";
import { Button } from "../buttons/buttons";
import styles from "./modal.module.css";

export function BusinessForm() {
  const { locale } = useRouter();
  const { setIsModal } = useContext(ModalContext);
  const { t } = useContext(TranslationsContext);
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(-1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isValid, setIsValid] = useState(false);

  async function getActivities(locale) {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_ENDPOINT + "/activities",
      { headers: { language: locale } }
    );

    const data = await res.data;

    return data;
  }

  useEffect(() => {
    getActivities(locale)
      .then((res) => {
        setActivities(res.results);
      })
      .catch((e) => console.log(e));
  }, [locale]);

  const options = [];

  activities?.map((job) => {
    options.push({ value: job.id, label: job.name });
  });

  const handleActivity = (option) => {
    setSelectedActivity(option.value);
    setIsValid(true);
  };

  async function postRequest(name, number, activity) {
    const data = {
      full_name: name,
      nbm: number,
      activity: activity,
    };

    const res = await axios.post(
      process.env.NEXT_PUBLIC_ENDPOINT + "/add_aplication",
      data
    );

    return await res;
  }

  const handleRequest = (e) => {
    e.preventDefault();
    if (isValid && number.length >= 14) {
      postRequest(name, number, selectedActivity)
        .then((res) => {
          if (res.status === 201) {
            setIsSuccess(true);
            setName("");
            setNumber("");
            setSelectedActivity(-1);
            setTimeout(() => {
              setIsModal(false);
              setIsSuccess(false);
            }, 1000);
          }
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <>
      <form className={styles.business_form} onSubmit={handleRequest}>
        <div className={styles.inputs}>
          <input
            type="text"
            placeholder={t["form.name"]}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Select
            placeholder={t["form.activity"]}
            onChange={handleActivity}
            options={options}
            className={styles.mySelect}
            required
          ></Select>
          <IMaskInput
            mask={"+998 (00) 000 00 00"}
            required
            placeholder={t["form.phone"]}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button
          className={styles.mybutton}
          type="submit"
          style={{ opacity: isValid ? "1" : "0.6" }}
          disabled={isValid ? false : true}
        >
          <Button variant="primary" icon={buy}>
            {t["main.send_request"]}
          </Button>
        </button>
      </form>
      <Toast toastCase="post" isSuccess={isSuccess} />
    </>
  );
}
