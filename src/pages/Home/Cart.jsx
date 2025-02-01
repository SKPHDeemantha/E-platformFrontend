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
    const productIds = cartItems.map((item) => item.ProductId).join(",");

    axios
      .post("http://localhost:3000/api/orders/quote" + productIds, {
        orderedItems: loadCart(),
      })
      .then((res) => {
        if (res.data.total != null) {
          setTotal(res.data.total);
          setLabeledTotal(res.data.total);
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
    <div className="w-full h-full overflow-y-scroll flex flex-col items-end p-4">
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
      <h1 className="text-3xl font-bold text-accent">
        Total: LKR. {labeledTotal?.toFixed(2) || "0.00"}
      </h1>
      <h1 className="text-3xl font-bold text-accent">
        Discount: LKR. {(labeledTotal - total || 0).toFixed(2)}
      </h1>
      <h1 className="text-3xl font-bold text-accent">
        Grand Total: LKR. {total?.toFixed(2) || "0.00"}
      </h1>

      <button
        onClick={onOrderCheckout}
        className="bg-accent hover:bg-accent-light text-white p-2 rounded-lg w-[300px] mt-4"
      >
        Checkout
      </button>
    </div>
  );
}
