import axios from "axios";

export async function getSiteInfo(locale: any) {
  const res = await axios.get(
    process.env.NEXT_PUBLIC_ENDPOINT + "/static_infos",
    { headers: { language: locale } }
  );

  const data = await res.data;

  return data;
}
