import Head from "next/head";

export default function HtmlHeader({
  pageTitle,
}) {
  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  );
}
