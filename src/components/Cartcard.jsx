import axios from "axios"
import { useEffect, useState } from "react"
import { deleteItem } from "../utils/Cartfunction"

export default function CartCard(props){

  const ProductId = props.ProductId
  const qty = props.qty
  
  const [product,setProduct]=useState(null)
  const [loaded,setLoaded]=useState(false)
  useEffect  (
    ()=>{
      if(!loaded){
        axios.get("http://localhost:3000/api/products/"+ProductId).then(

          (response)=>{
            if(response.data!=null){
              setProduct(response.data)
              console.log(response.data)
              setLoaded(true)
            }else{
              deleteItem(ProductId)
            }  
            
          }
        ).catch(
          (error)=>{
            console.log(error)
          }
        )
      }
    } , [loaded, ProductId]
  )

  return(
    <tr className="hover:bg-accent hover:text-white cursor-pointer">
      <td className="">
      <img src={product?.images?.[0] || ''} className="w-[90px] h-[90px] object-cover mx-auto" alt="Product"/>
      </td>
      <td className="text-center">{product?.productName}</td>
      <td className="text-center">{ProductId}</td>
      <td className="text-center">{qty}</td>
      <td className="text-center">LKR. {product?.lastPrice.toFixed(2)}</td>
      <td className="text-center">{(product?.lastPrice*qty).toFixed(2)}</td>
    </tr>
  )


}