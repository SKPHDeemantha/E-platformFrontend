import { Link } from "react-router-dom";

export default function ProductCard(props) {
  console.log(props);

  return (
    <Link to={`/productinfo/${props.product.ProductId}`}>
      <div className="w-[300px] h-[450px] m-[70px] justify-center bg-gradient-to-r from-secondary to-mycolor rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
        <img
          src={props.product.images[0]}
          alt={props.product.productName}
          className="w-full h-[60%] object-cover rounded-t-xl"
        />
        <div className="max-h-[40%] h-[35%] p-4 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-b-xl">
          <h1 className="text-wrap font-bold text-2xl text-center text-white drop-shadow-lg">
            {props.product.productName}
          </h1>
          <h2 className="text-wrap font-bold text-lg text-center text-white drop-shadow-sm">
            {props.product.ProductId}
          </h2>
          <p className="text-left text-xl font-semibold text-teal-700">
            LKR.{props.product.lastPrice}
          </p>
          {props.product.lastPrice > props.product.price && (
            <p className="text-left text-lg font-semibold text-red-600 line-through">
              LKR.{props.product.price}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
