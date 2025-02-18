import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [updateData, setUpdateData] = useState({ status: "", notes: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Failed to fetch orders. Please try again.");
        console.log(err);
        setLoading(false);
      });
  }, []);

  const calculateTotal = (orderedItems) => {
    return orderedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setDetailModalVisible(true);
  };

  const handleUpdateOrder = (order) => {
    setSelectedOrder(order);
    setUpdateData({ status: order.status, notes: order.notes || "" });
    setUpdateModalVisible(true);
  };

  const closeModals = () => {
    setSelectedOrder(null);
    setUpdateModalVisible(false);
    setDetailModalVisible(false);
  };

  const handleUpdate = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Unauthorized. Please login.");
      return;
    }

    axios
      .put(
        import.meta.env.VITE_BACKEND_URL +
          `/api/orders/${selectedOrder.orderId}`,
        { status: updateData.status, notes: updateData.notes },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        toast.success("Order updated successfully.");
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.orderId === selectedOrder.orderId
              ? { ...order, status: updateData.status, notes: updateData.notes }
              : order
          )
        );
        closeModals();
      })
      .catch((err) => {
        toast.error("Failed to update order. Please try again.");
      });
  };

  return (
    <div className="w-full h-full flex flex-col items-center p-4 bg-slate-200 overflow-y-scroll shadow-2xl">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-adminprimary to-adminsecondary drop-shadow-lg p-5"
      >
        Total Orders
      </motion.h1>
      {loading ? (
        <p>
          <div className="flex justify-center items-center h-80">
            <div className="animate-spin rounded-xl h-16 w-16 border-4 border-gray-500 border-t-mycolor"></div>
          </div>
        </p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="w-full max-w-4xl border border-gray-500 shadow-sm rounded-lg">
          <thead className="bg-gradient-to-br from-blue-300 to-purple-200">
            <tr>
              <th className="p-2  text-left bg-gradient-to-r from-blue-300 to-purple-200">
                Order ID
              </th>
              <th className="p-2 border border-gray-500 text-left bg-gradient-to-r from-blue-300 to-purple-200">
                Status
              </th>
              <th className="p-2 border border-gray-500 text-left bg-gradient-to-r from-blue-300 to-purple-200">
                Date
              </th>
              <th className="p-2 border border-gray-500 text-left bg-gradient-to-r from-blue-300 to-purple-200">
                Total
              </th>
              <th className="p-2 border border-gray-500 text-left bg-gradient-to-r from-blue-300 to-purple-200">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId} className="hover:bg-gray-50">
                <td className="p-2 border border-gray-500">{order.orderId}</td>
                <td className="p-2 border border-gray-500">{order.status}</td>
                <td className="p-2 border border-gray-500">
                  {new Date(order.date).toLocaleDateString()}
                </td>
                <td className="p-2 border border-gray-500">
                  LKR {calculateTotal(order.orderedItems).toFixed(2)}
                </td>
                <td className="p-2 border border-gray-500">
                  <button
                    className="bg-gradient-to-br from-adminprimary to-adminsecondary hover:bg-gradient-to-tr text-white px-3 py-1 rounded-lg mr-2 hover:bg-blue-600"
                    onClick={() => handleViewDetails(order)}
                  >
                    View
                  </button>
                  <button
                    className="bg-gradient-to-br from-green-500 to-yellow-300 hover:bg-gradient-to-tr text-white px-3 py-1 rounded-lg hover:bg-green-600"
                    onClick={() => handleUpdateOrder(order)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {detailModalVisible && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-4 rounded-lg shadow-lg">
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
              <span className="font-semibold">Name:</span> {selectedOrder.name}
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
                className="bg-gradient-to-br from-red-500  to-pink-400 hover:bg-gradient-to-tr text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={closeModals}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {updateModalVisible && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Update Order</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium">Status</label>
              <select
                value={updateData.status}
                onChange={(e) =>
                  setUpdateData({ ...updateData, status: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="preparing">Preparing</option>
                <option value="cancelled">Cancelled</option>
                <option value="delivered">Delivered</option>
                <option value="completed">Completed</option>
                <option value="paused">Paused</option>
                <option value="pended">Pended</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Notes</label>
              <textarea
                value={updateData.notes}
                onChange={(e) =>
                  setUpdateData({ ...updateData, notes: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows="4"
              ></textarea>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gradient-to-br from-red-500  to-pink-400 hover:bg-gradient-to-tr text- px-4 py-2 rounded-lg"
                onClick={closeModals}
              >
                Cancel
              </button>
              <button
                className="bg-gradient-to-br from-adminprimary to-adminsecondary text-white px-4 py-2 rounded-lg hover:bg-gradient-to-tr"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
