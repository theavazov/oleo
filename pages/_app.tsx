import type { AppProps } from "next/app";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export const url = "https://oleo-ndc.vercel.app";
