import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast/headless";
import { useParams } from "react-router-dom"

export default function ProductOverView(){
    const params =useParams();
    const ProductId =params.id;
    const [product, setProduct] = useState(null)
    const [status, setStatus] = useState("loading")
    
    useEffect(() => {
        const fetchData = async () => {
            console.log(ProductId);
            try {
                const response = await axios.get("http://localhost:3000/api/products");
                console.log(response.data);
                toast.success("Done");
            } catch (error) {
                console.error("Error fetching data:", error);
                toast.error("OOPS! Not Found.");
            }
        };
    
        fetchData();
    }, [ProductId]);
    
    console.log(params)
    return(
        <div className="w-full h-[calc(100vh-100px)]">
            {
                status =="loading" && <h1>Loading....</h1>
            }
            {
                status =="not-found" && <h1>Product not found</h1>
            }
            {
                status =="found" &&(
                    <h1>product found</h1>
                )
            }
            
        </div>
    )
}