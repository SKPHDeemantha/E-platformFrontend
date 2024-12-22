import axios from "axios"
import { useEffect } from "react"

export default function Adminproductpage(){

   
    const [products,setProducts] = useState("");
        
        useEffect(
            ()=>{
                axios.get("http://localhost:3000/api/products").then((res)=>{
            console.log(res.data)
            setProducts(res.data)
        })
            },[]
        )

          

    return(
        <div>
            <h1>Admin Product Page</h1>{
              products.map(
                (product,index)=>{
                    return(
                        <div key={product._id}>
                    {product.productName}
                    </div>
               ) }
              )
            }
            
        </div>
    )
}

