import { useEffect, useState } from "react";
import { loadCart } from "../../utils/Cartfunction";
import CartCard from "../../components/cartCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";


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
        if (res.data.total != null) {
          setTotal(res.data.total);
          setLabeledTotal(res.data.total);
          console.log(res.data.total)
        }
      });
  }, []);

  function onOrderCheckout() {
    navigate("/shipping", {
      state: {
        items: loadCart(),
      },
    });

    // Uncomment below to enable backend order submission
    /*
    const token = localStorage.getItem("token");
    axios.post("http://localhost:3000/api/orders", {
      orderedItems: cart,
      name: "John Doe",
      address: "Testing",
      phone: "+94770348784",
    }, {
      headers: {
        Authorization: "Bearer " + token,
      }
    }).then((res) => {
      console.log(res.data);
    }).catch((error) => {
      console.error("Order submission error:", error);
    });
    */
  }

  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col items-end p-4 mt-8">
      {/* <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 drop-shadow-lg p-5"
            >
             View My Cart
            </motion.h1> */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Image</th>
            <th className="border p-2">Product Name</th>
            <th className="border p-2">Product ID</th>
            <th className="border p-2">Qty</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            console.log(item);
            return (
              <CartCard
                key={item.productId}
                productId={item.productId}
                qty={item.qty}
              />
            );
          })}
        </tbody>
      </table>
      <div className="h-auto w-auto flex items-center flex-col">
      <h1 className="text-3xl font-bold text-mycolor">
        Total: LKR. {labeledTotal?.toFixed(2) || "0.00"}
      </h1>
      <h1 className="text-3xl font-bold text-mycolor">
        Discount: LKR. {((Number(labeledTotal) - Number(total)) || 0).toFixed(2)}
      </h1>
      <h1 className="text-5xl font-bold text-green-700">
        Grand Total: LKR. {total?.toFixed(2) || "0.00"}
      </h1>
      <button
        onClick={onOrderCheckout}
        className="bg-mycolor hover:bg-pink-800 text-white p-2 rounded-lg w-[300px] mt-4"
      >
        Checkout
      </button>
      </div>

      
    </div>
  );
}
