import Link from "next/link";
import { FaBars } from "react-icons/fa"

const Navbar = () => {

    return (
        <nav className="nav mobile">
            <ul className="nav-links">
                <li>
                    <Link className="nav-link" href="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" href="/">Skills</Link>
                </li>
                <li>
                    <Link className="nav-link" href="#projects">Projects</Link>
                </li>
                <li>
                    <Link className="nav-link" href="/">Contact me</Link>
                </li>
            </ul>
            <div className="bars">
                <FaBars size={30} />
            </div>
        </nav>
    );
}

export default Navbar;
