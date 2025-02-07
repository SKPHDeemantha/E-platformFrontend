import axios from "axios";
import { useEffect, useState } from "react";
import { ImPencil } from "react-icons/im";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [loadingstatus, setLoadingstatus] = useState("loading");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
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
        <div className="animate-spin rounded-xl h-16 w-16 border-4 border-gray-300 border-t-adminprimary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-t from-adminprimary to-adminsecondary p-5">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-5">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-adminprimary">Admin Products</h1>
          <Link
            to="/admin/products/addProduct"
            className="flex items-center gap-2 bg-gradient-to-t from-adminprimary to-adminsecondary text-white px-4 py-2 rounded-lg hover:bg-adminsecondary "
           >
            <IoMdAdd size={18} />
            <span>Add Product</span>
          </Link>
        </div>

        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gradient-to-t from-adminprimary to-adminsecondary text-white">
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
                    <button
                      className="bg-adminsecondary text-adminprimary px-3 py-1 rounded hover:bg-adminprimary hover:text-white"
                      title="Edit"
                      onClick={() => {
                        navigate("/admin/products/editproduct", { state: { product } });
                      }}
                    >
                      <ImPencil size={16} />
                    </button>
                    <button
                      className="text-red-500 px-3 py-1 rounded hover:text-red-700 mr-2"
                      title="Delete"
                      onClick={() => {
                        const token = localStorage.getItem("token");
                        axios
                          .delete(`http://localhost:3000/api/products/${product.ProductId}`, {
                            headers: { Authorization: `Bearer ${token}` },
                          })
                          .then((res) => {
                            toast.success("Product deleted successfully");
                            setLoadingstatus("loading");
                          })
                          .catch(() => {
                            toast.error("Failed to delete product");
                          });
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
