import axios from "axios";

export async function getNewsBySlug(locale: any, slug: any) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/articles/${slug}`,
    { headers: { language: locale } }
  );

  const data = await res.data;

  return data;
}
