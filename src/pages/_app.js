import HtmlHeader from "@/components/Home/HtmlHeader";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <HtmlHeader pageTitle="Wakily Portfolio" />
      <Component {...pageProps} />
    </>
  );
}
