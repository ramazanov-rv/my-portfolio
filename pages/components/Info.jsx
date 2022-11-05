import Link from "next/link";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";

const Info = ({img, name, job}) => {

  return (
    <>
      <section className="info">
        <img 
          src={img} 
          alt={name} 
          className="info-me-photo" 
          width={235}
          height={280}
        />
        <div className="info-name-job">
          <h1 className="info-name">{name}</h1>
          <h3 className="info-job">{job}</h3>
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
