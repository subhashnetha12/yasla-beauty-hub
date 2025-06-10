
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Yasla</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-200 ${
                isActive("/") ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors duration-200 ${
                isActive("/about") ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
              }`}
            >
              About
            </Link>
            <Link
              to="/how-it-works"
              className={`transition-colors duration-200 ${
                isActive("/how-it-works") ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
              }`}
            >
              How It Works
            </Link>
            <Link
              to="/explore"
              className={`transition-colors duration-200 ${
                isActive("/explore") ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Explore Salons
            </Link>
            <Link
              to="/contact"
              className={`transition-colors duration-200 ${
                isActive("/contact") ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/salon-registration">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                List Your Salon
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={toggleMenu}
                className={`py-2 transition-colors duration-200 ${
                  isActive("/") ? "text-blue-600 font-medium" : "text-gray-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={toggleMenu}
                className={`py-2 transition-colors duration-200 ${
                  isActive("/about") ? "text-blue-600 font-medium" : "text-gray-600"
                }`}
              >
                About
              </Link>
              <Link
                to="/how-it-works"
                onClick={toggleMenu}
                className={`py-2 transition-colors duration-200 ${
                  isActive("/how-it-works") ? "text-blue-600 font-medium" : "text-gray-600"
                }`}
              >
                How It Works
              </Link>
              <Link
                to="/explore"
                onClick={toggleMenu}
                className={`py-2 transition-colors duration-200 ${
                  isActive("/explore") ? "text-blue-600 font-medium" : "text-gray-600"
                }`}
              >
                Explore Salons
              </Link>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className={`py-2 transition-colors duration-200 ${
                  isActive("/contact") ? "text-blue-600 font-medium" : "text-gray-600"
                }`}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/salon-registration" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600">
                    List Your Salon
                  </Button>
                </Link>
                <Link to="/auth" onClick={toggleMenu}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Sign In
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
