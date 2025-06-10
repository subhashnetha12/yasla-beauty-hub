
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Calendar, TrendingUp, Shield, Clock } from "lucide-react";

const SalonRegistration = () => {
  const benefits = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Reach New Customers",
      description: "Connect with thousands of customers actively looking for beauty services in your area."
    },
    {
      icon: <Calendar className="w-12 h-12 text-green-600" />,
      title: "Easy Booking Management",
      description: "Streamline your appointment scheduling with our intuitive booking management system."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
      title: "Grow Your Business",
      description: "Increase your revenue and expand your customer base with our marketing tools and analytics."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Secure Payments",
      description: "Get paid safely and on time with our secure payment processing system."
    },
    {
      icon: <Star className="w-12 h-12 text-yellow-500" />,
      title: "Build Your Reputation",
      description: "Collect genuine reviews from customers to build trust and attract more bookings."
    },
    {
      icon: <Clock className="w-12 h-12 text-red-500" />,
      title: "24/7 Support",
      description: "Get dedicated partner support to help you maximize your success on our platform."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Customers" },
    { number: "500+", label: "Partner Salons" },
    { number: "50,000+", label: "Appointments Booked" },
    { number: "98%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Grow Your Salon Business with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Yasla</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful salon owners who are growing their business and reaching new customers through our platform.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
              Register Your Salon Now
            </Button>
            <p className="text-gray-500 mt-4">Free to join • Quick setup • Start earning immediately</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner with Yasla?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We provide everything you need to grow your salon business and succeed in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
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
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Getting Started is Easy</h2>
              <p className="text-xl text-gray-600">Join our platform in just a few simple steps</p>
            </div>

            <div className="space-y-12">
              <div className="flex items-center space-x-8">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Registration</h3>
                  <p className="text-gray-600">Fill out our simple registration form with your salon details, services, and business information.</p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Verification Process</h3>
                  <p className="text-gray-600">Our team will verify your documents and salon credentials to ensure quality standards.</p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Receiving Bookings</h3>
                  <p className="text-gray-600">Once approved, your salon will be live on our platform and you can start receiving customer bookings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Requirements</h2>
              <p className="text-lg text-gray-600">Make sure you have these documents ready for a smooth registration process</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Documents</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Business registration certificate</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">GST registration (if applicable)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Trade license or establishment permit</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Bank account details</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Professional certification of staff</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Insurance coverage details</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">High-quality photos of salon</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">Service menu with pricing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of successful salon owners who are growing their business with Yasla. 
              Start your journey today!
            </p>
            <div className="space-y-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Start Registration Process
              </Button>
              <p className="text-blue-100">
                Have questions? Contact our partner support team at{" "}
                <a href="mailto:partners@yasla.com" className="underline">partners@yasla.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalonRegistration;
