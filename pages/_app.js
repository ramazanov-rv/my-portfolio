import "../styles/globals.css";
import SyncLoader from "react-spinners/SyncLoader";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {!loading ? (
        <Component {...pageProps} />
      ) : (
        <div className="loader">
          <SyncLoader
            color="#F36C31"
            cssOverride={{}}
            loading
            size={20}
            speedMultiplier={1.2}
          />
        </div>
      )}
    </>
  );
}

export default MyApp;
