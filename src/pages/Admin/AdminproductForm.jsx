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

    const productdeatails = {
      ProductId,
      productName,
      altNames,
      images: imgUrls,
      price: parseFloat(price),
      lastPrice: parseFloat(lastPrice),
      stock,
      description,
    };
    console.log(productdeatails);
    const token = localStorage.getItem("token");

    try {
      const result = await axios.post(
       `http://localhost:3000/api/products`,
        productdeatails,
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 p-6">
      <h1 className="text-4xl font-bold text-pink-700 mb-8">Add New Product</h1>

      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <label className="block text-gray-700 font-medium mb-2">
          Product ID
        </label>
        <input
          type="text"
          id="product-id"
          onChange={(e) => setProductId(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mycolor"
          placeholder="Enter product ID"
        />

        <label className="block text-gray-700 font-medium mb-2">
          Product Name
        </label>
        <input
          type="text"
          id="product-name"
          onChange={(e) => setProductName(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mycolor"
          placeholder="Enter product name"
        />

        <label className="block text-gray-700 font-medium mb-2">
          Alternative Names
        </label>
        <input
          type="text"
          id="alternative-names"
          onChange={(e) => setAlternativeNames(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mycolor"
          placeholder="Enter alternative names (comma-separated)"
        />

        <label className="block text-gray-700 font-medium mb-2">
          Image URLs
        </label>
        <input
          type="file"
          id="image-urls"
          onChange={(e) => setImageFile(e.target.files)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mycolor"
          placeholder="Enter image png or jpg"
          multiple
        />

        <label className="block text-gray-700 font-medium mb-2">Price</label>
        <input
          type="number"
          id="price"
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mycolor"
          placeholder="Enter price"
        />

        <label className="block text-gray-700 font-medium mb-2">
          Last Price
        </label>
        <input
          type="number"
          id="last-price"
          onChange={(e) => setLastPrice(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mycolor"
          placeholder="Enter last price"
        />

        <label className="block text-gray-700 font-medium mb-2">Stock</label>
        <input
          type="number"
          id="stock"
          onChange={(e) => setStock(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mycolor"
          placeholder="Enter stock"
        />

        <label className="block text-gray-700 font-medium mb-2">
          Description
        </label>
        <input
          type="text"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mycolor"
          placeholder="Enter description"
        />

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-pink-400 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  );
}