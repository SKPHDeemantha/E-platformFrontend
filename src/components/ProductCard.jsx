import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { product } = props;

  return (
    <Link to={`/productinfo/${product.ProductId}`}>
      <div className="w-[350px] h-[500px] m-[60px] justify-center bg-gradient-to-r shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative group">
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-green-500 text-white font-bold px-2 py-1 rounded-md shadow-md">
            New
          </div>
        )}
        {product.isOnSale && (
          <div className="absolute top-2 right-2 bg-red-500 text-white font-bold px-2 py-1 rounded-md shadow-md">
            Sale
          </div>
        )}
        <img
          src={product.images[0]}
          alt={product.productName}
          className="w-full h-[60%] object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 w-full h-[60%] bg-black bg-opacity-30 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
          <button className="bg-white text-black font-bold px-4 py-2 rounded-lg shadow-md hover:bg-gray-200">
            Quick View
          </button>
        </div>
        <div className="max-h-[40%] h-[35%] p-4 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-b-xl">
          <h1 className="text-wrap font-bold text-2xl text-center text-white drop-shadow-lg">
            {product.productName}
          </h1>
          <h2 className="text-wrap font-bold text-lg text-center text-white drop-shadow-sm">
            {product.ProductId}
          </h2>
          <p className="text-left text-xl font-semibold text-teal-700">
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
                <span key={i} className="text-yellow-400 text-lg">&#9733;</span>
              ))}
            <span className="ml-2 text-sm text-gray-500">
              ({product.ratingCount || 0})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
