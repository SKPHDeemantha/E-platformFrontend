import axios from "axios";
import { useEffect, useState } from "react";
import { ImPencil } from "react-icons/im";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { data, Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    if (!productsLoaded) {
      axios
        .get("http://localhost:3000/api/products")
        .then((res) => {
          setProducts(res.data);
          setProductsLoaded(true);
        })
        .catch((err) => {
          console.error("Failed to fetch products:", err);
        });
    }
  }, [productsLoaded]);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-5">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">Admin Products</h1>
          <Link
            to="/admin/products/addProduct"
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            <IoMdAdd size={18} />
            <span>Add Product</span>
          </Link>
        </div>

        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Product Id</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Product Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Last Price</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Stock</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{product.ProductId}</td>
                <td className="border border-gray-300 px-4 py-2">{product.productName}</td>
                <td className="border border-gray-300 px-4 py-2">${product.price.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2">${product.lastPrice.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2">{product.stock}</td>
                <td className="border border-gray-300 px-4 py-2">{product.description}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex items-center gap-2">
                    <button className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500">
                      <ImPencil size={16} />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700 mr-2"
                      title="Delete"

                      onClick={()=>{
                        const token = localStorage.getItem("token");

                        axios.delete(`http://localhost:3000/api/products/${product.productId}`, {
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                        }).then((res) => {
                          console.log(res.data);
                          toast.success("Product deleted successfully");
                          setProductsLoaded(false);
                        }).catch((error)=>{
                          toast.error("Failed to deleted product");
                          
                        })
                  
                      }}
                    >
                      <RiDeleteBin5Fill size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
