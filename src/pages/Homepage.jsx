import { Link, Route, Routes } from 'react-router-dom';
import { ImSearch } from "react-icons/im";
import { GiShoppingCart } from "react-icons/gi";
import Header from '../components/Header';
import ProductOverView from './Home/ProductOverview';

export default function HomePage() {
  return (
    <div className=" w-full h-screen">
     <Header/>
     <div className='w-full h-[calc(100vh-100px)]'>
      <Routes path="/*" >
    <Route path='/*' element={<h1>Home page</h1>}></Route>
    <Route path='/login' element={<loginpage/>}></Route>
    <Route path='/productInfo/:id' element={<ProductOverView/>}></Route>
    </Routes>
      
    </div>
    
    </div>
  );
}
