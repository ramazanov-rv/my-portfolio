import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="nav">
            <ul className="nav-links">
                <li>
                    <Link className="nav-link" href="/">Home</Link>
                </li>    
                <li>
                    <Link className="nav-link" href="/">Skills</Link>
                </li> 
                <li>
                    <Link className="nav-link" href="/">Projects</Link>
                </li> 
                <li>
                    <Link className="nav-link" href="/">Contact me</Link>
                </li>                    
            </ul>
        </nav>
    );
}

export default Navbar;
