
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Eye, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "Customer First",
      description: "We prioritize customer satisfaction and strive to exceed expectations in every interaction."
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Quality Assurance",
      description: "We ensure all our partner salons meet strict quality standards and professional excellence."
    },
    {
      icon: <Eye className="w-12 h-12 text-green-600" />,
      title: "Transparency",
      description: "Clear pricing, honest reviews, and transparent booking process for trust and reliability."
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: "Community",
      description: "Building a community of beauty enthusiasts and professionals who support each other."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Yasla</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing the way people discover and book beauty services by connecting customers 
              with trusted salons and certified professionals in their area.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To make beauty and wellness services accessible, convenient, and trustworthy for everyone. 
                We believe that feeling beautiful should be effortless, and finding the right salon should 
                be as simple as a few taps on your phone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">What Makes Us Different</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Rigorous salon verification process ensuring quality and safety</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Real-time booking system with instant confirmation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Transparent pricing with no hidden charges</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Comprehensive review system for informed decisions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>24/7 customer support for seamless experience</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=400&fit=crop" 
                  alt="Customer using Yasla platform"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Yasla was born from a simple frustration: finding a reliable salon should not be a gamble. 
                Our founders experienced the challenge of discovering quality beauty services in new cities, 
                dealing with last-minute cancellations, and uncertain pricing.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                In 2024, we set out to solve this problem by creating a platform that brings transparency, 
                convenience, and trust to the beauty industry. Starting with just 10 partner salons, 
                we've grown to support hundreds of beauty professionals across multiple cities.
              </p>
              <p className="text-xl leading-relaxed">
                Today, Yasla serves thousands of customers who trust us to connect them with the perfect 
                salon for their needs. We're not just a booking platform – we're building a community 
                where beauty professionals can thrive and customers can feel confident about their choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision & Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We envision a world where everyone has access to quality beauty services, 
                and where salon owners can focus on what they do best – making people feel beautiful.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 mb-12">
              A passionate group of technologists, beauty enthusiasts, and customer experience experts 
              working together to transform the beauty industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">R</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Rahul Sharma</h3>
                  <p className="text-blue-600 mb-2">CEO & Co-Founder</p>
                  <p className="text-gray-600 text-sm">Tech entrepreneur with a passion for connecting communities</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">P</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Priya Agarwal</h3>
                  <p className="text-blue-600 mb-2">CTO & Co-Founder</p>
                  <p className="text-gray-600 text-sm">Technology leader focused on user experience and scalability</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">A</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Ankit Verma</h3>
                  <p className="text-blue-600 mb-2">Head of Operations</p>
                  <p className="text-gray-600 text-sm">Operations expert ensuring smooth platform performance</p>
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

export default About;
