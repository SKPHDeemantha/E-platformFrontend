import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';

export default function Productpage(){
  const [products,setProducts] =useState([]);
  const [loadingstatus,setLoadingstatus] =useState("loading");

  useEffect(
    ()=>{
      if(loadingstatus=="loading"){
        axios.get(`http://localhost:3000/api/products`).then(

          (res)=>{
            console.log(res.data)
            setProducts(res.data)
            setLoadingstatus('loaded')
          }
          

        ).catch(
          (err)=>toast.error('Error loading products')
        )     
      }
      
    }
  ,[])

  return(
    <div className="flex flex-wrap justify-center items-center bg-{#f1f1f1} overflow-y-scroll w-full h-full">
        {
            products.map(
             (product)=>
              <ProductCard product={product}/>
          
             )
           }
      </div>
  )
}

//   return (
  
//       <div className="flex justify-center items-center bg-slate-950 overflow-y-scroll">
//            {/* {
//             products.map(
//               (product)=>
//                 <div key={product.id} className='flex flex-col items-center'>
//                   <h1>{product.productName}</h1>
//                   </div>
          
//             )
//            } */}
      
//       </div>
  
//   );
// }
