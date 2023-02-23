import axios from "axios";

export async function getAllNews(locale: any) {
  const res = await axios.get(process.env.NEXT_PUBLIC_ENDPOINT + "/articles", {
    headers: { language: locale },
  });

  const data = await res.data;

  return data;
}
