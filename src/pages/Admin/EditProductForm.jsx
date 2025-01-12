import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import UploadMeadiaToSupabase from "../../utils/MediaUpload";

export default function EditProductForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    navigate("/admin/products");
    return null; 
  }

  const [ProductId, setProductId] = useState(product.ProductId);
  const [productName, setProductName] = useState(product.productName);
  const [alternativeNames, setAlternativeNames] = useState(product.altNames.join(","));
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState(product.price);
  const [lastPrice, setLastPrice] = useState(product.lastPrice);
  const [stock, setStock] = useState(product.stock);
  const [description, setDescription] = useState(product.description);

  async function handleSubmit() {
    const altNames = alternativeNames.split(",");

    const productData = {
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
      const result = await axios.put(
        `http://localhost:3000/api/products/${ProductId}`,
        productData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      navigate("/admin/products");
      toast.success("Product updated successfully");
    } catch (err) {
      toast.error("Failed to update product");
    }
  }

  async  function handleUpload(){
    UploadMeadiaToSupabase(file).then((url)=>{
      console.log(url)
      toast.success("Image is uploaded successfully.");
    }).catch((err)=>{
       console.log("oops! coudn't upload image",err)
       toast.error("Please try again");
    })
}

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <h1 className="text-4xl font-bold text-white mb-8">Edit Product</h1>

      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <label>Product ID</label>
        <input
          disabled
          type="text"
          id="product-id"
          value={ProductId}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
         <label>Product Name</label>
        <input
          type="text"
          id="product-name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter Product Name"
        />
         <label>Alternative Names</label>
        <input
          type="text"
          id="alternative-names"
          value={alternativeNames}
          onChange={(e) => setAlternativeNames(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter Alternames"
        />
         <label>Images</label>
        <input
          type="File"
          id="image-urls"
          onChange={handleUpload}
          nChange={(e)=>{setImages(e.target.files[0])}}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="upload Images"
        />
         <label>Price</label>
         <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter Price"
        />
         <label>Last Price</label>
         <input
          type="text"
          id="last-price"
          value={lastPrice}
          onChange={(e) => setLastPrice(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter Last price"
        />
         <label>Stock</label>
         <input
          type="text"
          id="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter stock"
        />
         <label>Description</label>
         <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter Description"
        />
      
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Update
        </button>
      </div>
    </div>
  );
}
