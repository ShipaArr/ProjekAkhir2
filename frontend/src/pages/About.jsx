import React from "react";
import TopBanner from "../Components/TopBanner";
import trip from "../assets/trip.gif";
import time from "../assets/fire-time.gif";
import price from "../assets/best-price.gif";

const About = () => {
  return (
    <div>
      <TopBanner text="Tentang Kami" />
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex flex-col md:flex-row px-4 md:px-0 gap-4">
          <div className="flex-1">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Travel "
                className="rounded-lg"
                loading="lazy"
              />
              <div className="absolute bottom-[45%] right-0 p-4 bg-red-500 text-white  font-bold md:text-4xl rounded-lg">
                Kami Yang Terbaik <br /> Untuk Perjalanan !
              </div>
            </div>
            <h1 className="md:text-4xl font-bold mt-6 mb-4 text-3xl">
            Bagaimana Kami Bersarang Untuk Perjalanan!
            </h1>
            <p className="text-gray-500">
              Kami percaya bahwa setiap perjalanan dimulai dari tempat di mana mimpi dan rencana bertemu. Di sinilah kami bersarang—membangun fondasi yang kuat untuk setiap pengalaman tak terlupakan yang akan Anda jalani. Tim kami merancang setiap detail dengan teliti, mulai dari pemilihan destinasi, akomodasi nyaman, hingga aktivitas menarik yang sesuai dengan minat Anda.

Dengan semangat layanan yang tulus, kami bukan hanya penyedia tiket atau itinerary. Kami adalah teman perjalanan Anda—siap mendengarkan, menyesuaikan, dan memberikan solusi terbaik demi kenyamanan dan keamanan Anda.

Melalui teknologi, kemitraan terpercaya, dan pengalaman di industri wisata, kami memastikan setiap langkah Anda penuh makna. Bersama kami, perjalanan bukan hanya soal tempat yang dituju, tapi bagaimana Anda merasa selama menjalaninya. Mari bersarang bersama kami, dan terbang menuju petualangan impian Anda!
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start mb-4">
                <img src={trip} alt="" className="w-20" loading="lazy" />
                <div>
                  <h2 className="ml-2 text-2xl font-semibold mb-1">
                    50+ Destinasi
                  </h2>
                  <p className="text-gray-700 ml-2 lg:mr-28">
                  Kami menawarkan pengalaman perjalanan terbaik dengan layanan yang dipersonalisasi dan harga yang tidak ada duanya.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 my-4 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start mb-4">
                <img src={time} alt="" className="w-20" loading="lazy" />
                <div>
                  <h2 className="ml-2 text-2xl font-semibold mb-1">
                    Pemesanan Super Cepat
                  </h2>
                  <p className="text-gray-700 ml-2 lg:mr-28">
                    Pesanan anda langsung kami konfirmasi 
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start mb-4">
                <img src={price} alt="" className="w-20" loading="lazy" />
                <div>
                  <h2 className="ml-2 text-2xl font-semibold mb-1">
                    Harga Terbaik
                  </h2>
                  <p className="text-gray-700 ml-2 lg:mr-28">
                    Harga Murah dengan kualitas destinasi yang luar biasa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
