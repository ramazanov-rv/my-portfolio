import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ramazanov | Web Developer</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          name="keywords"
          content="ramazan ramazanov, ramazanov ramazan, fronten, web dev, web development, ramazanov frontend, ramazan frontend, ramazan web"
        />
        <meta name="author" content="Ramazan Ramazanov" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
