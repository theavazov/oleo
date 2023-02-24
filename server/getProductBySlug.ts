import axios from "axios";

export async function getProductBySlug(locale: any, slug: any) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/products/${slug}`,
    { headers: { language: locale } }
  );

  const data = await res.data;

  return data;
}
