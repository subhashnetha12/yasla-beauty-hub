
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <span className="text-2xl font-bold">Yasla</span>
            </div>
            <p className="text-gray-400">
              Your trusted platform for beauty and salon services. Connecting customers with certified professionals.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/how-it-works" className="block text-gray-400 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link to="/explore" className="block text-gray-400 hover:text-white transition-colors">
                Explore Salons
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* For Business */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Business</h3>
            <div className="space-y-2">
              <Link to="/salon-registration" className="block text-gray-400 hover:text-white transition-colors">
                List Your Salon
              </Link>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Partner Support
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Business Resources
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Analytics Dashboard
              </a>
            </div>
          </div>

          {/* Legal & Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2">
              <Link to="/terms" className="block text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Customer Support
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Yasla. All rights reserved. | Made with ❤️ for beautiful experiences
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
