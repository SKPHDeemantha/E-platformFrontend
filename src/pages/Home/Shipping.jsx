import { useLocation, useNavigate } from "react-router-dom";
import CartCard from "../../components/cartCard";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function ShippingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.items || [];
  const [total, setTotal] = useState(0);
  const [labeledTotal, setLabeledTotal] = useState(0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (cart.length === 0) {
      toast.error("No items in cart.");
      navigate("/cart");
      return;
    }

    axios
      .post("http://localhost:3000/api/orders/quote", {
        orderedItems: cart,
      })
      .then((res) => {
        if (res.data.total !== null) {
          setTotal(res.data.total || 0);
          setLabeledTotal(res.data.labeledTotal || 0);
        }
      })
      .catch((err) => {
        toast.error("Failed to fetch order quote. Please try again.");
        console.error(err);
      });
  }, [cart, navigate]);

  function validateInputs() {
    if (!name.trim()) {
      toast.error("Please enter your name.");
      return false;
    }
    if (!address.trim()) {
      toast.error("Please enter your address.");
      return false;
    }
    if (!/^\d{10}$/.test(phone.trim())) {
      toast.error("Please enter a valid 10-digit phone number.");
      return false;
    }
    return true;
  }

  function createOrder() {
    if (!validateInputs()) return;

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to place an order.");
      return;
    }

    axios
      .post(
        "http://localhost:3000/api/orders/",
        {
          orderedItems: cart,
          name,
          address,
          phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        toast.success("Order placed successfully!");
        navigate("/orders");
      })
      .catch((err) => {
        toast.error("Failed to place order. Please try again.");
        console.error(err);
      });
  }

  if (!cart.length) {
    toast.error("Oops, there is an error.");
    return null;
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 to-pink-100 flex flex-col">
      <Header />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-8"
      >
        {/* Animated h1 */}
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 drop-shadow-lg text-center">
          Shipping Details
        </h1>

        {/* Form Fields */}
        <div className="mt-6">
          <label className="block font-medium text-gray-700 ">Name</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="mt-4">
          <label className="block font-medium text-gray-700">Address</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
        </div>

        <div className="mt-4">
          <label className="block font-medium text-gray-700">Phone</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>

        {/* Order Summary */}
        <h2 className="text-2xl font-bold mt-8 text-center text-purple-700">
          Order Summary
        </h2>

        <div className="overflow-x-auto mt-4 shadow-md rounded-lg">
          <table className="w-full border-collapse border border-gray-300 rounded-lg">
            <thead className="bg-gradient-to-r from-pink-600 to-purple-500 text-white">
              <tr>
                <th className="p-3 border-b text-left font-semibold">Image</th>
                <th className="p-3 border-b text-left font-semibold">Product Name</th>
                <th className="p-3 border-b text-left font-semibold">Product ID</th>
                <th className="p-3 border-b text-left font-semibold">Qty</th>
                <th className="p-3 border-b text-left font-semibold">Price</th>
                <th className="p-3 border-b text-left font-semibold">Total</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cart.map((item) => (
                <CartCard key={item.productId} productId={item.productId} qty={item.qty} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Price Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-center"
        >
          <h1 className="text-xl font-bold text-gray-700">
            Total: <span className="text-pink-600">LKR {labeledTotal.toFixed(2)}</span>
          </h1>
          <h1 className="text-lg font-bold text-gray-600 mt-2">
            Discount: <span className="text-red-500">LKR {(labeledTotal - total).toFixed(2)}</span>
          </h1>
          <h1 className="text-3xl font-bold text-green-600 mt-3">
            Grand Total: LKR {total.toFixed(2)}
          </h1>

          {/* Checkout Button */}
          <button
            className="bg-gradient-to-r from-pink-600 to-purple-500 hover:scale-105 hover:shadow-lg transition-all text-white font-bold py-3 px-6 rounded-full w-full mt-6 text-lg"
            onClick={createOrder}
          >
            Checkout
          </button>
        </motion.div>
      </motion.div>

      <Footer className="flex " />
    </div>
  );
}
