
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8 mt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">देसी किसान कार्ट</h3>
            <p className="text-gray-600 mb-4">
              Connecting Indian farmers directly to customers, eliminating middlemen and ensuring fair prices for all.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-kisan-green transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-kisan-green transition duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-kisan-green transition duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-kisan-green transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-kisan-green transition duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-600 hover:text-kisan-green transition duration-300">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-kisan-green transition duration-300">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Farmer Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Farmers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/register?type=farmer" className="text-gray-600 hover:text-kisan-green transition duration-300">
                  Join as Farmer
                </Link>
              </li>
              <li>
                <Link to="/farmer-dashboard" className="text-gray-600 hover:text-kisan-green transition duration-300">
                  Farmer Dashboard
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-kisan-green transition duration-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-600 hover:text-kisan-green transition duration-300">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-kisan-green mt-0.5" />
                <span className="text-gray-600">123 Farmer's Lane, New Delhi, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-kisan-green" />
                <span className="text-gray-600">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-kisan-green" />
                <span className="text-gray-600">info@desikisankart.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-center text-gray-600">
            &copy; {new Date().getFullYear()} देसी किसान कार्ट. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
