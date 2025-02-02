import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import { ImSearch } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { toast } from "react-hot-toast"; // Ensure toast is imported


export default function Productpage() {
  const [products, setProducts] = useState([]);
  const [loadingstatus, setLoadingstatus] = useState("loading");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoadingstatus("loaded");
      })
      .catch(() => toast.error("Error loading products"));
  }, []);

  // Redirect to error page if no products are found after loading
  useEffect(() => {
    if (loadingstatus === "loaded" && products.length === 0) {
      navigate("/error");
    }
  }, [products, loadingstatus, navigate]);

  function search(e) {
    const query = e.target.value;
    setQuery(query);
    setLoadingstatus("loading");

    const endpoint =
      query === ""
        ? `http://localhost:3000/api/products`
        : `http://localhost:3000/api/products/search/${query}`;

    axios
      .get(endpoint)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoadingstatus("loaded");
      })
      .catch(() => toast.error("Error loading products"));
  }

  return (
    <div className="flex flex-col items-center bg-[#f1f1f1] min-h-screen w-full">
      <Header />

      {/* Search Bar */}
      <div className="flex items-center space-x-2 w-full max-w-lg md:max-w-md lg:max-w-[50%] mx-auto mt-6 px-4 relative">
        <input
          type="text"
          onChange={search}
          value={query}
          placeholder="Search for products..."
          className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
        />
        <Link className="bg-pink-500 text-white p-3 rounded-full shadow-md hover:bg-pink-700 transition-all duration-300">
          <ImSearch className="text-xl" />
        </Link>
      </div>

      {/* Products Section */}
      {loadingstatus === "loaded" && (
        <div className="w-full flex flex-wrap justify-center gap-4 p-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Loading Spinner */}
      {loadingstatus === "loading" && (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-500 border-b-pink-500"></div>
        </div>
      )}

      <Footer />
    </div>
  );
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
