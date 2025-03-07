import { useState } from "react";
import "./App.css";
// import ProductCard from './components/ProductCard'
// import Testing from './components/testing'
import LoginPage from "./pages/loginpage";
import HomePage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomepage from "./pages/AdminHomepage";
import Signinpage from "./pages/SigninPage";
import Contactus from "./pages/Home/contactus";
import { Toaster } from "react-hot-toast";
import AddproductForm from "./pages/Admin/AdminproductForm";
import FileUploardTest from "./pages/Test";
import Productpage from "./pages/Home/Productpage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Shipping from "./pages/Home/Shipping";
import ProductNotFound from "./pages/Home/ProductNotFound";
import ProductOverView from "./pages/Home/ProductOverview";
import Orders from "./pages/Home/Orders";
import AboutUs from "./pages/About";
import Cart from "./pages/Home/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right" />
        <GoogleOAuthProvider clientId="421627820068-hegiadvcp1a4arodscmffcr4qjb366a8.apps.googleusercontent.com">
          <Routes path="/*">
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Productpage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Signinpage />} />
            <Route path="/admin/*" element={<AdminHomepage />} />
            <Route
              path="/admin/products/addProduct"
              element={<AddproductForm />}
            />

            <Route path="/contactus" element={<Contactus />} />
            <Route path="/*" element={<HomePage />} />
            <Route path="/test" element={<FileUploardTest />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/error" element={<ProductNotFound />} />
            <Route path="/productInfo/:id" element={<ProductOverView />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
