import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import { ImSearch } from "react-icons/im";
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Productpage(){
  const [products,setProducts] =useState([]);
  const [loadingstatus,setLoadingstatus] =useState("loading");
  const [query, setQuery] = useState("");
  const navigate =useNavigate();

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
      } else if (products == null) {
        navigate("/error");
      }
        
      
    
    }
  ,[])

  function search(e) {
    const query = e.target.value;
    setQuery(query);
    setLoadingstatus("loading");
    if (query == "") {
      axios
        .get(`http://localhost:3000/api/products`)
        .then((res) => {
          console.log(res.data);
          setProducts(res.data);
          setLoadingstatus("loaded");
        })
        .catch((err) => toast.error("Error loading products"));
    }else{
      axios
        .get(`http://localhost:3000/api/products/search/`+query)
        .then((res) => {
          console.log(res.data);
          setProducts(res.data);
          setLoadingstatus("loaded");
        })
        .catch((err) => toast.error("Error loading products"));
    }if (products == null) {
      navigate("/error");
    }
  }

  return(
    <div className="flex flex-wrap justify-center items-center bg-[#f1f1f1] overflow-y-scroll w-full h-full">
      <Header/>
      <div className="flex items-center space-x-2 w-full max-w-[70%] lg:max-w-[50%] md:ml-20 absolute top-28 bg-white rounded-full shadow-md p-2">
  {/* Search Input */}
  <div className=' absolute justify-center'>
  <input
    type="text"
    onChange={search}
    value={query}
    placeholder="Search for products..."
    className="w-full md:w-96 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 z-10"
  />
   </div>
  <Link className="bg-pink-500 text-white p-3 rounded-full shadow-md hover:bg-pink-700 transition-all duration-300">
    <ImSearch className="text-xl" />
  </Link>
</div >

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
