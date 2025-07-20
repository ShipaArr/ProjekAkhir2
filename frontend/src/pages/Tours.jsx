import React from "react";
import Bali from "../assets/Bali.webp";
import Paris from "../assets/Paris.jpg";
import Tokyo from "../assets/Tokyo.jpg";
import India from "../assets/India.jpg";
import Venice from "../assets/Venice.jpg";
import TopBanner from "../Components/TopBanner";
import { Clock, Star } from "lucide-react";

const Tours = () => {
  const destinationJson = [
    {
      name: "Bali",
      img: Bali,
      time: "5 Hari - 4 Malam",
      star: "5 (12 ulasan)",
      price: "5.000.000",
      loading: "lazy",
    },
    {
      name: "Venice",
      img: Venice,
      time: "5 Hari - 4 Malam",
      star: "3 (12 ulasan)",
      price: "4.000.000",
      loading: "lazy",
    },
    {
      name: "Tokyo",
      img: Tokyo,
      time: "5 Hari - 4 Malam",
      star: "3 (12 ulasan)",
      price: "2.000.000",
      loading: "lazy",
    },
    {
      name: "India",
      img: India,
      time: "5 Hari - 4 Malam",
      star: "3 (12 ulasan)",
      price: "8.000.000",
      loading: "lazy",
    },
    {
      name: "Paris",
      img: Paris,
      time: "5 Hari - 4 Malam",
      star: "3 (12 ulasan)",
      price: "17.000.000",
      loading: "lazy",
    },
    {
      name: "Tokyo",
      img: Tokyo,
      time: "5 Hari - 4 Malam",
      star: "3 (12 ulasan)",
      price: "6.900.000",
      loading: "lazy",
    },
  ];
  return (
    <>
      <TopBanner text="Perjalanan" />
      <div className="max-w-7xl md:mx-auto my-10">
        <h1 className="text-3xl lg:text-4xl font-serif mb-3 font-semibold text-center">
          Destinasi Terbaik
        </h1>
        <hr className="text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10" />
        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
          {destinationJson.map((destination) => (
            <div>
              <div
                key={destination.name}
                className="overflow-hidden border shadow-lg shadow-gray-500 rounded-lg mb-5 md:mr-5"
              >
                <div className="">
                  <img
                    src={destination.img}
                    alt={destination.name}
                    width={600}
                    height={400}
                    className="object-cover w-full h-48 hover:scale-110 transition-all"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <p className="text-gray-500 flex items-center gap-1 text-sm mb-1">
                      <Clock width={15} />
                      {destination.time}
                    </p>
                    <h3 className="text-xl font-bold mb-2">
                      {destination.name}
                    </h3>
                    <p className="flex gap-1 items-center">
                      <Star width={20} fill="red" />
                      {destination.star}
                    </p>
                    <p className="text-gray-600 mb-4 mt-2">
                    Rasakan keindahan, budaya dan destinasi {destination.name}
                    </p>
                    <div className="flex gap-4">
                      <button className="px-3 py-2 bg-red-500 rounded-md text-white">
                        Rp. {destination.price}
                      </button>
                      <button className="px-3 py-2 bg-black rounded-md text-white">
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tours;
