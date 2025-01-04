import { Link, Routes } from 'react-router-dom';
import { ImSearch } from "react-icons/im";
import { GiShoppingCart } from "react-icons/gi";
import Header from '../components/Header';

export default function HomePage() {
  return (
    <div className=" w-full h-screen">
     <Header/>
    <Routes path="/*" ></Routes>
    </div>
  );
}
