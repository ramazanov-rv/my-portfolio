import Link from "next/link";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <ul className="footer-links">
          <li>
            <Link
              target="_blank"
              href="https://t.me/ramazanov_rv"
              className="footer-link"
            >
              <TbBrandTelegram className="footer-icon" />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/ramazanov-rv"
              target="_blank"
              className="footer-link"
            >
              <FaGithub className="footer-icon" />
            </Link>
          </li>
          <li>
            <Link
              href="https://wa.me/9322488005"
              className="footer-link"
              target="_blank"
            >
              <FaWhatsapp className="footer-icon" />
            </Link>
          </li>
        </ul>
        <div className="mail-num">
          <Link
            href="mailto:info@ramazanov-web.ru"
            className="mail mail-num-link"
          >
            <IoMdMail className="mail-icon" />
            info@ramazanov-web.ru
          </Link>
          <Link href="tel:9322488005" className="number mail-num-link">
            <BsTelephoneFill className="num-icon" />
            +7 932-248-80-05
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
