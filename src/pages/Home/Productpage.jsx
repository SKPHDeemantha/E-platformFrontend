import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import { ImSearch } from "react-icons/im";
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
          ()=>toast.error('Error loading products')
        )     
      }
      
    }
  ,[])

  return(
    <div className="flex flex-wrap justify-center items-center bg-[#f1f1f1] overflow-y-scroll w-full h-full">
      <Header/>
      <div className="flex items-center space-x-2 w-full max-w-[70%] lg:max-w-[50%] md:ml-20">
          <input
            type="text"
            placeholder="Search for products"
            className="rounded-lg p-2 w-full md:w-96 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <Link className="p-2 text-xl text-white hover:text-pink-900">
            <ImSearch />
          </Link>
        </div>
        {
            products.map(
             (product)=>
              <ProductCard product={product}/>
          
             )
           }
           <Footer/>
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
