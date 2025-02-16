import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import { ImSearch } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

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
    <div className="bg-pink-50 min-h-screen w-full flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Header />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-24 sm:mt-28 flex flex-col items-center w-full px-2 sm:px-4"
      >
        {/* Search Bar */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="w-full max-w-2xl mx-auto mt-4 px-2 sm:px-4"
        >
          <div className="flex items-center space-x-2 w-full relative sm:absolut mt-10">
            <input
              type="text"
              onChange={search}
              value={query}
              placeholder="Search for products..."
              className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
            />
            <button className="absolute right-3 bg-pink-500 text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-pink-700 transition-all duration-300">
              <ImSearch className="text-lg sm:text-xl" />
            </button>
          </div>
        </motion.div>

        {/* Product Grid */}
        {loadingStatus === "loaded" && (
          <motion.div
            layout
            className="w-full justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:-ml-24 sm:gap-4 p-2  sm:absolut mr-20 lg:m-5"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y:10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  ease: 'linear',
                  duration: 1.5,
                  delay: 0.15
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Loading State */}
        {loadingStatus === "loading" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center h-64 sm:h-80"
          >
            <div className="animate-spin rounded-xl h-12 w-12 sm:h-16 sm:w-16 border-4 border-gray-300 border-t-pink-500" />
          </motion.div>
        )}
      </motion.div>

      <Footer />
    </div>
  );
}
