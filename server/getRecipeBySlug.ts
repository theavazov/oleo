import axios from "axios";

export async function getRecipeBySlug(locale: any, slug: any) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/recipe/${slug}`,
    { headers: { language: locale } }
  );

  const data = await res.data;

  return data;
}
