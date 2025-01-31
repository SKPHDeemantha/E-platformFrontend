import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";

export default function(){
    const [orders,setOrders]=useState([]);
    const [orderDetails,setOrderDetails]=useState(false)
   useEffect(()=>{
     const token =localStorage.getItem("token");
     if(!token){
        return;
     }
     axios.get("http://localhost:3000/api/orders/",{
        headers :{
            Authorization: 'Bearer ${token}'
        }
     }).then((res)=>{
        console.log(res.data);
        setOrders(res.data);
     }).catch((res)=>{
        toast.error("Failed to fetch orders. Please try again.");
     });
   }, [])

    return(
        <div className="w-full h-full flex flex-col items-center">
         
        </div>
    )
}