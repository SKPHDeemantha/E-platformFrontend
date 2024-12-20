export default function Signinpage(){
    return(
        <div >
            <div class="min-h-screen flex items-center justify-center bg-slate-300">
                <div className="bg-white shadow-lg rounded-lg p-8 w-[300px]">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Signup Page</h1>
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-800" for="email" >Email</label>
                            <input 
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 "
                            placeholder="Enter your email"/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-800" for="firstname" >First Name</label>
                            <input 
                            type="text"
                            id="firstname"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your first name"/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-800" for="lastname" >Last Name</label>
                            <input 
                            type="text"
                            id="lastname"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your last name"/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-800" for="password" >Password</label>
                            <input 
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-800" for="type" >Type</label>
                            <input 
                            type="text" 
                            id="type" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your Type"/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-800" for="profilepicture" >Profile Picture</label>
                            <input 
                            type="text"
                            id="profilepicture"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your profile picture"/>
                        </div>
                        <button className="w-full bg-sky-500 hover:bg-sky-600 px-4 py-2
                         text-white font-bold focus:ring-2 focus:ring-sky-600">Signup</button>
                    </form>
                    <p className="text-center text-sm text-red-900 mt-4">
                        Already Registered?
                      {/* <a ref="http://localhost:5173/login" className="hover:underline">Login</a> */}
                    </p>
                </div>
            </div>
        </div>
    )
}