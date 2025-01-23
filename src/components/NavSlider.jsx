import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export default function NavSlider(props) {
  const closeSlider = props.closeSlider;
  return (
    <div className="fixed w-full h-screen bg-[#00000080] z-[10] border-[3px] border-red-900 lg:hidden">
      <div className="bg-white flex flex-col  w-[400px] h-screen">
      <div className="bg-white w-full h-[100px] relative flex justify-center items-center">
        <img
          src="/logo.png"
          className="cursor-pointer h-full rounded-full absolute left-[10px]"
        />
        <IoMdClose
          onClick={closeSlider}
          className="text-3xl absolute cursor-pointer text-accent right-[10px] lg:hidden"
        />
        </div>
        <Link
          to="/"
          className="text-accent font-bold text-xl hover:border-b border-b-accent"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="text-accent font-bold text-xl hover:border-b border-b-accent"
        >
          Products
        </Link>
        <Link
          to="/about"
          className="text-accent font-bold text-xl hover:border-b border-b-accent"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="text-accent font-bold text-xl hover:border-b border-b-accent"
        >
          Contact Us
        </Link>

        <Link
          to="/cart"
          className="text-accent font-bold text-xl hover:border-b border-b-accent"
        >
          Cart
        </Link>
      </div>
    </div>
  );
}