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
  const [alternativeNames, setAlternativeNames] = useState(
    product.altNames.join(",")
  );
  const [imageFile, setImageFile] = useState([]);
  const [imagePreview, setImagePreview] = useState(product.images[0] || "");
  const [price, setPrice] = useState(product.price);
  const [lastPrice, setLastPrice] = useState(product.lastPrice);
  const [stock, setStock] = useState(product.stock);
  const [description, setDescription] = useState(product.description);

  function handleImageChange(e) {
    const files = e.target.files;
    setImageFile(files);
    if (files.length > 0) {
      setImagePreview(URL.createObjectURL(files[0]));
    }
  }

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
      await axios.put(
        `http://localhost:3000/api/products/${ProductId}`,
        productData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Product updated successfully");
      navigate("/admin/products");
    } catch (err) {
      console.error("Error updating product:", err);
      toast.error(err.response?.data?.message || "Failed to update product");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-blue-200 to-pink-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-adminprimary to-adminsecondary mb-6 ml-80 ">
          Edit Product
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Product ID
                  </label>
                  <input
                    type="text"
                    value={ProductId}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-adminprimary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Alternative Names
                </label>
                <input
                  type="text"
                  value={alternativeNames}
                  onChange={(e) => setAlternativeNames(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-adminprimary"
                  placeholder="Separate names with commas"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Price
                  </label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-adminprimary"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Last Price
                  </label>
                  <input
                    type="number"
                    value={lastPrice}
                    onChange={(e) => setLastPrice(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-adminprimary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Stock
                </label>
                <input
                  type="number"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-adminprimary"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-adminprimary"
                  rows={4}
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full  bg-gradient-to-br from-adminprimary to-adminsecondary text-white py-3 rounded-lg transition-all duration-300 font-medium"
              >
                Update Product
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <img
              src={imagePreview || "/placeholder.jpg"}
              alt="Product Preview"
              className="w-full aspect-square object-cover rounded-lg border-2 border-gray-300"
            />
            <input
              type="file"
              onChange={handleImageChange}
              multiple
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-adminprimary"
              accept="image/*"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
