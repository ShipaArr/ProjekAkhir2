import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';




export default function AdminDashboard() {
  const [stats, setStats] = useState({
    order: 15,
    admin: 70,
    forms: 20,
    services: 20
  });

  const [visitorStats, setVisitorStats] = useState([]);
  const [customers,  setCustomers] = useState([]);
  const [editingcustomers, setEditingcustomers] = useState(null);
  const [showCustomers, setshowCustomers] = useState("dashboard");
  const navigate = useNavigate();
  const [admins, setAdmins] = useState([]);
  const [orders, setorder] = useState([]);
  const [payments, setpayments] = useState([]);


  // Proteksi route dan ambil data
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'admin') {
      navigate('/login');
    }

    fetch('http://localhost/Project_Pemweb_Kelompok2/backend/get_location_visitors.php')
      .then(res => res.json())
      .then(data => setVisitorStats(data))
      .catch(err => console.error("Gagal mengambil data visitor:", err));

    fetchcustomers();
    fetchAdmins();
    fetchorder();
    fetchpayments();
  }, [navigate]);

  const fetchcustomers = async () => {
    try {
      const response = await fetch('http://localhost/Project_Pemweb_Kelompok2/backend/get_orders.php');
      const data = await response.json();
      setCustomers(data);
    } catch (err) {
      console.error("Gagal mengambil data customers:", err);
    }
  };


  const fetchAdmins = async () => {
  try {
    const response = await fetch('http://localhost/Project_Pemweb_Kelompok2/backend/get_admin.php');
    const data = await response.json();
    setAdmins(data);
    setStats(prev => ({ ...prev, admin: data.length })); // Update jumlah admin di statistik
  } catch (err) {
    console.error("Gagal mengambil data admin:", err);
  }
};



// SIPA
const fetchorder = async () => {
  try {
    const response = await fetch('http://localhost/Project_Pemweb_Kelompok2/backend/get_order.php');
    const data = await response.json();
    setorder(data);
    setStats(prev => ({ ...prev, admin: data.length })); // Update jumlah admin di statistik
  } catch (err) {
    console.error("Gagal mengambil data admin:", err);
  }
};


// SIGIT
const fetchpayments = async () => {
  try {
    const response = await fetch('http://localhost/Project_Pemweb_Kelompok2/backend/get_payments.php');
    const data = await response.json();
    setpayments(data);
    setStats(prev => ({ ...prev, admin: data.length })); // Update jumlah admin di statistik
  } catch (err) {
    console.error("Gagal mengambil data admin:", err);
  }
};



const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
  if (!confirmDelete) {
    return; // Batal hapus
  }

  try {
    await fetch(`http://localhost/Project_Pemweb_Kelompok2/backend/delete_customers.php?customers_id=${id}`, {
      method: 'GET'
    });
    fetchcustomers(); // Refresh data
  } catch (err) {
    console.error("Gagal menghapus order:", err);
  }
};

  const handleSave = async () => {
  try {
    console.log("Data dikirim:", editingcustomers);
    console.log("Data yang akan dikirim:", editingcustomers);
    await fetch('http://localhost/Project_Pemweb_Kelompok2/backend/update_order.php', 
        // C:\laragon\www\projek_pemweb\Project_Pemweb_Kelompok2\backend\update_order.php
        {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customers_id: editingcustomers.customers_id,
        name: editingcustomers.name,
        email: editingcustomers.email,
        phone: editingcustomers.phone
      })
    });

    fetchcustomers();         // fungsi ambil ulang data
    setEditingcustomers(null); // reset form/modal edit
  } catch (err) {
    console.error("Gagal mengupdate order:", err);
  }
};


  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Master Admin</h1>
          <nav className="flex space-x-4">
            <button 
              onClick={() => setshowCustomers("dashboard")}
              className="px-4 py-2 text-gray-700 hover:text-indigo-600"
            >
              Dashboard
            </button>
            <button 
              onClick={() => setshowCustomers(true)}
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium"
            >
              Management Orders
            </button>
            <button 
  onClick={() => setshowCustomers("admin")}
  className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium"
>
  Management Admin
</button>
<button 
  onClick={() => setshowCustomers("order")}
  className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium"
>
  orders
</button>
<button 
  onClick={() => setshowCustomers("payments")}
  className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium"
>
  payments
