import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import UploadMeadiaToSupabase from "../../utils/MediaUpload";

export default function AddProductForm() {
  const [ProductId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [alternativeNames, setAlternativeNames] = useState("");
  const [images, setImages] = useState(null);
  const [price, setPrice] = useState("");
  const [lastPrice, setLastPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  async function handleSubmit() {
    const altNames = alternativeNames.split(",");
   // const imgUrls = imageUrls.split(",");

    const product = {
      ProductId,
      productName,
      altNames,
      images,
      price: parseFloat(price),
      lastPrice: parseFloat(lastPrice),
      stock,
      description,
    };

    const token = localStorage.getItem("token");

    try {
      const result =  await axios.post("http://localhost:3000/api/products", product, {
        headers: {
          Authorization: "Bearer " + token,
        },
      }); 
      console.log(result);
    navigate("/admin/products");
      toast.success("Product added successfully");
    } catch (err) { 
      toast.error("Failed to add product");
    }
  }
  async function handleimage() {
    UploadMeadiaToSupabase(images).then((url)=>{
      console.log(url)
    })

    
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <h1 className="text-4xl font-bold text-white mb-8">Add New Product</h1>

      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <label className="block text-gray-700 font-medium mb-2">Product ID</label>
        <input
          type="text"
          id="product-id"
          onChange={(e) => setProductId(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter product ID"
        />

        <label className="block text-gray-700 font-medium mb-2">Product Name</label>
        <input
          type="text"
          id="product-name"
          onChange={(e) => setProductName(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter product name"
        />

        <label className="block text-gray-700 font-medium mb-2">Alternative Names</label>
        <input
          type="text"
          id="alternative-names"
          onChange={(e) => setAlternativeNames(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter alternative names (comma-separated)"
        />

        <label className="block text-gray-700 font-medium mb-2">Image URLs</label>
        <input
          type="File"
          id="image-urls"
          onClick={handleimage}
          onChange={(e) => setImages(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter image png or jpg"
        />

        <label className="block text-gray-700 font-medium mb-2">Price</label>
        <input
          type="number"
          id="price"
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter price"
        />

        <label className="block text-gray-700 font-medium mb-2">Last Price</label>
        <input
          type="number"
          id="last-price"
          onChange={(e) => setLastPrice(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter last price"
        />

        <label className="block text-gray-700 font-medium mb-2">Stock</label>
        <input
          type="number"
          id="stock"
          onChange={(e) => setStock(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter stock"
        />

        <label className="block text-gray-700 font-medium mb-2">Description</label>
        <input
          type="text"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter description"
        />

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
          Submit
        </button>
      </div>
    </div>
  );
}
