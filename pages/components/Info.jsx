import Link from "next/link";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { useState, useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader";

const Info = () => {
  // Preloader
  const [loading, setLoading] = useState(true);

  async function load() {
    const img = await fetch("http://localhost:3000/images/me.svg");
    setLoading(false);
    return img;
  }

  load()

  return (
    <>
      <div className={loading ? "loader" : "loader hide"}>
        <SyncLoader color="#F36C31" loading size={20} speedMultiplier={1.2} />
      </div>
      <section className="info">
        <img src="http://localhost:3000/images/me.svg" alt="Ramazan Ramazanov" className="info-me-photo" />
        <div className="info-name-job">
          <h1 className="info-name">Ramazan Ramazanov</h1>
          <h3 className="info-job">Frontend Web Developer</h3>
        </div>
        <ul className="media-links">
          <li>
            <Link
              target="_blank"
              href="https://t.me/airtribunal"
              className="media-link"
            >
              <TbBrandTelegram className="media-icon" />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Airtribunal"
              target="_blank"
              className="media-link"
            >
              <FaGithub className="media-icon" />
            </Link>
          </li>
          <li>
            <Link
              href="https://wa.me/9322488005"
              className="media-link"
              target="_blank"
            >
              <FaWhatsapp className="media-icon" />
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Info;
