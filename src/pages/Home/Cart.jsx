import { useEffect, useState } from "react"
import { loadCart } from "../../utils/Cartfunction"
import CartCard from "../../components/Cartcard"
import axios from "axios"

export default function Cart(){
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [labeledTotal, setLabeledTotal] = useState(0);

    useEffect(() => {
        const cartItems = loadCart();
        setCart(cartItems);
        axios.get("http://localhost:3000/api/orders/quote", {
            params: { orderedItems: cartItems }
        })
        .then((res) => {
            console.log(res.data);
            setTotal(res.data.total);
            setLabeledTotal(res.data.labeledTotal);
        });
    }, []);

   function onOrdercheckout(){

    }

    return(
        <div className="w-full h-full  overflow-y-scroll flex  flex-col items-end">
        <table className="w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Product ID</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
          {cart.map((item) => {
            return (
              <CartCard
                key={item.ProductId}
                ProductId={item.ProductId}
                qty={item.qty}
              />
              );
          })}
          </tbody>
        </table>
        <h1 className="text-3xl font-bold text-accent">
          Total: LKR. {labeledTotal.toFixed(2)}
        </h1>
        <h1 className="text-3xl font-bold text-accent">
          Discount: LKR. {(labeledTotal - total).toFixed(2)}
        </h1>
        <h1 className="text-3xl font-bold text-accent">
          Grand Total: LKR. {total}
        </h1>
  
        <button onClick={onOrdercheckout}  className="bg-accent hover:bg-accent-light text-white p-2 rounded-lg w-[300px]">
          Checkout
        </button>
      </div>
    )
}