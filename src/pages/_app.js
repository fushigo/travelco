import "@/styles/globals.css";
import "@/styles/data-tables-css.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Head>
        <title>Travelco</title>
        <meta name="description" content="Travel" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
