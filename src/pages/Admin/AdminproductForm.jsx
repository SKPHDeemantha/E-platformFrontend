import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import uploadMediaToSupabase from "../../utils/MediaUpload";

export default function AddProductForm() {
  const [ProductId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [alternativeNames, setAlternativeNames] = useState("");
  const [imageFile, setImageFile] = useState([]);
  const [price, setPrice] = useState("");
  const [lastPrice, setLastPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  async function handleSubmit() {
    const altNames = alternativeNames.split(",");

    const promisesArray = [];
    let imgUrls = [];
    if (imageFile.length > 0) {
      for (let i = 0; i < imageFile.length; i++) {
        promisesArray[i] = uploadMediaToSupabase(imageFile[i]);
      }
      imgUrls = await Promise.all(promisesArray);
    }

    const productDetails = {
      ProductId,
      productName,
      altNames,
      images: imgUrls,
      price: parseFloat(price),
      lastPrice: parseFloat(lastPrice),
      stock,
      description,
    };

    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:3000/api/products", productDetails, {
        headers: { Authorization: "Bearer " + token },
      });
      navigate("/admin/products");
      toast.success("Product added successfully");
    } catch (err) {
      toast.error("Failed to add product");
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md overflow-y-auto">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Add New Product
        </h1>

        <label className="block text-gray-700 font-medium mb-1">Product ID</label>
        <input
          type="text"
          onChange={(e) => setProductId(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter product ID"
        />

        <label className="block text-gray-700 font-medium mb-1">Product Name</label>
        <input
          type="text"
          onChange={(e) => setProductName(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter product name"
        />

        <label className="block text-gray-700 font-medium mb-1">Alternative Names</label>
        <input
          type="text"
          onChange={(e) => setAlternativeNames(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter alternative names (comma-separated)"
        />

        <label className="block text-gray-700 font-medium mb-1">Image Upload</label>
        <input
          type="file"
          onChange={(e) => setImageFile(e.target.files)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          multiple
        />

        <label className="block text-gray-700 font-medium mb-1">Price</label>
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter price"
        />

        <label className="block text-gray-700 font-medium mb-1">Last Price</label>
        <input
          type="number"
          onChange={(e) => setLastPrice(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter last price"
        />

        <label className="block text-gray-700 font-medium mb-1">Stock</label>
        <input
          type="number"
          onChange={(e) => setStock(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter stock"
        />

        <label className="block text-gray-700 font-medium mb-1">Description</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter description"
        ></textarea>

        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-br from-blue-600 to-purple-400 text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
