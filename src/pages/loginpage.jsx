import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom";

export default function LoginPage(){
      const [email,setEmail] =useState("")
      const [password,setPassword] =useState("")

      function login(){
        axios.post("http:localhost:3000/api/users/login",{
            email :email,
            password : password
        }).then(
            (res)=>{
                if(res.data.user == null){
                    alert(res.data.message)
                    return
                }
                localStorage.setItem("token",res.data.token)
                if(res.data.user.type == "admin"){
                    window.location.href = "/admin"
                }else{
                    window.location.href ="/"
                }
            }
        )
      }

    return(
    <div>
        <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Login Page</h1>
        <form>
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                    type="email" 
                    defaultValue={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    id="email" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
                    focus:border-transparent " 
                    placeholder="Enter your email" 
                />
            </div>
            <div class="mb-6">
                <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input 
                    type="password" 
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    id="password" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="Enter your password" 
                />
            </div>
            <button
                onClick={login} 
                type="submit" 
                class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Login
            </button>
        </form>
        <p class="text-center text-sm text-gray-600 mt-4">
            Don’t have an account? 
            <a href="http://localhost:5173/signup" class="text-blue-500 hover:underline">Sign up</a>
        </p>
    </div>
</div>

    </div>
    )
}