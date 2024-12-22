import axios from "axios"
import { useEffect, useState } from "react"
export default function AdminProductsPage(){

  const [products,setProducts] = useState(
    [
      {
          "_id": "674b26c0d2ef71f6d29de783",
          "productId": "B10001",
          "productName": "Hydrating Face Serum",
          "altNames": [
              "Moisturizing Serum",
              "Glow Boost Serum"
          ],
          "images": [
              "https://example.com/images/serum1.jpg",
              "https://example.com/images/serum1-alt.jpg"
          ],
          "price": 24.99,
          "lastPrice": 29.99,
          "stock": 200,
          "description": "A lightweight, fast-absorbing serum infused with hyaluronic acid and vitamin C to hydrate and brighten your skin.",
          "__v": 0
      },
      {
          "_id": "675e73c11a4b599f8c1a8828",
          "productId": "B98765",
          "productName": "Hydrating Face Serum",
          "altNames": [
              "Moisturizing Serum",
              "Skin Glow Serum"
          ],
          "images": [
              "https://example.com/serum1.jpg",
              "https://example.com/serum2.jpg"
          ],
          "price": 25.99,
          "lastPrice": 29.99,
          "stock": 200,
          "description": "A lightweight hydrating serum enriched with hyaluronic acid to give your skin a radiant and healthy glow.",
          "__v": 0
      }
  ]
  )

  useEffect(
    ()=>{
      axios.get("http://localhost:5000/api/products").then(
        (res)=>{
          console.log(res.data)
          setProducts(res.data)
          console.log(
            {
              discountTitle : "Summer Sale",
              products : products[0]
            }
          )

          console.log({
            discountTitle : "Summer Sale",
            ...products[0]
          })
        }
      )
    },[]
)

 
  

  return (
    <div>
      <h1>Admin Products Page</h1>
      {
        products.map(

          (product,index)=>{
            return(
              <div key={product._id}>
                {index}
                {product.productName}
              </div>
            )
          }

        )
      }
    </div>
  )
}
