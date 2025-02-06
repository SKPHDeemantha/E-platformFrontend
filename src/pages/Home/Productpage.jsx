import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import { ImSearch } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { toast } from "react-hot-toast";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState("loading");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products`)
      .then((res) => {
        setProducts(res.data);
        setLoadingStatus("loaded");
      })
      .catch(() => toast.error("Error loading products"));
  }, []);

  useEffect(() => {
    if (loadingStatus === "loaded" && products.length === 0) {
      navigate("/error");
    }
  }, [products, loadingStatus, navigate]);

  function search(e) {
    const query = e.target.value;
    setQuery(query);
    setLoadingStatus("loading");

    const endpoint =
      query === ""
        ? `http://localhost:3000/api/products`
        : `http://localhost:3000/api/products/search/${query}`;

    axios
      .get(endpoint)
      .then((res) => {
        setProducts(res.data);
        setLoadingStatus("loaded");
      })
      .catch(() => toast.error("Error loading products"));
  }

  return (
    <div className="bg-pink-50  min-h-screen w-full flex flex-col">
      {/* bg-[#f1f1f1]  */}

      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Header />
      </div>

      <div className="mt-28 flex flex-col items-center overflow-y-auto w-full px-4">
        <div className="flex items-center space-x-2 w-full max-w-lg sm:max-w-md lg:max-w-[50%] mx-auto mt-6 px-4 relative">
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

        {loadingStatus === "loaded" && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {loadingStatus === "loading" && (
          <div className="flex justify-center items-center h-80">
            <div className="animate-spin rounded-xl h-16 w-16 border-4 border-gray-300 border-t-mycolor"></div>
          </div>
        )}
      </div>

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
