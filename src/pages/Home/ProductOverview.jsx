import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ProductNotFound from "./ProductNotFound";
import { addToCart } from "../../utils/Cartfunction";
import toast from "react-hot-toast";


export default function ProductOverView(){
    const params =useParams();
    let productId =params.id;
    const [product,setProduct] =useState("");
    const[status,setStatus] =useState("loading");

   useEffect(
    ()=>{
         console.log(productId);
         axios.get(`http://localhost:3000/api/products/${productId}`).then((res)=>{
            console.log(res.data);

             if(res.data== null){
                setStatus("not found");
             } 
             if(res.data !=null){
                setProduct(res.data);
                setStatus("found");
             }

         })
    },[])
    function onAddtoCartClick(){
        addToCart(product.productId,1)
        toast.success(product.productId+" Added to cart")
      }

    return(
        <div className="w-full h-[calc(100vh-100px)]  bg-slate-200">
            {
                status =="loading" && (
                    <div className="w-full h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32  border-2 border-gray-500 border-b-accent border-b-4"></div>

          </div>
                )}
                {
                    status =="not found" &&(
                        <ProductNotFound/>
                    )
                }
                {
                    status == "found" && (
                        <div className="w-full h-full flex items-center justify-center">
                        {/* <div className="w-[35%] h-full">
                            
                          <ImageSlider images={product.images}/>
                        </div> */}
                        <div className="w-[65%] h-full p-4">
                          <h1 className="text-3xl font-bold text-gray-800">{product.productName}</h1>
                          {/* <h1 className="text-3xl font-bold text-gray-500">{product.altNames.join(" | ")}</h1> */}
                          <p className="text-xl text-gray-600">{
                          (product.price>product.lastPrice)&&
                          <span className="line-through text-red-500">LKR.{product.price}</span>
                          } <span>{"LKR."+product.lastPrice}</span></p>
                          <p className="text-lg text-gray-600 line-clamp-3">{product.description}</p>
                          <button onClick={onAddtoCartClick} className="bg-accent text-white p-2 rounded-lg">Add to cart</button>
                        </div>
                      </div>
                    )
                    
                }
        </div>
    )
}