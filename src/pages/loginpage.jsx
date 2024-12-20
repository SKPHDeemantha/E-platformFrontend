
export default function LoginPage(){
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
                    id="password" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="Enter your password" 
                />
            </div>
            <button 
                type="submit" 
                class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Login
            </button>
        </form>
        <p class="text-center text-sm text-gray-600 mt-4">
            Don’t have an account? 
            <a href="#" class="text-blue-500 hover:underline">Sign up</a>
        </p>
    </div>
</div>

    </div>
    )
}