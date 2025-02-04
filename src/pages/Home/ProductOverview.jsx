import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductNotFound from "./ProductNotFound";
import { addToCart } from "../../utils/Cartfunction";
import toast from "react-hot-toast";
import ImageSlider from "../../components/ImageSlider";
import Review from "../../components/Review";

export default function ProductOverView() {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const navigate =useNavigate();
  
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products/${productId}`)
      .then((res) => {
        if (res.data) {
          setProduct(res.data);
          setStatus("found");
        } else {
          setStatus("not found");
        }
      })
      .catch(() => setStatus("not found"));
  }, [productId]);

  

  const onAddToCartClick = () => {
    if (product) {
      addToCart(product.ProductId, counter);
      console.log(product);
      toast.success(`${product.productName} added to cart!`);
    }
  };

  function onBynowClick(){
    navigate("/shipping",{
      state:{
        items:[
          {
            productId: productId,
            qty :1
          }
        ]
      }
    })
  }
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if(counter >=2)
    setCounter(counter - 1);
  };

  return (
    <div className="w-full h-auto min-h-[calc(100vh-100px)] bg-gray-100 p-4">
      {status === "loading" && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-spin rounded-xl h-16 w-16 border-4 border-gray-300 border-t-mycolor"></div>
        </div>
      )}
      {status === "not found" && <ProductNotFound />}
      {status === "found" && product && (
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-6 p-4">
        
          <div className="w-full lg:w-1/2">
            <ImageSlider images={product.images} />
          </div>
          <div className="flex flex-col w-full h-full">
          <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6 space-y-4 ">
            <h1 className="text-2xl lg:text-4xl font-extrabold text-gray-800">
              {product.productName}
            </h1>
            <h2 className="text-sm lg:text-lg font-medium text-gray-500">
              {product.altNames.join(" | ")}
            </h2>
            <p className="text-lg lg:text-xl">
              {product.price > product.lastPrice && (
                <span className="line-through text-red-500 mr-2">
                  LKR {product.price}
                </span>
              )}
              <span className="font-bold text-green-600">
                LKR {product.lastPrice}
              </span>
            </p>
            <p className="text-gray-600 text-sm lg:text-base line-clamp-3">
              {product.description}
            </p>
            <div className="w-auto h-auto flex flex-row ">
              <p className="subtittle"></p>

            <button onClick={decrement} className="w-14 h-14 bg-slate-200 hover:bg-slate-300 items-center justify-center text-2xl rounded-r-lg" >-</button> 
             <div className="w-14 h-14 bg-slate-200 items-center justify-center text-xl flex font-semibold">{counter}</div>
            <button onClick={increment}  className="w-14 h-14 bg-slate-200 hover:bg-slate-300 items-center justify-center  text-2xl rounded-l-lg border-r-black" > +</button>
            </div>
            
            <button
              onClick={onAddToCartClick}
              className="bg-mycolor hover:bg-mycolor hover:text-wrap text-white px-4 lg:px-6 py-2 rounded-lg text-sm lg:text-base transition-all"
            >
              Add to Cart
            </button>
            <button
              onClick={onBynowClick}
              className="bg-mycolor hover:bg-mycolor hover:text-wrap mx-3 text-white px-4 lg:px-6 py-2 rounded-lg text-sm lg:text-base transition-all"
            >
              Buy Now 
            </button>
          </div>
          <div className="w-20 h-20 bg-slate-400 flex flex-col">
            <Review/>
          </div>
          
        </div>
        </div>
      )}
    </div>
  );
}
