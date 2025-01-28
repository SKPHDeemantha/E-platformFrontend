import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import uploadMediaToSupabase from "../../utils/MediaUpload";

export default function EditProductForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    navigate("/admin/products");
    return null;
  }

  const [ProductId] = useState(product.ProductId);
  const [productName, setProductName] = useState(product.productName);
  const [alternativeNames, setAlternativeNames] = useState(product.altNames.join(","));
  const [imageFile, setImageFile] = useState([]);
  const [price, setPrice] = useState(product.price);
  const [lastPrice, setLastPrice] = useState(product.lastPrice);
  const [stock, setStock] = useState(product.stock);
  const [description, setDescription] = useState(product.description);

  async function handleSubmit() {
    const altNames = alternativeNames.split(",");
    const promisesArray = [];
    let imgUrls = product.images;

    if (imageFile.length > 0) {
      for (let i = 0; i < imageFile.length; i++) {
        promisesArray[i] = uploadMediaToSupabase(imageFile[i]);
      }
      imgUrls = await Promise.all(promisesArray);
    }

    const productData = {
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
      await axios.put(`http://localhost:3000/api/products/${ProductId}`, productData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/admin/products");
      toast.success("Product updated successfully");
    } catch (err) {
      toast.error("Failed to update product");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-300 p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-pink-700 mb-6 text-center">Edit Product</h1>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium">Product ID</label>
            <input
              type="text"
              value={ProductId}
              disabled
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Product Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Alternative Names</label>
            <input
              type="text"
              value={alternativeNames}
              onChange={(e) => setAlternativeNames(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Alternative Names"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Images</label>
            <input
              type="file"
              onChange={(e) => setImageFile(e.target.files)}
              multiple
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Price"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Last Price</label>
            <input
              type="text"
              value={lastPrice}
              onChange={(e) => setLastPrice(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Last Price"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Stock</label>
            <input
              type="text"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Stock"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Description"
              rows={3}
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}
