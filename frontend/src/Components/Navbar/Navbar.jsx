import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="sticky mx-auto top-0 transition-all py-6 bg-transparent z-10">
      <div className="bg-black/75 px-4 fixed w-full z-50 top-0 py-2">
        <div className="max-w-7xl mx-auto py-2 px-5 flex bg-transparent justify-between items-center">
          <Link to="/">
            <h1 className="text-2xl text-white font-bold ">
              Trip
              <span className="text-red-500">Asiik</span>
            </h1>
          </Link>
          <div className="flex items-center gap-5">
            <nav className="hidden md:flex gap-7">
              <ul className="flex items-center font-semibold text-white text-xl gap-7">
                <Link to="/">
                  <li className="hover:underline">Beranda</li>
                </Link>
                <Link to="/about">
                  <li className="hover:underline">Tentang Kami</li>
                </Link>
                <Link to="/tours">
                  <li className="hover:underline">Perjalanan</li>
                </Link>
                <Link to="/gallery">
                  <li className="hover:underline">Galeri</li>
                </Link>
                <Link to="/contact">
                  <li className="hover:underline">Kontak</li>
                </Link>
              <Link to ="/ListAllTrip"  className="bg-red-500 text-white px-4 py-1 rounded-md font-semibold hover:bg-red-600 hover:cursor-pointer">
            List All Trip
              </Link>
              </ul>
            </nav>
            {/* Ini untuk Hamburger menu */}
            <HiMenuAlt1
              onClick={toggleMenu}
              className="cursor-pointer md:hidden text-white"
              size={30}
            />
          </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </header>
  );
};

export default Navbar;
