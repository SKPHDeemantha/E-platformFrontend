import { useEffect, useState } from "react";
import { loadCart } from "../../utils/Cartfunction";
import CartCard from "../../components/cartCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [labeledTotal, setLabeledTotal] = useState(0);
  const navigate = useNavigate();
  const [selectCart, setSelectCart] = useState(null);

  useEffect(() => {
    setCart(loadCart());

    const cartItems = loadCart();
    const productIds = cartItems.map((item) => item.productId).join(",");

    axios
      .post(`http://localhost:3000/api/orders/quote?productIds=` + productIds, {
        orderedItems: loadCart(),
      })
      .then((res) => {
        console.log(loadCart());
        console.log(res.data);
        if (res.data.total != null) {
          setTotal(res.data.total);
          setLabeledTotal(res.data.labeledTotal);
        }
      });
  }, []);

  function onOrderCheckout() {
    navigate("/shipping", {
      state: {
        items: loadCart(),
      },
    });
  }

  const handleRowClick = (item) => {
    setSelectCart(item);
  };

  // const handleQuantityChange = (productId, newQty) => {
  //   const updatedCart = cart.map(item =>
  //     item.productId === productId ? { ...item, qty: Math.max(1, newQty) } : item
  //   );
  //   setCart(updatedCart);
  //   saveCart(updatedCart);
  //   fetchQuote(updatedCart);
  // };

  // // Handle item removal
  // const handleRemoveItem = (productId) => {
  //   const updatedCart = cart.filter(item => item.productId !== productId);
  //   setCart(updatedCart);
  //   saveCart(updatedCart);
  //   fetchQuote(updatedCart);
  // };

  const closeModal = () => {
    setSelectCart(null);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <Header />
      <div className="w-full h-full flex flex-col items-center p-6 bg-gradient-to-r from-indigo-50 to-pink-100 min-h-screen overflow-y-scroll">
        {/* Animated  */}

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 drop-shadow-lg p-5"
        >
          My Cart
        </motion.h1>

        {/* Cart Table */}
        <div className="w-full max-w-6xl overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
              <tr>
                <th className="p-4 text-left font-semibold">Image</th>
                <th className="p-4 text-left font-semibold">Product Name</th>
                <th className="p-4 text-left font-semibold">Product ID</th>
                <th className="p-4 text-left font-semibold">Qty</th>
                <th className="p-4 text-left font-semibold">Price</th>
                <th className="p-4 text-left font-semibold">Total</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cart.map((item) => (
                <CartCard
                  key={item.productId}
                  productId={item.productId}
                  qty={item.qty}
                  onClick={() => handleRowClick(item)} // Pass the correct item
                />
              ))}
            </tbody>
          </table>
        </div>

        {selectCart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold mb-4">Order Details</h2>
              <p>
                <span className="font-semibold">Order ID:</span>{" "}
                {selectCart.orderId}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                {selectCart.status}
              </p>
              <button
                onClick={closeModal}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Checkout Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg mt-8 p-6 bg-white shadow-xl rounded-xl text-center"
        >
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
          <h1 className="text-4xl font-bold text-green-600 mt-3">
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
      <Footer />
    </div>
  );
}
