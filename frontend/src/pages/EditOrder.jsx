import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EditOrder = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost/PROJECT_PEMWEB_KELOMPOK2/backend/get_order_by_id.php?id=${id}`)
      .then(res => res.json())
      .then(data => setOrder(data));
  }, [id]);

  const handleUpdate = () => {
    console.log("Data yang akan dikirim:", order);
    fetch('http://localhost/PROJECT_PEMWEB_KELOMPOK2/backend/update_order.php', {
      method: 'PUT',
      body: JSON.stringify(order),
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {
      alert('Data berhasil diperbarui');
      navigate('/');
    });
  };

  return (
    <div className='p-4 overflow-x-auto w-full'>
      <h2 className='mt-10 px-3 py-10 text-3xl font-bold tracking-tighter sm:text-5xl text-center font-serif'>Edit Order</h2>
              <hr className="text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10" />
      <table className='w-full border text-sm text-center '>
                  <thead>
            <tr>
              <th className="border p-2">Nomor</th>
              <th className="border p-2">Nama</th>
              <th className="border p-2">Lokasi</th>
              <th className="border p-2">Mulai Liburan</th>
              <th className="border p-2">Selesai Liburan</th>
              <th className="border p-2">Tamu</th>
              <th className="border p-2">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td className="border p-2">{order.id}</td>
                <td className="border p-2"><input
  type="text"
  className="w-full focus:outline-none focus:ring-0 focus:border-transparent"
  value={order.name || ""}
  onChange={(e) => setOrder({ ...order, name: e.target.value })}
/></td>
                <td className="border p-2"><select
                  name="location"
                  id="location"
                  className="border border-gray-300 rounded-sm p-1 "
                  value={order.location || ""}
                  onChange={(e) => setOrder({ ...order, location: e.target.value })}
                  required
                >
                  <option value="">Pilih Opsi</option>
                  <option value="bali">Bali</option>
                  <option value="india">India</option>
                  <option value="tokyo">Tokyo</option>
                  <option value="venice">Venice</option>
                  <option value="paris">Paris</option>
                </select></td>

                {/* Date */}
                <td className="border p-2"><input
  type="date"
  value={order.checkIn || ""}
  onChange={(e) => setOrder({ ...order, checkIn: e.target.value })}
/></td>
                <td className="border p-2"><input
  type="date"
  value={order.checkOut || ""}
  onChange={(e) => setOrder({ ...order, checkOut: e.target.value })}
/></td>
                <td className="border p-2"> <select
    name="guest"
    className="border border-gray-300 rounded-sm p-1 "
    value={order.guest || ""}
    onChange={(e) => setOrder({ ...order, guest: e.target.value })}
    required
  >
    <option value="">Pilih Opsi</option>
    <option value="2-0">2 Tamu 0 Anak</option>
    <option value="2-1">2 Tamu 1 Anak</option>
    <option value="2-2">2 Tamu 2 Anak</option>
    <option value="2-4">2 Tamu 4 Anak</option>
    <option value="2-5">2 Tamu 5 Anak</option>
  </select></td>
                <td className="border p-2  "><button onClick={handleUpdate} className='bg-red-500 p-1 text-white px-3  rounded-md font-semibold hover:bg-red-600 hover:cursor-pointer'>Update</button></td>



            </tr>
          </tbody>
      </table>

    </div>
  );
};

export default EditOrder;
