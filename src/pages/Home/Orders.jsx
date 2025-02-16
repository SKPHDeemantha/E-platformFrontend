import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function () {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    axios
      .get("http://localhost:3000/api/orders/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
        setLoading(false);
      })
      .catch((res) => {
        toast.error("Failed to fetch orders. Please try again.");
        setLoading(false);
      });
  }, []);

  const calculateTotal = (orderedItems) => {
    return orderedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleRowClick = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="w-full h-full flex flex-col items-center bg-gradient-to-bl ">
      <Header />
      <div className="w-[90%] h-[80%]   bg-violet-100 m-10">
      <div className="w-full h-screen flex flex-col items-center p-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 drop-shadow-lg p-5"
        >
          My Orders
        </motion.h1>

        {loading ? (
          <p>
            <div className="flex justify-center items-center h-80">
              <div className="animate-spin rounded-xl h-16 w-16 border-4 border-gray-300 border-t-mycolor"></div>
            </div>
          </p>
        ) : orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <table className="w-full max-w-4xl border border-gray-300 shadow-md rounded-lg overflow-hidden ">
            <thead className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
              <tr>
                <th className="p-3 border-b text-left font-semibold">
                  Order ID
                </th>
                <th className="p-3 border-b text-left font-semibold">Status</th>
                <th className="p-3 border-b text-left font-semibold">Date</th>
                <th className="p-3 border-b text-left font-semibold">Total</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order, index) => (
                <tr
                  key={order.orderId}
                  className={`cursor-pointer transition-all duration-300 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-pink-100 hover:shadow-lg`}
                  onClick={() => handleRowClick(order)}
                >
                  <td className="p-3 font-medium text-gray-800">
                    {order.orderId}
                  </td>
                  <td
                    className={`p-3 font-semibold ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {order.status}
                  </td>
                  <td className="p-3 text-gray-700">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="p-3 font-semibold text-indigo-600">
                    LKR {calculateTotal(order.orderedItems).toFixed(2)}
                  </td>
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
                <span className="font-semibold">Order ID:</span>{" "}
                {selectedOrder.orderId}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                {selectedOrder.status}
              </p>
              <p>
                <span className="font-semibold">Date:</span>{" "}
                {new Date(selectedOrder.date).toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Name:</span>{" "}
                {selectedOrder.name}
              </p>
              <p>
                <span className="font-semibold">Address:</span>{" "}
                {selectedOrder.address}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {selectedOrder.phone}
              </p>
              <p>
                <span className="font-semibold">Notes:</span>{" "}
                {selectedOrder.notes || "None"}
              </p>
              <h3 className="text-md font-bold mt-4">Ordered Items:</h3>
              <div className="border-t border-gray-200 mt-2 pt-2">
                {selectedOrder.orderedItems.map((item, index) => (
                  <div key={index} className="mb-2">
                    <p>
                      <span className="font-semibold">Name:</span> {item.name}
                    </p>
                    <p>
                      <span className="font-semibold">Price:</span> LKR{" "}
                      {item.price.toFixed(2)}
                    </p>
                    <p>
                      <span className="font-semibold">Quantity:</span>{" "}
                      {item.quantity}
                    </p>
                    <p>
                      <span className="font-semibold">Subtotal:</span> LKR{" "}
                      {(item.price * item.quantity).toFixed(2)}
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
      </div>
      <Footer />
    </div>
  );
}
