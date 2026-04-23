import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logo from "../../../imports/cropped-logo.png";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="Acqua Viva Hôtel" className="h-20 w-auto mb-4" />
            <p className="text-sm text-gray-400 leading-relaxed">
              Experience luxury and comfort in the heart of paradise. Your unforgettable stay begins here.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-[#C9A961] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C9A961] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C9A961] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/rooms" className="text-sm hover:text-[#C9A961] transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-[#C9A961] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-[#C9A961] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-[#C9A961] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-[#C9A961] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-[#C9A961] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#C9A961] transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#C9A961] transition-colors">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#C9A961] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm">
                <MapPin size={18} className="text-[#C9A961] flex-shrink-0 mt-0.5" />
                <span>123 Paradise Avenue, Luxury District, City 12345</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={18} className="text-[#C9A961] flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail size={18} className="text-[#C9A961] flex-shrink-0" />
                <span>info@acquavivahotel.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Acqua Viva Hôtel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
