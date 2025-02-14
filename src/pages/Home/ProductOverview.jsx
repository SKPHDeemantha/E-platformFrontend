import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductNotFound from "./ProductNotFound";
import { addToCart } from "../../utils/Cartfunction";
import toast from "react-hot-toast";
import ImageSlider from "../../components/ImageSlider";
import Review from "../../components/Review";
import { IoMdCloseCircle } from "react-icons/io";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ProductOverView() {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const navigate = useNavigate();
  const [viewDetails, setViewDetails] = useState(false);
  const [counter, setCounter] = useState(1);

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
      toast.success(`${product.productName} added to cart!`);
    }
  };

  function onBuyNowClick() {
    navigate("/shipping", {
      state: {
        items: [
          {
            productId: productId,
            qty: counter,
          },
        ],
      },
    });
  }

  const increment = () => setCounter(counter + 1);
  const decrement = () => counter >= 2 && setCounter(counter - 1);

  const closeSlider = () => {
    setViewDetails(false);
  };

  return (
    <div>
      <Header />
      <div className="w-full min-h-[calc(100vh-100px)] bg-gray-100 p-4">
        {status === "loading" && (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-xl h-16 w-16 border-4 border-gray-300 border-t-mycolor"></div>
          </div>
        )}
        {status === "not found" && <ProductNotFound />}
        {status === "found" && product && (
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-6 p-4">
            <div className="w-full lg:w-1/3">
              <ImageSlider images={product.images} />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-4 sm:p-6 space-y-4">
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-gray-900">
                {product.productName}
              </h1>
              <h2 className="text-sm sm:text-base lg:text-lg font-medium text-gray-500">
                {product.altNames.join(" | ")}
              </h2>
              <p className="text-lg sm:text-xl">
                {product.price > product.lastPrice && (
                  <span className="line-through text-red-500 mr-2">
                    LKR {product.price}
                  </span>
                )}
                <span className="font-bold text-green-600">
                  LKR {product.lastPrice}
                </span>
              </p>
              <p className="text-gray-600 text-sm sm:text-base line-clamp-3">
                {product.description}
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={decrement}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-2xl rounded-l-lg font-bold"
                >
                  -
                </button>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-200 flex items-center justify-center text-lg font-semibold">
                  {counter}
                </div>
                <button
                  onClick={increment}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-xl rounded-r-lg font-bold"
                >
                  +
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={onAddToCartClick}
                  className="bg-gradient-to-bl from-pink-500 to-purple-400 hover:bg-mycolor-dark hover:scale-105  text-white px-4 py-2 rounded-lg text-sm sm:text-base transition-all hover:animate-pulse"
                >
                  Add to Cart
                </button>
                <button
                  onClick={onBuyNowClick}
                  className="bg-gradient-to-tl from-pink-600 to-purple-500 hover:bg-mycolor-dark hover:scale-105 text-white px-4 py-2 rounded-lg text-sm sm:text-base transition-all hover:animate-pulse"
                >
                  Buy Now
                </button>
              </div>

              <button
                className="w-full bg-gradient-to-tr shadow-lg from-pink-500 to-white hover:scale-105 py-2 rounded-lg text-center font-bold text-xl text-purple-900 hover:bg-gradient-to-t "
                onClick={() => setViewDetails(!viewDetails)}
              >
                Add Review
              </button>

              {viewDetails && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                  {/* Modal Container */}
                  <div className="bg-slate-200 p-6 rounded-lg w-full max-w-sm md:max-w-md relative flex flex-col">
                    <Review />
                    {/* Submit Button */}
                    <button
                      className="w-full bg-gradient-to-r from-pink-600 to-purple-500 text-white font-semibold text-lg py-2 rounded-lg mt-4
      hover:bg-pink-600"
                      onClick={() => {
                        closeSlider();
                        toast.success("Thank you for your Review!");
                      }}
                    >
                      Submit
                    </button>{" "}
                    {/* Close Button */}
                    <button
                      className="w-10 h-10 rounded-md flex items-center justify-center  m-3 ml-44 "
                      onClick={closeSlider}
                    >
                      <IoMdCloseCircle className="text-3xl text-black" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
