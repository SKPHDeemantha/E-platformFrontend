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


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes path="/*">
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/signup" element={<Signinpage/>}/>
    <Route path="/admin/*" element={<AdminHomepage/>}/>
    <Route path="/*" element={<HomePage/>}/>
    </Routes>


    </BrowserRouter>
    </>
  )
}

export default App
