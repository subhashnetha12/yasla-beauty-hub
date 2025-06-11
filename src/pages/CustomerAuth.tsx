
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Award, Heart, Clock, Sparkles } from "lucide-react";

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
      
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-20">
          <Sparkles className="w-16 h-16 text-blue-600" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <Heart className="w-20 h-20 text-pink-500" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 rounded-full p-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
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
                  <Button variant="outline" className="w-full py-3 text-gray-700 border-gray-300 hover:bg-gray-50 shadow-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">G</span>
                      </div>
                      <span>Continue with Google</span>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="w-full py-3 text-gray-700 border-gray-300 hover:bg-gray-50 shadow-sm">
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
                        className="w-full py-3 shadow-sm"
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
                      className="w-full py-3 shadow-sm"
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
                        className="w-full py-3 shadow-sm"
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
                      className="w-full py-3 shadow-sm"
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
                        className="w-full py-3 shadow-sm"
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
                    className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg shadow-lg"
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
              <div className="mt-8 bg-white rounded-lg p-6 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  Why Join Yasla?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Easy booking and payment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-600">Verified and trusted salons</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-600">Exclusive offers and discounts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-orange-600" />
                    </div>
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
