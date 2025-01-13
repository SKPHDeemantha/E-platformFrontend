import { useEffect, useState } from "react"
import { loadCart } from "../../utils/Cartfunction"

export default function Cart(){
    const [Cart,setCart] =useState([])

    useEffect(
        ()=>{
            setCart(loadCart())
        }
    )

    return(
        <div className="w-full h-full overflow-y-scroll flex flex-wrap justify-center">
           {
            Cart.map(
                (item)=>{
                    return(
                        <span>{item.producId}  * {item.qty}</span>
                    )
                }
            )
           }
        </div>
    )
}