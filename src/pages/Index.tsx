
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Star, Shield, Clock, Calendar, User, CheckCircle, Sparkles, Heart, Award } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const features = [
    {
      step: "01",
      title: "Search & Browse",
      description: "Find salons and services near you with our easy search feature",
      icon: <Search className="w-8 h-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
    },
    {
      step: "02", 
      title: "Choose & Book",
      description: "Select your preferred salon, service, and time slot",
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop"
    },
    {
      step: "03",
      title: "Enjoy & Pay",
      description: "Get beautiful services and pay securely through our platform",
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Trusted Salons",
      description: "All partner salons are verified and certified for quality service",
      image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=300&h=200&fit=crop"
    },
    {
      icon: <User className="w-12 h-12 text-blue-600" />,
      title: "Certified Professionals",
      description: "Experienced and skilled beauty professionals at your service",
      image: "https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=300&h=200&fit=crop"
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-600" />,
      title: "Secure Payments",
      description: "Safe and secure payment gateway with multiple payment options",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Amazing experience! Found the perfect salon near my office. The booking process was so smooth.",
      service: "Hair Styling",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Anita Desai",
      rating: 5,
      text: "Love how easy it is to compare different salons and their services. Great platform!",
      service: "Spa Treatment",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Meera Patel",
      rating: 5,
      text: "Professional service and transparent pricing. Yasla has made beauty appointments hassle-free.",
      service: "Facial Treatment",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-20 left-10 opacity-20">
          <Sparkles className="w-16 h-16 text-blue-600" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Heart className="w-20 h-20 text-pink-500" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop" 
                  alt="Beautiful salon interior"
                  className="rounded-2xl shadow-2xl w-full max-w-md"
                />
                <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Book Beauty Services
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Near You</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover and book appointments with trusted salons and beauty professionals in your area. Quality service, guaranteed satisfaction.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for salons, services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-3 text-lg shadow-lg border-0"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/explore">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg shadow-lg">
                  <Search className="w-5 h-5 mr-2" />
                  Explore Salons
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg shadow-lg">
                  <User className="w-5 h-5 mr-2" />
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 rounded-full p-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Yasla Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting beautiful has never been easier. Follow these simple steps to book your next beauty appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                      {feature.step}
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 text-center relative">
                  <div className="mt-4 mb-6 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 rounded-full p-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Yasla?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing you with the best beauty service experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 rounded-full p-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thousands of happy customers trust Yasla for their beauty needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="flex mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 opacity-20">
          <Award className="w-24 h-24 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <Sparkles className="w-20 h-20 text-white" />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto text-white">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 rounded-full p-4">
                <User className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6">Own a Salon? Join Yasla Today!</h2>
            <p className="text-xl mb-8 opacity-90">
              Grow your business by connecting with thousands of customers looking for quality beauty services.
            </p>
            <Link to="/salon-registration">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg shadow-lg">
                <Award className="w-5 h-5 mr-2" />
                Register Your Salon
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
        <div className="absolute top-10 right-10 opacity-10">
          <Search className="w-32 h-32 text-white" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gray-800 rounded-full p-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6">Download Our App</h2>
            <p className="text-xl mb-8 text-gray-300">
              Get the Yasla mobile app for the best booking experience on the go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gray-800 hover:bg-gray-700 px-8 py-3 shadow-lg">
                Download for iOS
              </Button>
              <Button className="bg-gray-800 hover:bg-gray-700 px-8 py-3 shadow-lg">
                Download for Android
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
