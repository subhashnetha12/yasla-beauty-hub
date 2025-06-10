
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Calendar, CheckCircle, User, FileText, Star } from "lucide-react";

const HowItWorks = () => {
  const customerSteps = [
    {
      step: "1",
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "Browse & Search",
      description: "Use our search feature to find salons near you. Filter by services, ratings, price range, and availability.",
      details: ["Search by location or service type", "View salon profiles and portfolios", "Check real-time availability", "Compare prices and reviews"]
    },
    {
      step: "2", 
      icon: <Calendar className="w-12 h-12 text-green-600" />,
      title: "Choose & Book",
      description: "Select your preferred salon, service, and time slot. Customize your appointment based on your needs.",
      details: ["Pick your desired service", "Choose appointment date and time", "Select your preferred stylist", "Add special requests or notes"]
    },
    {
      step: "3",
      icon: <CheckCircle className="w-12 h-12 text-purple-600" />,
      title: "Enjoy & Pay",
      description: "Get your beauty treatment and pay securely through our platform. Rate your experience to help others.",
      details: ["Receive appointment confirmation", "Get service from certified professionals", "Pay securely through the app", "Rate and review your experience"]
    }
  ];

  const vendorSteps = [
    {
      step: "1",
      icon: <User className="w-12 h-12 text-blue-600" />,
      title: "Register Your Salon",
      description: "Create your salon profile with photos, services, and pricing. Complete our verification process.",
      details: ["Submit salon registration form", "Upload business documents", "Add photos of your salon", "Set up service menu and pricing"]
    },
    {
      step: "2",
      icon: <FileText className="w-12 h-12 text-green-600" />,
      title: "List Your Services",
      description: "Add detailed descriptions of your services, set your availability, and manage your calendar.",
      details: ["Create detailed service descriptions", "Set availability and working hours", "Manage appointment calendar", "Upload portfolio images"]
    },
    {
      step: "3",
      icon: <Star className="w-12 h-12 text-purple-600" />,
      title: "Start Earning",
      description: "Receive bookings from customers, provide excellent service, and grow your business with us.",
      details: ["Receive instant booking notifications", "Manage appointments through dashboard", "Get paid directly to your account", "Build your reputation with reviews"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">How Yasla Works</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're looking for beauty services or want to grow your salon business, 
              Yasla makes it simple and straightforward for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* For Customers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">For Customers</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Book your perfect beauty appointment in just a few simple steps
              </p>
            </div>

            <div className="space-y-16">
              {customerSteps.map((step, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  <div className="flex-1">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                            {step.step}
                          </div>
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-gray-600 mb-6">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                      <div className="text-center">
                        {step.icon}
                        <p className="text-gray-600 mt-4">Step {step.step} Illustration</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/explore">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                  Start Exploring Salons
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Vendors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">For Salon Owners</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join our platform and start connecting with new customers today
              </p>
            </div>

            <div className="space-y-16">
              {vendorSteps.map((step, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  <div className="flex-1">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                            {step.step}
                          </div>
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-gray-600 mb-6">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                      <div className="text-center">
                        {step.icon}
                        <p className="text-gray-600 mt-4">Step {step.step} Illustration</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/salon-registration">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg">
                  Register Your Salon
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Choose Yasla?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">For Customers</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Verified and trusted salons</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Transparent pricing with no hidden fees</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Easy booking and payment process</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">24/7 customer support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">For Salon Owners</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Reach thousands of new customers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Easy appointment management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Secure and fast payments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">Business analytics and insights</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
