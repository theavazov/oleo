import Head from "next/head";
import { url } from "../../pages/_app";

// type Props = {
//   title: string | any;
//   desc: string | any;
//   canonical: string | any;
// };

export function CustomHead() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Oleo</title>
      <meta
        name="description"
        content={"NDC hamda Abba hamkorligidagi website"}
      />
      <link rel="canonical" href={"canonical"} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="ru" href={`${url}/ru`} />
      <link rel="alternate" hrefLang="uz" href={`${url}/uz`} />
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
