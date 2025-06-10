
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Star, MapPin, Clock, Filter } from "lucide-react";

const SalonListings = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Hair", "Spa", "Facial", "Nails", "Massage", "Nearby"];

  const salons = [
    {
      id: 1,
      name: "Glamour Studio",
      rating: 4.8,
      reviews: 124,
      location: "Connaught Place, Delhi",
      distance: "1.2 km",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
      services: ["Hair Cut", "Hair Color", "Facial"],
      price: "₹500 onwards",
      time: "30 min",
      discount: "20% OFF",
      isOpen: true
    },
    {
      id: 2,
      name: "Serenity Spa & Salon",
      rating: 4.6,
      reviews: 89,
      location: "Karol Bagh, Delhi",
      distance: "2.1 km",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop",
      services: ["Spa Treatment", "Massage", "Facial"],
      price: "₹800 onwards",
      time: "60 min",
      discount: "",
      isOpen: true
    },
    {
      id: 3,
      name: "Elite Beauty Lounge",
      rating: 4.9,
      reviews: 156,
      location: "Lajpat Nagar, Delhi",
      distance: "3.5 km",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      services: ["Hair Styling", "Makeup", "Bridal Package"],
      price: "₹1200 onwards",
      time: "45 min",
      discount: "15% OFF",
      isOpen: false
    },
    {
      id: 4,
      name: "Trendy Cuts",
      rating: 4.5,
      reviews: 67,
      location: "Janpath, Delhi",
      distance: "0.8 km",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=300&h=200&fit=crop",
      services: ["Hair Cut", "Beard Trim", "Hair Wash"],
      price: "₹300 onwards",
      time: "20 min",
      discount: "",
      isOpen: true
    },
    {
      id: 5,
      name: "Bliss Beauty Center",
      rating: 4.7,
      reviews: 98,
      location: "Saket, Delhi",
      distance: "4.2 km",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop",
      services: ["Facial", "Cleanup", "Threading"],
      price: "₹400 onwards",
      time: "40 min",
      discount: "25% OFF",
      isOpen: true
    },
    {
      id: 6,
      name: "Royal Hair Studio",
      rating: 4.4,
      reviews: 45,
      location: "Khan Market, Delhi",
      distance: "2.8 km",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=200&fit=crop",
      services: ["Hair Color", "Highlights", "Hair Treatment"],
      price: "₹700 onwards",
      time: "90 min",
      discount: "",
      isOpen: true
    }
  ];

  const filteredSalons = salons.filter(salon => {
    const matchesSearch = salon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         salon.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         salon.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = selectedFilter === "All" || 
                         salon.services.some(service => service.toLowerCase().includes(selectedFilter.toLowerCase())) ||
                         (selectedFilter === "Nearby" && parseFloat(salon.distance) < 2);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Search and Filter Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              Discover Amazing Salons Near You
            </h1>
            
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for salons, services, or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 text-lg"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? "default" : "outline"}
                  onClick={() => setSelectedFilter(filter)}
                  className={`${
                    selectedFilter === filter 
                      ? "bg-blue-600 hover:bg-blue-700" 
                      : "border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {filter === "All" && <Filter className="w-4 h-4 mr-2" />}
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                {filteredSalons.length} salons found
              </h2>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Sort by:</span>
                <select className="border border-gray-300 rounded-lg px-3 py-2">
                  <option>Distance</option>
                  <option>Rating</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSalons.map((salon) => (
                <Card key={salon.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={salon.image} 
                      alt={salon.name}
                      className="w-full h-48 object-cover"
                    />
                    {salon.discount && (
                      <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                        {salon.discount}
                      </Badge>
                    )}
                    <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
                      salon.isOpen ? "bg-green-500 text-white" : "bg-gray-500 text-white"
                    }`}>
                      {salon.isOpen ? "Open" : "Closed"}
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{salon.name}</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{salon.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({salon.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{salon.location}</span>
                      <span className="text-sm ml-2">• {salon.distance}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {salon.services.slice(0, 3).map((service, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                      {salon.services.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{salon.services.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium text-gray-900">{salon.price}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {salon.time}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        Book Now
                      </Button>
                      <Button variant="outline" className="px-4">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredSalons.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No salons found</h3>
                <p className="text-gray-600">Try adjusting your search or filters to find more results.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalonListings;
