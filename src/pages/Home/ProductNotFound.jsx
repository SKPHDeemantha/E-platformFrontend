import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ProductNotFound() {
    return (
        <div className="w-full h-fit">
            <Header />
            <div className="flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-gray-200 w-full py-24 px-6 text-center">
                <h1 className="text-7xl font-extrabold text-pink-800 mb-6 drop-shadow-xl">404</h1>
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Product Not Found</h2>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl">
                    Sorry, the product you are looking for does not exist or may have been removed. Please check our latest collections.
                </p>
                <div className="flex gap-6">
                    <Link
                        to="/"
                        className="px-8 py-4 bg-gradient-to-tr from-pink-700  to-white text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105"
                    >
                        Go to Homepage
                    </Link>
                    <Link
                        to="/products"
                        className="px-8 py-4 bg-gradient-to-tl from-pink-700 to-white text-white font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all transform hover:scale-105"
                    >
                        View All Products
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}
