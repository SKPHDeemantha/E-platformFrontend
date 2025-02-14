import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

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
    <footer className="bg-purple-950 text-white w-full py-12">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
              VelwetGlow
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Empowering businesses with cutting-edge solutions and creative
              innovations. Let’s build something amazing together!
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">
              Quick Links
            </h3>
            <ul className="text-sm space-y-3">
              {[
                { to: "/", text: "Home" },
                { to: "/aboutus", text: "About Us" },
                { to: "/services", text: "Services" },
                { to: "/contactus", text: "Contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.to}
                    className="hover:text-yellow-300 transition-colors hover:underline"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-200 mb-3">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-lg text-black outline-none"
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

        {/* Divider */}
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


