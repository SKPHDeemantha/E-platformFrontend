import { useEffect, useState } from "react";
import { loadCart } from "../../utils/Cartfunction";
import CartCard from "../../components/cartCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { RiDeleteBin5Fill } from "react-icons/ri";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [labeledTotal, setLabeledTotal] = useState(0);
  const navigate = useNavigate();

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

  return (
    <div className="w-full h-full flex flex-col items-center p-6 bg-gradient-to-r from-indigo-50 to-pink-100 min-h-screen">
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
              <th className="p-4 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cart.map((item) => (
              <CartCard
                key={item.productId}
                productId={item.productId}
                qty={item.qty}
             
              />
             
            ))}
            {/* <button
                      className="text-red-500 px-3 py-1 rounded hover:text-red-700 mr-2"
                      title="Delete"
                      onClick={() => {
                        const token = localStorage.getItem("token");
                        axios
                          .delete(`http://localhost:3000/api/products/${product.ProductId}`, {
                            headers: { Authorization: `Bearer ${token}` },
                          })
                          .then((res) => {
                            toast.success("Product deleted successfully");
                            setLoadingstatus("loading"); // Reload products after deletion
                          })
                          .catch(() => {
                            toast.error("Failed to delete product");
                          });
                      }}
                    >
                      <RiDeleteBin5Fill size={16} />
                    </button> */}
          </tbody>
        </table>
      </div>

      {/* Checkout Summary Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg mt-8 p-6 bg-white shadow-xl rounded-xl text-center"
      >
        <h1 className="text-2xl font-bold text-gray-700">
          Total: <span className="text-pink-600">LKR {labeledTotal?.toFixed(2) || "0.00"}</span>
        </h1>
        <h1 className="text-xl font-bold text-gray-500 mt-2">
          Discount: <span className="text-red-500">LKR {((labeledTotal - total)).toFixed(2) || "0.00"}</span>
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
  );
}
