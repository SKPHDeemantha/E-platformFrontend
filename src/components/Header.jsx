import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-zinc-400 w-full h-[100px] relative flex justify-center items-center">
      <img
        src="/company logo.jpg"
        className="cursor-pointer h-full rounded-full absolute left-[10px]"
      />
      <div className="h-full flex items-center w-[500px] justify-between">
        <Link
          to="/"
          className="text-primary font-bold text-xl hover:border-b border-b-primary"
        >
          Home
        </Link>
        <Link
          to="/product"
          className="text-primary font-bold text-xl hover:border-b border-b-primary"
        >
          Products
        </Link>
        <Link
          to="/about"
          className="text-primary font-bold text-xl hover:border-b border-b-primary"
        >
          About Us
        </Link>
        <Link
          to="/contactus"
          className="text-primary font-bold text-xl hover:border-b border-b-primary"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}