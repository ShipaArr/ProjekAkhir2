import React from "react";
import Bali from "../assets/Bali.webp";
import Paris from "../assets/Paris.jpg";
import Tokyo from "../assets/Tokyo.jpg";
import India from "../assets/India.jpg";
import Venice from "../assets/Venice.jpg";
import next from "../assets/next.jpg";
import back from "../assets/back.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Clock, Star } from "lucide-react";
import "../Components/Css/reactSlick.css";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={next} alt="prevArrow" loading="lazy" {...props} />
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src={back} alt="prevArrow" loading="lazy" {...props} />
);

const FeatureDestination = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SlickArrowLeft />,
    prevArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
      <section className="w-full py-12 md:py-24 lg:pt-32 px-6 md:px-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif">
            Destinasi Unggulan
          </h2>
          <hr className="text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10" />
          <div className="slider-container">
            <Slider {...settings}>
              {destinationJson.map((destination) => (
                <div>
                  <div
                    key={destination.name}
                    className="overflow-hidden border shadow-lg shadow-gray-500 rounded-lg mb-5 mr-5"
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
                        <h3 className="flex gap-1 items-center">
                          <Star width={20} fill="red" />
                          {destination.star}
                        </h3>
                        <p className="text-gray-600 mb-4 mt-2">
                         Rasakan keindahan, budaya dan destinasi{" "}
                          {destination.name}
                        </p>
                        <div className="flex gap-4">
                          <button className="px-3 py-2 bg-red-500 rounded-md text-white hover:bg-black hover:cursor-pointer transition-all duration-300">
                            Rp. {destination.price}
                          </button>
                          <button className="px-3 py-2 bg-black rounded-md text-white hover:bg-red-500 hover:cursor-pointer transition-all duration-300">
                          Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureDestination;
