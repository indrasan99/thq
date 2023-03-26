import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.png";
import home from "../assets/images/home.svg";
import quran from "../assets/images/quran.svg";
import attribution from "../assets/images/attribution.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <nav className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
            <div
                className="w-full flex items-center h-12 place-content-center rounded-lg text-xs text-gray-600 cursor-pointer mt-6 mb-8"
                onClick={handleToggle}>
                <img src={logo} className="w-10 h-10" alt="logo" />
            </div>

            <Link to='/' className="sidebar-pos flex justify-center items-center gap-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <img
                    src={home}
                    className="w-5 h-5 opacity-75"
                    alt="beranda"
                />
                <span className="text-sm font-medium">Beranda</span>
            </Link>

            <Link to='baca-alquran' className="sidebar-pos flex justify-center items-center gap-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <img
                    src={quran}
                    className="w-5 h-5 opacity-75"
                    alt="beli al-quran"
                />
                <span className="text-sm font-medium">Baca Al-Quran</span>
            </Link>

            <Link to='atribusi'
                className="sidebar-pos flex justify-center items-center gap-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <img
                    src={attribution}
                    className="w-5 h-5 opacity-75"
                    alt="atribusi"
                />
                <span className="text-sm font-medium">Atribusi</span>
            </Link>

            <div className="sidebar-pos absolute inset-x-0 bottom-0 border-t border-gray-100">
                <div
                    className="flex justify-center items-center bg-white  hover:bg-gray-50">
                    <img
                        alt="Indras Avatar"
                        src={avatar}
                        className="h-10 w-10 rounded-full object-cover border shadow-sm mr-2"
                    />
                    <span>
                        <p className="text-xs">
                            <strong className="block font-medium">
                                Indras
                            </strong>
                            <span> https://indrasan99.github.io</span>
                        </p>
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;