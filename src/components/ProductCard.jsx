import { Link } from "react-router-dom";
import Review from "./Review";

export default function ProductCard(props) {
  const { product } = props;

  return (
    <Link to={`/productinfo/${product.ProductId}`}> 
      <div className="w-[350px] h-[550px] m-[60px] justify-center  shadow-lg hover:shadow-3xl hover:scale-105 transition-all duration-300 relative group ">
        {/* {product.isNew && (
          <div className="absolute top-2 left-2 bg-green-500 text-white font-bold px-2 py-1 rounded-md shadow-md">
            New
          </div>
        )}
        {product.isOnSale && (
          <div className="absolute top-2 right-2 bg-red-500 text-white font-bold px-2 py-1 rounded-md shadow-md">
            Sale
          </div>
        )} */}
        <img
          src={product.images[0]}
          alt={product.productName}
          className="w-[100%] h-[60%] object-cover rounded-xl transition-transform duration-300 group-hover:scale-110 p-4"
        />
        <div className="absolute top-0 left-0 w-full h-[60%] bg-black bg-opacity-30 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
          <button className="bg-white text-black font-bold px-4 py-2 rounded-lg shadow-md hover:bg-gray-200">
            Quick View
          </button>
        </div>
        <div className="max-h-[40%] h-[35%] p-4 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 ">
          <h1 className="text-wrap font-bold text-2xl text-center text-pink-900 drop-shadow-lg">
            {product.productName}
          </h1>
          <h2 className="text-wrap font-bold text-lg text-center text-black drop-shadow-sm">
            {product.ProductId}
          </h2>
          <p className="text-left text-xl font-semibold text-green-600">
            LKR.{product.lastPrice}
          </p>
          {product.price > product.lastPrice && (
            <p className="text-left text-lg font-semibold text-red-600 line-through">
              LKR.{product.price}
            </p>
          )}
          <div className="flex items-center mt-2">
            {Array(product.rating || 0)
              .fill()
              .map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">
                  
                </span>
              ))}
            <span className="ml-2 text-sm text-gray-500">
              ({product.ratingCount || <Review/>})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
