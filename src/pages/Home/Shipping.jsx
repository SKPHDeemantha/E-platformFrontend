import { useLocation, useNavigate } from "react-router-dom";
import CartCard from "../../components/cartCard";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";

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
      .then(() => {
        toast.success("Order placed successfully!");
        navigate("/orders");
      })
      .catch((err) => {
        toast.error("Failed to place order. Please try again.");
        console.error(err);
      });
  }

  if (!cart.length) {
    return null;
  }

  return (
    <div className="w-full h-full bg-gray-100 p-4">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Shipping Details</h1>
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Address</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>

        <h2 className="text-xl font-bold mt-6 mb-4">Order Summary</h2>
        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Image</th>
              <th className="border border-gray-300 p-2">Product Name</th>
              <th className="border border-gray-300 p-2">Product ID</th>
              <th className="border border-gray-300 p-2">Qty</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <CartCard key={item.ProductId} product={item} />
            ))}
          </tbody>
        </table>
        <h1 className="text-lg font-bold text-gray-700 mb-2">
          Total: LKR. {total.toFixed(2)}
        </h1>
        <h1 className="text-lg font-bold text-gray-700 mb-2">
          Discount: LKR. {(labeledTotal - total).toFixed(2)}
        </h1>
        <h1 className="text-lg font-bold text-gray-700 mb-4">
          Grand Total: LKR. {labeledTotal.toFixed(2)}
        </h1>
        <button
          className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
          onClick={createOrder}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
