import { useState, useEffect } from "react";
import "../styles/globals.css";
import SyncLoader from "react-spinners/SyncLoader";

function MyApp({ Component, pageProps }) {
  // Preloader
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      async function load() {
        const data = await fetch("/images/me.svg");
        console.log(data);
        if (data.ok) {
          setLoading(false);
        } else {
          setLoading(true)
        }
      }
      load();
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <SyncLoader color="#F36C31" loading size={20} speedMultiplier={1.2} />
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
