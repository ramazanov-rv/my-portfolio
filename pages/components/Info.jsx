import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { TbBrandTelegram } from "react-icons/tb"

const Info = () => {
    return (
        <section className="info">
            <Image
                src="/images/me.png"
                alt="Ramazan Ramazanov"
                className="info-me-photo"
                priority
                width={235}
                height={280}
            />
            <div className="info-name-job">
                <h1 className="info-name">Ramazan Ramazanov</h1>
                <h3 className="info-job">Frontend Web Developer</h3>
            </div>
            <ul className="media-links">
                <li>
                    <Link href="/" className="media-link">
                        <TbBrandTelegram className="media-icon" />
                    </Link>
                </li>
                <li>
                    <Link href="/" className="media-link">
                        <FaInstagram className="media-icon" />
                    </Link>
                </li>
                <li>
                    <Link href="/" className="media-link">
                        <FaWhatsapp className="media-icon" />
                    </Link>
                </li>
            </ul>   
        </section>
    );
}

export default Info;
