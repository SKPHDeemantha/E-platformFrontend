import { Link } from "react-router-dom";

export default function ProductNotFound() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-blue-800 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Product Not Found</h2>
                <p className="text-gray-600 mb-6">
                    Sorry, the product you are looking for does not exist or may have been removed.
                </p>
                <div className="flex gap-4">
                    <Link
                        to="/"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                        Go to Homepage
                    </Link>
                    <Link
                        to="/products"
                        className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 transition"
                    >
                        View All Products
                    </Link>
                </div>
            </div>
        </div>
    );
}
