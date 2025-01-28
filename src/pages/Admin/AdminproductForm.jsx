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
      const result = await axios.post(
        `http://localhost:3000/api/products`,
        productDetails,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(result);
      navigate("/admin/products");
      toast.success("Product added successfully");
    } catch (err) {
      toast.error("Failed to add product");
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 p-4">
      {/* Background Image */}
      <img
        src="/EditPage.jpg"
        alt="Page background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-pink-700 text-center mb-6">Add New Product</h1>

        {/* Product ID */}
        <label className="block text-gray-700 font-medium mb-2">Product ID</label>
        <input
          type="text"
          id="product-id"
          onChange={(e) => setProductId(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Enter product ID"
        />

        {/* Product Name */}
        <label className="block text-gray-700 font-medium mb-2">Product Name</label>
        <input
          type="text"
          id="product-name"
          onChange={(e) => setProductName(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Enter product name"
        />

        {/* Alternative Names */}
        <label className="block text-gray-700 font-medium mb-2">Alternative Names</label>
        <input
          type="text"
          id="alternative-names"
          onChange={(e) => setAlternativeNames(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Enter alternative names (comma-separated)"
        />

        {/* Image Upload */}
        <label className="block text-gray-700 font-medium mb-2">Image Upload</label>
        <input
          type="file"
          id="image-upload"
          onChange={(e) => setImageFile(e.target.files)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          multiple
        />

        {/* Price */}
        <label className="block text-gray-700 font-medium mb-2">Price</label>
        <input
          type="number"
          id="price"
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Enter price"
        />

        {/* Last Price */}
        <label className="block text-gray-700 font-medium mb-2">Last Price</label>
        <input
          type="number"
          id="last-price"
          onChange={(e) => setLastPrice(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Enter last price"
        />

        {/* Stock */}
        <label className="block text-gray-700 font-medium mb-2">Stock</label>
        <input
          type="number"
          id="stock"
          onChange={(e) => setStock(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Enter stock"
        />

        {/* Description */}
        <label className="block text-gray-700 font-medium mb-2">Description</label>
        <textarea
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Enter description"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