</button>


          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {showCustomers ? (
            <div className="px-4 py-6 sm:px-0">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-semibold mb-6">Management Orders</h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Id Customers</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">WhatsApp</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    {customers.length > 0 ? (
        customers.map((customers) => (
            <tr key={customers.id}>
            <td className="px-6 py-4 whitespace-nowrap">{customers.customers_id}</td>
          <td className="px-6 py-4 whitespace-nowrap">{customers.name}</td>
          <td className="px-6 py-4 whitespace-nowrap">{customers.email}</td>
          <td className="px-6 py-4 whitespace-nowrap">{customers.phone}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <button
              onClick={() => setEditingcustomers(customers)}
              className="text-indigo-600 hover:text-indigo-900 mr-3"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(customers.customers_id)}
              className="text-red-600 hover:text-red-900"
            >
              Delete
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr key="no-data">
        <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
          Tidak ada data pelanggan.
        </td>
      </tr>
    )}
  </tbody>
</table>


{/* HIDA */}
{showCustomers === "admin" && (
  <div className="px-4 py-6 sm:px-0">
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-6">Daftar Admin</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tanggal Daftar</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {admins.length > 0 ? admins.map(admin => (
            <tr key={admin.id}>
              <td className="px-6 py-4 whitespace-nowrap">{admin.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{admin.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{admin.full_name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{admin.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">{admin.created_at}</td>
            </tr>
          )) : (
            <tr>
              <td colSpan="5" className="text-center text-gray-500 py-4">Tidak ada data admin.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
)}



{/* SIPA */}
{showCustomers === "order" && (
  <div className="px-4 py-6 sm:px-0">
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-6">Daftar order</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">order_id</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">user_id</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">tour_id</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">order_date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">total_price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">booking_status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">notes</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.length > 0 ? orders.map(order => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap">{order.order_id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.user_id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.tour_id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.order_date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.total_price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.booking_status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.notes}</td>
            </tr>
          )) : (
            <tr>
              <td colSpan="5" className="text-center text-gray-500 py-4">Tidak ada data admin.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
)}



{/* Sigit */}
{showCustomers === "payments" && (
  <div className="px-4 py-6 sm:px-0">
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-6">Daftar payment</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">order_id</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">user_id</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">tour_id</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">order_date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">total_price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">booking_status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">notes</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {payments.length > 0 ? payments.map(payment => (
            <tr key={payment.id}>
              <td className="px-6 py-4 whitespace-nowrap">{payment.payment_id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{payment.order_id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{payment.payment_method}</td>
              <td className="px-6 py-4 whitespace-nowrap">{payment.payment_date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{payment.amount_paid}</td>
              <td className="px-6 py-4 whitespace-nowrap">{payment.payment_proof}</td>
              <td className="px-6 py-4 whitespace-nowrap">{payment.status}</td>
            </tr>
          )) : (
            <tr>
              <td colSpan="5" className="text-center text-gray-500 py-4">Tidak ada data payments.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
)}




                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Konten dashboard yang sudah ada */}
              <div className="px-4 py-6 sm:px-0">
                <div className="bg-white rounded-lg shadow p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

                  {/* Navigation Menu */}
                  <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">Jumlah Peminat Destinasi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {visitorStats.map((item) => (
                        <div 
                          key={item.location} 
                          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="p-6">
                            <div className="flex items-center mb-4">
                              <div className="p-3 rounded-full bg-indigo-100 mr-4">
                                <svg 
                                  className="w-6 h-6 text-indigo-600" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                                  />
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-gray-800 capitalize">{item.location}</h3>
                                <p className="text-sm text-gray-500">Total Pengunjung</p>
                              </div>
                            </div>
                            <p className="text-3xl font-bold text-indigo-600">{item.total_visitors} <span className="text-lg">orang</span></p>
                            <div className="mt-4 pt-4 border-t border-gray-100">
                              <p className="text-sm text-gray-500 flex items-center">
                                <svg 
                                  className="w-4 h-4 mr-1 text-green-500" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
                                  />
                                </svg>
                                +12% dari bulan lalu
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats Overview */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-500">Total Order</h3>
                      <p className="mt-2 text-3xl font-semibold text-indigo-600">{stats.order}</p>
                      <a href="#" className="mt-2 text-sm text-indigo-500 hover:underline">More info</a>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-500">Total User</h3>
                      <p className="mt-2 text-3xl font-semibold text-indigo-600">{stats.admin}</p>
                      <a href="#" className="mt-2 text-sm text-indigo-500 hover:underline">More info</a>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-500">Total Form</h3>
                      <p className="mt-2 text-3xl font-semibold text-indigo-600">{stats.forms}</p>
                      <a href="#" className="mt-2 text-sm text-indigo-500 hover:underline">More info</a>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-500">Total Services</h3>
                      <p className="mt-2 text-3xl font-semibold text-indigo-600">{stats.services}</p>
                      <a href="#" className="mt-2 text-sm text-indigo-500 hover:underline">More info</a>
                    </div>
                  </div>
                </div>

                {/* Additional Description */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-2xl font-semibold mb-4">Description</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="text-lg font-medium">Total Basic Page</h3>
                      <a href="#" className="text-sm text-indigo-500 hover:underline">More info</a>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="text-lg font-medium">Total Portfolio</h3>
                      <a href="#" className="text-sm text-indigo-500 hover:underline">More info</a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Edit Modal */}
      {editingcustomers && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-medium mb-4">Edit Order</h3>
            

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Id customers</label>
                <input
                  type="number"
                  value={editingcustomers.customers_id || editingcustomers.customers_id || ''}
                  onChange={(e) => setEditingcustomers({...editingcustomers, customers_id: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                <input
                  type="text"
                  value={editingcustomers.name || editingcustomers.nama || ''}
                  onChange={(e) => setEditingcustomers({...editingcustomers, name: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={editingcustomers.email || ''}
                  onChange={(e) => setEditingcustomers({...editingcustomers, email: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Nomor WhatsApp</label>
                <input
                  type="tel"
                  value={editingcustomers.phone || editingcustomers.whatsapp || ''}
                  onChange={(e) => setEditingcustomers({...editingcustomers, phone: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setEditingcustomers(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}