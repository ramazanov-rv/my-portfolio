import { useState, useEffect } from "react";
import "../styles/globals.css";
import SyncLoader from "react-spinners/SyncLoader";

function MyApp({ Component, pageProps }) {

  return (
    <>
      {/* {loading ? (
        <div className="loader">
          <SyncLoader color="#F36C31" loading size={20} speedMultiplier={1.2} />
        </div>
      ) : ( */}
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
