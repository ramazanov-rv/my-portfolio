import { FaBars } from "react-icons/fa"

const Navbar = (props) => {

    const { isActive, handleNav, navList } = props

    return (
        <nav className="nav mobile">
            <ul className={!isActive ? "nav-links" : "nav-links active"}>
                {navList}
            </ul>
            <div onClick={handleNav} className={!isActive ? "bars" : "bars active"}>
                <FaBars size={30} />
            </div>
        </nav>
    );
}

export default Navbar;
