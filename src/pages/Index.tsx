
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Star, Shield, Clock, Calendar, User, CheckCircle } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const features = [
    {
      step: "01",
      title: "Search & Browse",
      description: "Find salons and services near you with our easy search feature",
      icon: <Search className="w-8 h-8 text-blue-600" />
    },
    {
      step: "02", 
      title: "Choose & Book",
      description: "Select your preferred salon, service, and time slot",
      icon: <Calendar className="w-8 h-8 text-blue-600" />
    },
    {
      step: "03",
      title: "Enjoy & Pay",
      description: "Get beautiful services and pay securely through our platform",
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Trusted Salons",
      description: "All partner salons are verified and certified for quality service"
    },
    {
      icon: <User className="w-12 h-12 text-blue-600" />,
      title: "Certified Professionals",
      description: "Experienced and skilled beauty professionals at your service"
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-600" />,
      title: "Secure Payments",
      description: "Safe and secure payment gateway with multiple payment options"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Amazing experience! Found the perfect salon near my office. The booking process was so smooth.",
      service: "Hair Styling"
    },
    {
      name: "Anita Desai",
      rating: 5,
      text: "Love how easy it is to compare different salons and their services. Great platform!",
      service: "Spa Treatment"
    },
    {
      name: "Meera Patel",
      rating: 5,
      text: "Professional service and transparent pricing. Yasla has made beauty appointments hassle-free.",
      service: "Facial Treatment"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
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
                  className="pl-10 py-3 text-lg"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/explore">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                  Explore Salons
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Yasla Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting beautiful has never been easier. Follow these simple steps to book your next beauty appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {feature.step}
                    </div>
                  </div>
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Yasla?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing you with the best beauty service experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thousands of happy customers trust Yasla for their beauty needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Own a Salon? Join Yasla Today!</h2>
            <p className="text-xl mb-8 opacity-90">
              Grow your business by connecting with thousands of customers looking for quality beauty services.
            </p>
            <Link to="/salon-registration">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Register Your Salon
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Download Our App</h2>
            <p className="text-xl mb-8 text-gray-300">
              Get the Yasla mobile app for the best booking experience on the go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gray-800 hover:bg-gray-700 px-8 py-3">
                Download for iOS
              </Button>
              <Button className="bg-gray-800 hover:bg-gray-700 px-8 py-3">
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
