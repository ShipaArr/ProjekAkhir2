import React from "react";
import banner from "../assets/banner.webp";

const Banner = () => {
  return (
    <div
      className="h-[500px] relative flex items-center"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-black inset-0 opacity-60 absolute"></div>
      <div className="text-white flex-col flex items-center justify-center px-4 lg:px-0 text-center max-w-7xl mx-auto z-20">
        <h2 className="lg:text-6xl text-4xl font-bold mb-6">
        Siap Memulai Petualangan Anda?
        </h2>
        <p className="text-xl mb-8 ">
        Pesan liburan impian Anda hari ini dan ciptakan kenangan yang tak terlupakan.
        </p>
        <button className="bg-red-500 px-3 py-2 rounded-md text-white hover:bg-black hover:cursor-pointer font-semibold transition-all duration-300">
        Mulai Perencanaan
        </button>
      </div>
    </div>
  );
};

export default Banner;
