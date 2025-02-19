import axios from "axios";
import { useEffect, useState } from "react";
import { ImPencil } from "react-icons/im";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [loadingstatus, setLoadingstatus] = useState("loading");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL+"/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoadingstatus("loaded");
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoadingstatus("error");
      });
  }, []);

  if (loadingstatus === "loading") {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-xl h-16 w-16 border-4 border-gray-300 border-t-gray-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-adminprimary to-adminsecondary drop-shadow-lg p-5"
          >
            Admin Products
          </motion.h1>
          <Link
            to="/admin/products/addProduct"
            className="flex items-center gap-2 bg-gradient-to-br from-adminprimary to-adminsecondary text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            <IoMdAdd size={18} />
            <span>Add Product</span>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border border-gray-300 px-4 py-2 text-left  bg-gradient-to-r from-blue-300 to-purple-200 text-lg">
                  Product Id
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left bg-gradient-to-r from-blue-300 to-purple-200  text-lg">
                  Product Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left bg-gradient-to-r from-blue-300 to-purple-200 text-lg">
                  Price
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left bg-gradient-to-r from-blue-300 to-purple-200 text-lg">
                  Last Price
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left bg-gradient-to-r from-blue-300 to-purple-200 text-lg">
                  Stock
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left hidden md:table-cell bg-gradient-to-r from-blue-300 to-purple-200 text-lg">
                  Description
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left bg-gradient-to-r from-blue-300 to-purple-200 text-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{product.ProductId}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.productName}</td>
                  <td className="border border-gray-300 px-4 py-2">LKR {product.price.toFixed(2)}</td>
                  <td className="border border-gray-300 px-4 py-2">LKR {product.lastPrice.toFixed(2)}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.stock}</td>
                  <td className="border border-gray-300 px-4 py-2 hidden md:table-cell">{product.description}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex items-center gap-2">
                      <button
                        className="bg-gradient-to-br from-cyan-400 to-lime-400 text-white px-3 py-1 rounded hover:bg-gray-700"
                        title="Edit"
                        onClick={() => {
                          navigate("/admin/products/editproduct", {
                            state: { product },
                          });
                        }}
                      >
                        <ImPencil size={16} />
                      </button>
                      <button
                        className="text-red-500 px-3 py-1 rounded hover:text-red-700"
                        title="Delete"
                        onClick={() => {
                          const token = localStorage.getItem("token");
                          axios
                            .delete(
                              import.meta.env.VITE_BACKEND_URL+`/api/products/${product.ProductId}`,
                              {
                                headers: { Authorization: `Bearer ${token}` },
                              }
                            )
                            .then(() => {
                              toast.success("Product deleted successfully");
                              setLoadingstatus("loading");
                            })
                            .catch(() => {
                              toast.error("Failed to delete product");
                            });
                        }}
                      >
                        <RiDeleteBin5Fill size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
