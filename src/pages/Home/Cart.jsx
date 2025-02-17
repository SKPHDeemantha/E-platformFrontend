import { useEffect, useState } from "react";
import { deleteItem, loadCart } from "../../utils/Cartfunction";
import CartCard from "../../components/cartCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [labeledTotal, setLabeledTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cartItems = loadCart();
    setCart(cartItems);

    if (cartItems.length > 0) {
      const productIds = cartItems.map((item) => item.productId).join(",");

      axios
        .post(
          import.meta.env.VITE_BACKEND_URL +
            `/api/orders/quote?productIds=` +
            productIds,
          { orderedItems: cartItems }
        )
        .then((res) => {
          if (res.data.total != null) {
            setTotal(res.data.total);
            setLabeledTotal(res.data.labeledTotal);
          }
        })
        .catch((error) => console.error("Error fetching quote:", error));
    }
  }, []);

  const handleDelete = (productId) => {
    deleteItem(productId); // Remove from local storage
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart); // Update state
  };

  function onOrderCheckout() {
    navigate("/shipping", { state: { items: cart } });
  }

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Header />
      </div>

      {/* Cart Section */}
      <div className="flex-grow flex flex-col items-center p-6 bg-gradient-to-r from-indigo-50 to-pink-100 mt-20 overflow-y-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 drop-shadow-lg p-6"
        >
          My Cart
        </motion.h1>

        {/* Cart Table */}
        <div className="w-full max-w-6xl overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
              <tr>
                <th className="p-4 text-center font-semibold">Image</th>
                <th className="p-4 text-center font-semibold">Product Name</th>
                <th className="p-4 text-center font-semibold">Product ID</th>
                <th className="p-4 text-center font-semibold">Qty</th>
                <th className="p-4 text-center font-semibold">Price</th>
                <th className="p-4 text-center font-semibold">Total</th>
                <th className="p-4 text-center font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cart.map((item) => (
                <CartCard
                  key={item.productId}
                  productId={item.productId}
                  qty={item.qty}
                  handleDelete={() => handleDelete(item.productId)} // Pass delete function
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Checkout Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg mt-8 p-6 bg-white shadow-xl rounded-lg text-left"
        >
          <h1 className="p-2 font-bold text-xl">Order Summary</h1>
          <h1 className="text-2xl font-bold text-gray-700">
            Total:{" "}
            <span className="text-pink-600">
              LKR {labeledTotal?.toFixed(2) || "0.00"}
            </span>
          </h1>
          <h1 className="text-xl font-bold text-gray-500 mt-2">
            Discount:{" "}
            <span className="text-red-500">
              LKR {(labeledTotal - total).toFixed(2) || "0.00"}
            </span>
          </h1>
          <h1 className="text-3xl font-bold text-green-600 mt-3">
            Grand Total: LKR {total?.toFixed(2) || "0.00"}
          </h1>

          {/* Checkout Button */}
          <button
            onClick={onOrderCheckout}
            className="bg-gradient-to-r from-pink-600 to-purple-500 hover:scale-105 hover:shadow-lg transition-all text-white font-bold py-3 px-6 rounded-full w-full mt-6 text-lg"
          >
            Checkout
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
