import "../styles/globals.css";
// import SyncLoader from "react-spinners/SyncLoader";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ramazanov | Web Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
