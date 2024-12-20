import axios from "axios"

export default function Adminproductpage(){

    axios.get("http://localhost:3000/api/products").then((res)=>{
        console.log(res)
    })

    return(
        <div>
            <h1>Admin</h1>
        </div>
    )
}