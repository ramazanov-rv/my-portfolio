import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 Error</title>
      </Head>
      <div className="error-contaniner">
        <div className="error-content">
          <h1 className="error-title">404</h1>
          <h3 className="error-notfound">Not Found</h3>
          <p className="error-decription">
            The resource requested could not be found on the server
          </p>
          <button className="error-button">
            <Link className="error-link" href="/">
              Back
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
