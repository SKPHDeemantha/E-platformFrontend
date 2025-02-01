import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";

export default function(){
  const [orders,setOrders]=useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token){
      return;
    }
    axios.get("http://localhost:3000/api/orders/",{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res)=>{
      console.log(res.data);
      setOrders(res.data);
      setLoading(false);
    }).catch((res)=>{
      toast.error("Failed to fetch orders. Please try again.");
      setLoading(false);
    });
  }, [])

  const calculateTotal = (orderedItems) => {
    return orderedItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRowClick = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  return(
    <div className="w-full h-full flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">My Orders</h1>
      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="w-full max-w-4xl border border-gray-200 shadow-sm rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border-b text-left">Order ID</th>
              <th className="p-2 border-b text-left">Status</th>
              <th className="p-2 border-b text-left">Date</th>
              <th className="p-2 border-b text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.orderId}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => handleRowClick(order)}
              >
                <td className="p-2 border-b">{order.orderId}</td>
                <td className="p-2 border-b">{order.status}</td>
                <td className="p-2 border-b">{new Date(order.date).toLocaleDateString()}</td>
                <td className="p-2 border-b">LKR {calculateTotal(order.orderedItems).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}


      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-4 rounded-lg shadow-lg overflow-y-scroll max-h-screen">
            <h2 className="text-lg font-bold mb-4">Order Details</h2>
            <p>
              <span className="font-semibold">Order ID:</span> {selectedOrder.orderId}
            </p>
            <p>
              <span className="font-semibold">Status:</span> {selectedOrder.status}
            </p>
            <p>
              <span className="font-semibold">Date:</span>{" "}
              {new Date(selectedOrder.date).toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Name:</span> {selectedOrder.name}
            </p>
            <p>
              <span className="font-semibold">Address:</span> {selectedOrder.address}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {selectedOrder.phone}
            </p>
            <p>
              <span className="font-semibold">Notes:</span> {selectedOrder.notes || "None"}
            </p>
            <h3 className="text-md font-bold mt-4">Ordered Items:</h3>
            <div className="border-t border-gray-200 mt-2 pt-2">
              {selectedOrder.orderedItems.map((item, index) => (
                <div key={index} className="mb-2">
                  <p>
                    <span className="font-semibold">Name:</span> {item.name}
                  </p>
                  <p>
                    <span className="font-semibold">Price:</span> LKR {item.price.toFixed(2)}
                  </p>
                  <p>
                    <span className="font-semibold">Quantity:</span> {item.quantity}
                  </p>
                  <p>
                    <span className="font-semibold">Subtotal:</span>{" "}
                    LKR {(item.price * item.quantity).toFixed(2)}
                  </p>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 mt-1 rounded-md"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="bg-pink-800 text-white px-4 py-2 rounded-lg hover:bg-red-600 "
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}