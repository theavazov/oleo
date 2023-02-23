import axios from "axios";

export async function getPartners(locale: any) {
  const res = await axios.get(process.env.NEXT_PUBLIC_ENDPOINT + "/partners", {
    headers: { language: locale },
  });

  const data = await res.data;

  return data;
}
