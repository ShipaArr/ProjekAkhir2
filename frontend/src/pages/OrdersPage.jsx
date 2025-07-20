import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [editingOrder, setEditingOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'admin') {
      navigate('/login');
    }
    fetchOrders();
  }, [navigate]);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost/Project_Pemweb_Kelompok2/backend/get_orders.php');
      const data = await response.json();
      setOrders(data);
    } catch (err) {
      console.error("Gagal mengambil data orders:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost/Project_Pemweb_Kelompok2/backend/delete_order.php?id=${id}`, {
        method: 'DELETE'
      });
      fetchOrders();
    } catch (err) {
      console.error("Gagal menghapus order:", err);
    }
  };

  const handleSave = async () => {
    try {
      await fetch('http://localhost/Project_Pemweb_Kelompok2/backend/update_order.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingOrder),
      });
      fetchOrders();
      setEditingOrder(null);
    } catch (err) {
      console.error("Gagal mengupdate order:", err);
    }
  };

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-6">Management Orders</h2>
        
        {/* Tabel orders */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* ... (isi tabel seperti sebelumnya) ... */}
          </table>
        </div>

        {/* Modal edit */}
        {editingOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            {/* ... (isi modal edit seperti sebelumnya) ... */}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;