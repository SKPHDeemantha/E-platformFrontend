import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import ProductCard from './components/ProductCard'
// import Testing from './components/testing'
import LoginPage from './pages/loginpage'
import HomePage from './pages/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHomepage from './pages/AdminHomepage'
import Signinpage from './pages/SigninPage'
import Errorpage from './pages/Errorpage'
import Contactus from './pages/Home/contactus'
import { Toaster } from 'react-hot-toast'
import AddproductForm from './pages/Admin/AdminproductForm'
import FileUploardTest from './pages/Test'
import Productpage from './pages/Home/Productpage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Toaster position="top-right"/>
    <Routes path="/*">
    <Route path="/" element={<HomePage/>}/>
    <Route path="/product" element={<Productpage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/signup" element={<Signinpage/>}/>
    <Route path="/admin/*" element={<AdminHomepage/>}/>
    <Route path="/admin/products/addProduct" element={<AddproductForm/>}/>
    <Route path="/error" element={<Errorpage/>}/>
    <Route path="/contactus" element={<Contactus/>}/>
    <Route path="/*" element={<HomePage/>}/>
    <Route path="/test" element={<FileUploardTest/>}/>
    </Routes>


    </BrowserRouter>
    </>
  )
}

export default App
