import React from "react";
import footer from "../assets/footer.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="mt-32 bg-black text-white py-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6)),url(${footer})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h1 className="font-bold text-4xl mb-4">
              Trip
              <span className="text-red-500">Asiik</span>
            </h1>
            <p className="text-sm">
              Kami berdedikasi untuk mewujudkan impian perjalanan Anda dengan
              tour yang dikurasi secara ahli dan pengalaman yang tak terlupakan.
            </p>
          </div>
          <div className="flex flex-col lg:items-center">
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline hover:text-red-500">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Destinasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Perjalanan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-sm">
              <li>123 alamat</li>
              <li>No telp</li>
              <li>Email</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4 ">
              <FaFacebook className="hover:text-red-500" />
              <FaInstagram className="hover:text-red-500" />
              <FaTwitter className="hover:text-red-500" />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center justify-end text-sm">
          <p>&copy; {new Date().getFullYear()} Travelse. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
