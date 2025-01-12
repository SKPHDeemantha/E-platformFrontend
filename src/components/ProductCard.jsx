import { Link } from "react-router-dom"

export default function ProductCard(props){

  console.log(props)
  return(
   <Link to={`/productinfo/${props.product.ProductId}`}>
    <div className="w-[300px] h-[450px] m-[70px] justify-center bg-slate-300 rounded-xl shadow-gray-500 hover:shadow-slate-200">
      <img src={props.product.images[0]} className="w-full h-[60%] object-cover"/>
      <div className="max-h-[40%] h-[35%] p-4 justify-between bg-zinc-300">
        <h1 className="text-wrap font-bold text-2xl text-center">{props.product.productName}</h1>
        <h2 className="text-wrap font-bold text-lg text-center">{props.product.ProductId}</h2>
        <p className="text-left text-xl font-semibold">LKR.{props.product.lastPrice}</p>
        {
          (props.product.lastPrice>props.product.price)&&
          <p className="text-left text-xl font-semibold line-through">LKR.{props.product.price}</p>
        }
      </div>
    </div>
   </Link>
  )
}