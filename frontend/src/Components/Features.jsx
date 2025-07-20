import React from "react";
import { Plane, Hotel, Map, Camera, Headphones, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Plane className="h-8 w-8 mb-2 text-primary" />,
      title: "Tawaran Penerbangan Eksklusif",
      description:
        "Akses ke maskapai penerbangan premium dan tiket pesawat diskon untuk perjalanan Anda.",
    },
    {
      icon: <Hotel className="h-8 w-8 mb-2 text-primary" />,
      title: "Akomodasi Mewah",
      description:
        "Hotel dan resor pilihan untuk pengalaman menginap yang nyaman dan berkesan.",
    },
    {
      icon: <Map className="h-8 w-8 mb-2 text-primary" />,
      title: "Rencana Perjalanan yang Disesuaikan",
      description:
        "Rencana perjalanan yang dibuat khusus sesuai dengan preferensi dan minat Anda.",
    },
    {
      icon: <Camera className="h-8 w-8 mb-2 text-primary" />,
      title: "Tur Berpemandu",
      description:
        "Pemandu lokal yang ahli untuk meningkatkan pengalaman dan pengetahuan perjalanan Anda.",
    },
    {
      icon: <Headphones className="h-8 w-8 mb-2 text-primary" />,
      title: "Dukungan Pelanggan 24/7",
      description:
        "Bantuan 24 jam untuk pertanyaan atau keadaan darurat selama perjalanan Anda.",
    },
    {
      icon: <Shield className="h-8 w-8 mb-2 text-primary" />,
      title: "Asuransi Perjalanan",
      description:
        "Pilihan cakupan komprehensif untuk liburan bebas kekhawatiran.",
    },
  ];
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Mengapa Memilih Layanan Travel Kami
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
          Temukan fitur-fitur unik yang membuat perjalanan Anda bersama kami menjadi luar biasa
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="transition-all bg-red-50 border rounded-lg hover:shadow-lg"
            >
              <div className="p-6 text-center">
                {feature.icon}
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
