import Link from "next/link";
import { FaBars } from "react-icons/fa"
import { useState } from "react";

const Navbar = () => {

    const [isActive, setIsActive] = useState(false)

    function handleNav() {
        setIsActive(prevIsActive => !prevIsActive)
    }

    return (
        <nav className="nav mobile">
            <ul className={!isActive ? "nav-links" : "nav-links active"}>
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
                    <Link className="nav-link" href="/">Contact</Link>
                </li>
            </ul>
            <div onClick={handleNav} className={!isActive ? "bars" : "bars active"}>
                <FaBars size={30} />
            </div>
        </nav>
    );
}

export default Navbar;
