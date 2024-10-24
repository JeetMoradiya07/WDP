import {useState} from "react";
import {NavLink} from "react-router-dom";
import Sidebar from "../Slidebar/Sidebar";
import styles from "./Navbar.module.scss";
import logo from "/src/assets/Images/WDP.png";
import {FaUserCircle} from "react-icons/fa";
import Cart from "../Slidebar/Cart/Cart";
import Profile from "../Slidebar/Profile/Profile";
import ThemeToggle from "./ThemeToggle/ThemeToggle";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [profileIsOpen, setProfileIsOpen] = useState(false);

    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);
    const toggleCart = () => {
        setIsSidebarOpen(false);
        setCartIsOpen((prev) => !prev);
    };
    const toggleProfile = () => {
        setIsSidebarOpen(false);
        setProfileIsOpen((prev) => !prev);
    };

    return (
        <nav className={styles.navbar}>
            <ul className={styles.logo}>
                <NavLink to="/">
                    <img src={logo} alt="Logo" />
                </NavLink>
            </ul>
            <ul className={styles.NavItems}>
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/store" className={({isActive}) => (isActive ? styles.active : "")}>
                        Store
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>
                        About
                    </NavLink>
                </li>
                <li>
                    <ThemeToggle />
                </li>
                <li className={styles.login} onClick={openSidebar}>
                    <FaUserCircle size={30} />
                </li>
            </ul>
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={closeSidebar}
                cartIsOpen={cartIsOpen}
                toggleCart={toggleCart}
                profileIsOpen={profileIsOpen}
                toggleProfile={toggleProfile}
            />
            {cartIsOpen && <Cart onClose={toggleCart} />}
            {profileIsOpen && <Profile onClose={toggleProfile} />}
        </nav>
    );
};

export default Navbar;
