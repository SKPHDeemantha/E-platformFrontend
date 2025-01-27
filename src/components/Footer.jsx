import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-pink-900 text-white w-full py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About Us</h3>
                        <p className="text-sm">
                            We are committed to delivering top-notch solutions that make your life easier. Follow us for updates and new features!
                        </p>
                    </div>
                    
              
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Services</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                   
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link className="hover:text-gray-300 h-10 w-6" fill="currentColor" viewBox="0 0 24 24 " onClick={'https://www.facebook.com/'}>
                            <FaFacebookSquare />
                            </Link>
                    
                            <a href="#" className="hover:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.497v-9.294h-3.124v-3.622h3.124v-2.672c0-3.1 1.891-4.788 4.65-4.788 1.325 0 2.464.099 2.793.143v3.238h-1.918c-1.504 0-1.795.715-1.795 1.763v2.316h3.59l-.467 3.622h-3.123v9.294h6.127c.732 0 1.324-.592 1.324-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184h-15.231c-1.215 0-2.2.985-2.2 2.2v13.231c0 1.215.985 2.2 2.2 2.2h15.231c1.215 0 2.2-.985 2.2-2.2v-13.231c0-1.215-.985-2.2-2.2-2.2zm-9.477 15.09h-2.671v-7.873h2.671v7.873zm-1.336-9.015c-.858 0-1.555-.698-1.555-1.555s.698-1.555 1.555-1.555 1.555.698 1.555 1.555-.698 1.555-1.555 1.555zm10.806 9.015h-2.671v-3.865c0-.921-.016-2.106-1.281-2.106-1.283 0-1.48 1.001-1.48 2.034v3.937h-2.671v-7.873h2.565v1.074h.037c.357-.675 1.228-1.386 2.529-1.386 2.702 0 3.2 1.777 3.2 4.092v4.093z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm">
                    &copy; 2025 Your Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
