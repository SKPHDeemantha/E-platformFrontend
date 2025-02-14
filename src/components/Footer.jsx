import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const facebook =
  "https://www.facebook.com/heshan.deemantha.7/?viewas=100000686899395";

export default function Footer() {
  return (
    <footer className="bg-purple-950 text-white w-full py-10 ">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-200">
              We are committed to delivering top-notch solutions that make your
              life easier. Follow us for updates and new features!
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-3 ">
              {[
                { to: "/", text: "Home" },
                { to: "/aboutus", text: "About" },
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

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl">
              <a
                href={facebook}
                className="hover:text-[#0864fe] transition-transform transform hover:scale-110"
              >
                <FaFacebookSquare />
              </a>
              <a
                href={facebook}
                className="hover:text-[#1b9ff1] transition-transform transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href={facebook}
                className="hover:text-[#fe009d] transition-transform transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href={facebook}
                className="hover:text-[#0073b2] transition-transform transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="mt-8 text-center text-sm text-gray-300">
          &copy; 2025 VelwetGlow Company. All rights reserved.Design By Heshan
          Deemantha
        </div>
      </div>
    </footer>
  );
}
