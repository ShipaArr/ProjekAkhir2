import React from "react";
import contacting from "../assets/contacting.webp";

// Fungsi mapping dari slug destinasi ke tour_id dari database
const tourSlugToId = {
  bali: 1,
  india: 2,
  tokyo: 3,
  venice: 4,
  paris: 5
};

// Notifikasi sukses pemesanan
const notife = (orderId) => {
  alert(`Pemesanan berhasil! ID Order: ${orderId}`);
};

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const locationSlug = formData.get("location");
    const tour_id = tourSlugToId[locationSlug];

    // 🔍 Debug log
    console.log("Slug lokasi:", locationSlug);
    console.log("Tour ID:", tour_id);

    // 🛑 Validasi destinasi
    if (!tour_id) {
      alert("Destinasi tidak valid. Silakan pilih destinasi yang tersedia.");
      return;
    }

    const bookingData = {
      customers: {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("wa"),
        address: formData.get("address")
      },
      orders: {
        tour_id: tour_id,
        total_price: calculateTotalPrice(locationSlug, formData.get("guest")),
        notes: formData.get("message")
      },
      payments: {
        payment_method: formData.get("payMethod")
      }
    };

    try {
      const response = await fetch("http://localhost/Project_Pemweb_Kelompok2/backend/booking.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      let result;

      try {
        result = await response.json();
      } catch (jsonError) {
        throw new Error("Gagal menguraikan response JSON dari server.");
      }

      if (!response.ok) {
        throw new Error(result?.error || "Booking gagal");
      }

      if (result.success) {
        notife(result.booking_id);
      } else {
        throw new Error(result?.error || "Booking gagal");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan: " + error.message);
    }
  };

  const calculateTotalPrice = (tourSlug, guestOption) => {
    const tourPrices = {
      bali: 5000000,
      india: 7000000,
      tokyo: 9000000,
      venice: 8000000,
      paris: 8500000
    };

    const [adults] = guestOption.split("-").map(Number);
    return tourPrices[tourSlug] * adults || 0;
  };

  return (
    <div className="flex flex-col max-w-7xl mt-10 mx-auto md:flex-row lg:h-screen items-center">
      {/* Image */}
      <div className="flex-1 bg-gray-100 flex justify-center items-center">
        <img
          src={contacting}
          alt="Contact Us"
          className="w-full h-full max-w-md md:max-w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Form */}
      <div className="flex-1 bg-white w-full flex flex-col justify-center px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Pesan Tiket Sekarang</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Data Diri */}
          <div className="space-y-4">
            <InputField id="name" name="name" label="Nama Lengkap*" required />
            <InputField id="email" type="email" label="Email*" required />
            <InputField id="wa" type="tel" label="Nomor WhatsApp*" required />
            <InputField id="address" label="Alamat" />
          </div>

          {/* Pemesanan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectField id="location" label="Destinasi*" required options={{
              bali: "Bali",
              india: "India",
              tokyo: "Tokyo",
              venice: "Venice",
              paris: "Paris"
            }} />

            <SelectField id="guest" label="Jumlah Tamu*" required options={{
              "2-0": "2 Dewasa",
              "2-1": "2 Dewasa + 1 Anak",
              "2-2": "2 Dewasa + 2 Anak"
            }} />
          </div>

          {/* Pembayaran */}
          <SelectField id="payMethod" label="Metode Pembayaran*" required options={{
            transfer_bni: "Transfer BNI",
            transfer_bri: "Transfer BRI",
            dana: "DANA",
            credit_card: "Kartu Kredit"
          }} />

          {/* Catatan */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Catatan Tambahan
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Pesan Sekarang
          </button>
        </form>
      </div>
    </div>
  );
};

// Komponen input reusable
const InputField = ({ id, label, type = "text", required = false }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      required={required}
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
    />
  </div>
);

// Komponen select reusable
const SelectField = ({ id, label, required = false, options }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <select
      id={id}
      name={id}
      required={required}
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
    >
      <option value="">Pilih</option>
      {Object.entries(options).map(([value, labelText]) => (
        <option key={value} value={value}>
          {labelText}
        </option>
      ))}
    </select>
  </div>
);

export default Contact;
