import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();
        axios
            .post("http://localhost:3000/api/users/login", {
                email,
                password,
            })
            .then((res) => {
                if (res.data.user == null) {
                    toast.error(res.data.message);
                    return;
                }
                toast.success(res.data.message);
                localStorage.setItem("token", res.data.token);
                if (res.data.user.type === "admin") {
                    navigate("/admin/dashboard");
                } else {
                    navigate("/");
                }
            })
            .catch((err) => {
                toast.error("An error occurred. Please try again.");
            });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300">
            <div className="bg-white shadow-2xl rounded-lg p-8 w-96">
           
                <div className="flex justify-center mb-6">
                    <img
                        src="/company logo.jpg"
                        alt="Company Logo"
                        className="w-24 h-24 object-contain rounded-full border-4 border-mycolor"
                    />
                </div>
                
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 font-serif">
                    Welcome
                </h1>
         
                <form onSubmit={login}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-pink-700 mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mycolor focus:border-transparent"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium  text-pink-700 mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mycolor focus:border-transparent"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-mycolor focus:ring-offset-2 transition"
                    >
                        Login
                    </button>
                </form>
         
                <p className="text-center text-sm text-gray-600 mt-4">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-pink-500 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
