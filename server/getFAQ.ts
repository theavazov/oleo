import axios from "axios";

export async function getFAQ(locale: any) {
  const res = await axios.get(process.env.NEXT_PUBLIC_ENDPOINT + "/faq", {
    headers: { language: locale },
  });

  const data = await res.data;

  return data;
}
