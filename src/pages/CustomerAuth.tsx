
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CustomerAuth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle authentication logic here
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {isSignUp ? "Create Your Account" : "Welcome Back"}
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  {isSignUp 
                    ? "Join Yasla to book amazing beauty services" 
                    : "Sign in to your Yasla account"
                  }
                </p>
              </CardHeader>
              
              <CardContent className="pt-6">
                {/* Social Login Options */}
                <div className="space-y-3 mb-6">
                  <Button variant="outline" className="w-full py-3 text-gray-700 border-gray-300 hover:bg-gray-50">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">G</span>
                      </div>
                      <span>Continue with Google</span>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="w-full py-3 text-gray-700 border-gray-300 hover:bg-gray-50">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">f</span>
                      </div>
                      <span>Continue with Facebook</span>
                    </div>
                  </Button>
                </div>

                <div className="relative mb-6">
                  <Separator />
                  <div className="absolute inset-0 flex justify-center">
                    <span className="bg-white px-4 text-gray-500 text-sm">or</span>
                  </div>
                </div>

                {/* Email/Phone Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {isSignUp && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full py-3"
                        required
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full py-3"
                      required
                    />
                  </div>

                  {isSignUp && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full py-3"
                        required
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full py-3"
                      required
                    />
                  </div>

                  {isSignUp && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password
                      </label>
                      <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full py-3"
                        required
                      />
                    </div>
                  )}

                  {!isSignUp && (
                    <div className="flex justify-between items-center">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm text-gray-600">Remember me</span>
                      </label>
                      <a href="#" className="text-sm text-blue-600 hover:underline">
                        Forgot password?
                      </a>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg"
                  >
                    {isSignUp ? "Create Account" : "Sign In"}
                  </Button>
                </form>

                {isSignUp && (
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    By creating an account, you agree to our{" "}
                    <Link to="/terms" className="text-blue-600 hover:underline">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                )}

                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}
                    <button
                      type="button"
                      onClick={() => setIsSignUp(!isSignUp)}
                      className="text-blue-600 hover:underline ml-1 font-medium"
                    >
                      {isSignUp ? "Sign In" : "Sign Up"}
                    </button>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Benefits for new users */}
            {isSignUp && (
              <div className="mt-8 bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  Why Join Yasla?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600">Easy booking and payment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600">Verified and trusted salons</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600">Exclusive offers and discounts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600">24/7 customer support</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomerAuth;
