import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdAddIcCall, MdHomeRepairService } from "react-icons/md";
import { RiCompassDiscoverLine } from "react-icons/ri";

// Social Media Links
const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/heshan.deemantha.7",
    icon: <FaFacebookSquare />,
    color: "#0866FF", // Facebook Blue
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: <FaTwitter />,
    color: "#1DA1F2", // Twitter Blue
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: <FaInstagram />,
    color: "#E1306C", // Instagram Pink
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: <FaLinkedin />,
    color: "#0077B5", // LinkedIn Blue
  },
];

export default function Footer() {
  return (
    <footer className="bg-purple-950 text-white w-full py-10">
      <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
          
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
              VelwetGlow
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Empowering businesses with cutting-edge solutions and creative
              innovations. Let's build something amazing together!
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2 items-center md:items-start">
              <Link
                to="/"
                className="text-sm flex items-center gap-2 hover:text-yellow-300 hover:underline"
              >
                <FaHome /> Home
              </Link>
              <Link
                to="/aboutus"
                className="text-sm flex items-center gap-2 hover:text-yellow-300 hover:underline"
              >
                <RiCompassDiscoverLine /> About Us
              </Link>
              <Link
                to="/services"
                className="text-sm flex items-center gap-2 hover:text-yellow-300 hover:underline"
              >
                <MdHomeRepairService /> Services
              </Link>
              <Link
                to="/contactus"
                className="text-sm flex items-center gap-2 hover:text-yellow-300 hover:underline"
              >
                <MdAddIcCall /> Contact
              </Link>
            </div>
          </div>

          {/* Newsletter Subscription Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-200 mb-3">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-3/4 p-2 rounded-lg text-black outline-none"
              />
              <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl">
              {socialLinks.map(({ name, url, icon, color }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                  style={{ transition: "color 0.3s ease-in-out" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Divider and Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-300">
          &copy; 2025 VelwetGlow Company. All rights reserved. <br />
          Designed & Developed by{" "}
          <span className="text-yellow-400 font-semibold">
            Heshan Deemantha
          </span>
        </div>
      </div>
    </footer>
  );
}
