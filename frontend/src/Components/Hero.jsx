import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/Hero1.webp";
import banner2 from "../assets/Hero2.jpg";
import banner3 from "../assets/Hero3.jpg";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container -mt-12 overflow-hidden">
      <Slider {...settings}>
        <div className="">
          <div
            className="h-[650px] lg:h-[800px] relative"
            style={{
              backgroundImage: `url(${banner1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative max-w-7xl mx-auto">
              <div className="flex h-[650px] justify-center items-center lg:pt-0 pt-20">
                <div className="flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0">
                  <h1 className="text-white font-bold text-4xl lg:text-6xl">
                    Temukan Petualangan Anda Berikutnya
                  </h1>
                  <p className="text-white lg:text-lg lg:w-[700px]">
                    Jelajahi destinasi yang menarik, ciptakan kenangan yang tak
                    terlupakan, dan mulailah perjalanan seumur hidup.
                  </p>
                  <button className="bg-red-500 px-3 py-2 text-white rounded-md font-semibold hover:bg-black hover:cursor-pointer transition-all duration-300">
                    Mulai Menjelajah
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="h-[650px] lg:h-[800px] relative"
            style={{
              backgroundImage: `url(${banner2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative max-w-7xl mx-auto">
              <div className="flex h-[650px] justify-center items-center lg:pt-0 pt-20">
                <div className="flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0">
                  <h1 className="text-white font-bold text-4xl lg:text-6xl">
                    Discover Your Next Adventure
                  </h1>
                  <p className="text-white lg:text-lg lg:w-[700px]">
                    Jelajahi destinasi yang menarik, ciptakan kenangan yang tak
                    terlupakan, dan mulailah perjalanan seumur hidup.
                  </p>
                  <button className="bg-red-500 px-3 py-2 text-white rounded-md font-semibold hover:bg-black hover:cursor-pointer transition-all duration-300">
                    Mulai Menjelajah
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="h-[650px] lg:h-[800px] relative"
            style={{
              backgroundImage: `url(${banner3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative max-w-7xl mx-auto">
              <div className="flex h-[650px] justify-center items-center lg:pt-0 pt-20">
                <div className="flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0">
                  <h1 className="text-white font-bold text-4xl lg:text-6xl">
                    Discover Your Next Adventure
                  </h1>
                  <p className="text-white lg:text-lg lg:w-[700px]">
                    Jelajahi destinasi yang menarik, ciptakan kenangan yang tak
                    terlupakan, dan mulailah perjalanan seumur hidup.
                  </p>
                  <button className="bg-red-500 px-3 py-2 text-white rounded-md font-semibold hover:bg-black hover:cursor-pointer transition-all duration-300">
                    Mulai Menjelajah
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div className="absolute left-[15%] bottom-[12%] hidden lg:flex items-center justify-center bg-white border border-gray-300 shadow-lg rounded-md  w-[1050px] mx-auto p-4 ">
        <div className="grid gap-5 grid-cols-4 flex-grow">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="" className="flex font-semibold gap-1 items-center">
              {/* <Search className="w-4 h-4" /> */}
              Lokasi yang dituju
            </label>
            <select
              name=""
              id=""
              className="border border-gray-300 rounded-sm p-1"
            >
              <option value="">Select options</option>
              <option value="">Bali</option>
              <option value="">India</option>
              <option value="">Tokyo</option>
              <option value="">Venice</option>
              <option value="">Paris</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
            Mulai Liburan
            </label>
            <input
              type="date"
              className="border p-1 border-gray-300 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
            Selesai Liburan
            </label>
            <input
              type="date"
              className="border p-1 border-gray-300 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="flex font-bold gap-1 items-center">
              {/* <Search className="2-4 h-4" /> */}
              Tamu
            </label>
            <select
              name=""
              id=""
              className="border border-gray-300 rounded-sm p-1"
            >
              <option value="">Pilih Opsi</option>
              <option value="2-0">2 Tamu 0 Anak</option>
              <option value="2-1">2 Tamu 1 Anak</option>
              <option value="2-2">2 Tamu 2 Anak</option>
              <option value="2-4">2 Tamu 4 Anak</option>
              <option value="2-5">2 Tamu 5 Anak</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-white">
            Transmission
          </label>
          <button className="bg-red-500 transition-all ease-in text-white hover:bg-black margin px-3 py-1 rounded-md ml-6 hover:cursor-pointer" >
            Lihat Jadwal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
