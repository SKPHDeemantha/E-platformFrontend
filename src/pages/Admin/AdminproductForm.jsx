import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import uploadMediaToSupabase from "../../utils/MediaUpload";
import { motion } from "framer-motion";

export default function AddProductForm() {
  const [ProductId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [alternativeNames, setAlternativeNames] = useState("");
  const [imageFile, setImageFile] = useState([]);
  const [imagePreview, setImagePreview] = useState("");
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
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-blue-300 to-purple-300">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md overflow-y-auto flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-adminprimary to-adminsecondary drop-shadow-lg p-5"
        >
          Add New Products
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-adminprimary font-medium">Product ID</label>
            <input
              type="text"
              onChange={(e) => setProductId(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-adminprimary"
              placeholder="Enter product ID"
            />
          </div>
          <div>
            <label className="text-adminprimary font-medium">
              Product Name
            </label>
            <input
              type="text"
              onChange={(e) => setProductName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-adminprimary"
              placeholder="Enter product name"
            />
          </div>
        </div>

        <label className="block text-adminprimary font-medium mt-4">
          Alternative Names
        </label>
        <input
          type="text"
          onChange={(e) => setAlternativeNames(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-adminprimary"
          placeholder="Enter alternative names (comma-separated)"
        />

        <div className="space-y-4">
          <label className="block text-adminprimary font-medium">
            Image Upload
          </label>
          <div className="flex justify-center">
            <img
              src={imagePreview || "/placeholder.jpg"}
              alt="Product Preview"
              className="w-40 h-40 object-cover rounded-lg border-2 border-gray-300"
            />
          </div>
          <input
            type="file"
            onChange={(e) => {
              setImageFile(e.target.files);
              if (e.target.files[0]) {
                setImagePreview(URL.createObjectURL(e.target.files[0]));
              }
            }}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-adminprimary"
            multiple
            accept="image/*"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-adminprimary font-medium">Price</label>
            <input
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-adminprimary"
              placeholder="Enter price"
            />
          </div>
          <div>
            <label className="text-adminprimary font-medium">Last Price</label>
            <input
              type="number"
              onChange={(e) => setLastPrice(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-adminprimary"
              placeholder="Enter last price"
            />
          </div>
        </div>

        <label className="block text-adminprimary font-medium mt-4">
          Stock
        </label>
        <input
          type="number"
          onChange={(e) => setStock(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-adminprimary"
          placeholder="Enter stock"
        />

        <label className="block text-adminprimary font-medium">
          Description
        </label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-adminprimary"
          placeholder="Enter description"
        ></textarea>

        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-br from-adminprimary to-adminsecondary hover:bg-gradient-to-tr text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
