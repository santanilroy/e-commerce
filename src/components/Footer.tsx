import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold mb-2">ShopShpere.</h3>
            <p className="text-sm text-gray-400">
              Modern, sustainable fashion for everyone. Shop the trend, wear the
              future.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook">
                <FaSquareFacebook className="h-5 w-5 hover:text-blue-500" />
              </a>
              <a href="#" aria-label="Instagram">
                <IoLogoInstagram className="h-5 w-5 hover:text-pink-500" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaXTwitter className="h-5 w-5 hover:text-blue-400" />
              </a>
              <a href="" arir-label="Github">
                <FiGithub className="h-5 w-5 hover:text-purple-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ShopShpere. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
