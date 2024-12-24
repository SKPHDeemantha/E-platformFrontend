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
        axios.post("http://localhost:3000/api/users/login", {
            email: email,
            password: password,
        }).then((res) => {
            if (res.data.user == null) {
                toast.error(res.data.message);
                return;
            }
            toast.success(res.data.message);
            localStorage.setItem("token", res.data.token);
            if (res.data.user.type === "admin") {
                navigate("/admin/*");
            } else {
                navigate("/");

            }
        });
    }                                            

    return (
        <div className="min-h-screen flex  items-center justify-center bg-gray-100">
{/* 
             max-w-sm w-full */}
            <div className="bg-white shadow-lg rounded-lg p-8 w-96 h-[500px] flex flex-col ">

            <div className="w-32 h-32 items-center justify-center">
                <img src="/company logo.jpg"
                alt="company logo"
                className="w-full h-full object-contain rounded-3xl "/>
             </div>
 
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6"></h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        onClick={login}
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600 mt-4">
                    Don’t have an account?
                    <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    );
}
