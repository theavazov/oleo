import axios from "axios";

export async function getProducts(locale: any) {
  const res = await axios.get(process.env.NEXT_PUBLIC_ENDPOINT + "/products", {
    headers: { language: locale },
  });

  const data = await res.data;

  return data;
}
