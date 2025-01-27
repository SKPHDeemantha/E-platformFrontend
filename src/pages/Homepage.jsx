import { Link, Route, Routes } from 'react-router-dom';
import { ImSearch } from "react-icons/im";
import { GiShoppingCart } from "react-icons/gi";
import Header from '../components/Header';
import ProductOverView from './Home/ProductOverview';
import Productpage from './Home/Productpage';
import Cart from './Home/Cart';
import { CarouselDefault } from '../components/Slideshow';
import { Slider } from '@material-tailwind/react';

export default function HomePage() {
  return (
    <div className=" w-full h-screen">
     <Header/>
     <div className='w-full h-[calc(100vh-100px)] flex items-center justify-center'>
      <Routes path="/*" >
    <Route path='/*' element={<h1>Home page</h1>}></Route>
    <Route path='/login' element={<loginpage/>}></Route>
    <Route path='/productInfo/:id' element={<ProductOverView/>}></Route>
    <Route path='/products' element={<Productpage/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>

    </Routes>
    
    {/* <CarouselDefault className='w-10 h-10 bg-slate-400' /> */}
    </div>
     
    </div>
  );
}
