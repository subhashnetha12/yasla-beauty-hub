
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, User, Building, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission logic here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Email Us",
      content: "support@yasla.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="w-8 h-8 text-green-600" />,
      title: "Call Us",
      content: "+91 9876-543-210",
      subtitle: "Mon-Fri, 9 AM - 6 PM"
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-600" />,
      title: "Visit Us",
      content: "123 Business District, Delhi",
      subtitle: "Our headquarters"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "Business Hours",
      content: "24/7 Online Support",
      subtitle: "Always here to help"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our services? Need help with booking? 
              We're here to assist you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-gray-900 font-medium mb-1">{info.content}</p>
                    <p className="text-gray-600 text-sm">{info.subtitle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            name="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            name="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          type="text"
                          name="subject"
                          placeholder="What is this regarding?"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          name="message"
                          placeholder="Tell us more about your inquiry..."
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="w-full h-32"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 py-3"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map and Additional Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-0">
                      <div className="bg-gray-200 h-64 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                          <p className="text-gray-600">Interactive Map Coming Soon</p>
                          <p className="text-sm text-gray-500">123 Business District, Delhi</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">How do I book an appointment?</h4>
                        <p className="text-gray-600 text-sm">Simply browse our salon listings, select your preferred service and time, then complete the booking process.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Can I cancel my booking?</h4>
                        <p className="text-gray-600 text-sm">Yes, you can cancel up to 2 hours before your appointment time without any charges.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">How do I become a partner salon?</h4>
                        <p className="text-gray-600 text-sm">Visit our salon registration page and complete the application process. Our team will review and get back to you.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">How Can We Help You?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Support</h3>
                  <p className="text-gray-600 mb-4">Need help with bookings, payments, or account issues?</p>
                  <Button variant="outline" className="border-blue-600 text-blue-600">
                    Get Help
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Partner Support</h3>
                  <p className="text-gray-600 mb-4">Salon owner? Get assistance with your business account.</p>
                  <Button variant="outline" className="border-green-600 text-green-600">
                    Contact Partners Team
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">General Inquiry</h3>
                  <p className="text-gray-600 mb-4">Have questions about our platform or services?</p>
                  <Button variant="outline" className="border-purple-600 text-purple-600">
                    Ask Questions
                  </Button>
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

export default Contact;
