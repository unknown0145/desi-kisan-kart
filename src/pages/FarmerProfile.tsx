
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, User, MapPin, Phone, Mail, Star, Package } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/context/CartContext";
import { allProducts } from "@/data/products";

// Mock data for farmers
const farmers = [
  {
    id: "f1",
    name: "Ramesh Kumar",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1000",
    description: "Growing organic vegetables for over 15 years. My farm is located in the fertile valleys of Himachal Pradesh.",
    location: "Kullu, Himachal Pradesh",
    phone: "+91 9876543210",
    email: "ramesh@kishanbazaar.com",
    rating: 4.8,
    specialties: ["Organic Vegetables", "Seasonal Fruits"],
    joinedDate: "March 2022"
  },
  {
    id: "f2",
    name: "Suresh Patel",
    image: "https://images.unsplash.com/photo-1594008671689-851108a4fe28?q=80&w=1000",
    description: "Third-generation rice and grain farmer. We focus on traditional farming methods with modern sustainable practices.",
    location: "Anand, Gujarat",
    phone: "+91 9876543211",
    email: "suresh@kishanbazaar.com",
    rating: 4.6,
    specialties: ["Premium Rice", "Organic Grains"],
    joinedDate: "January 2022"
  },
  {
    id: "f3",
    name: "Anita Desai",
    image: "https://images.unsplash.com/photo-1622032493735-965eb4d4bfa7?q=80&w=1000",
    description: "Our family orchard produces the finest Alphonso mangoes and other tropical fruits using eco-friendly methods.",
    location: "Ratnagiri, Maharashtra",
    phone: "+91 9876543212",
    email: "anita@kishanbazaar.com",
    rating: 4.9,
    specialties: ["Alphonso Mangoes", "Tropical Fruits"],
    joinedDate: "February 2022"
  },
  {
    id: "f4",
    name: "Lakshmi Devi",
    image: "https://images.unsplash.com/photo-1621507387091-cbdd25abcf55?q=80&w=1000",
    description: "Our dairy farm has been producing pure, organic milk products for generations with the highest quality standards.",
    location: "Anand, Gujarat",
    phone: "+91 9876543213",
    email: "lakshmi@kishanbazaar.com",
    rating: 4.7,
    specialties: ["Organic Dairy", "Traditional Dairy Products"],
    joinedDate: "April 2022"
  }
];

const FarmerProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [farmer, setFarmer] = useState<any>(null);
  const [farmerProducts, setFarmerProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Get farmer by ID
    const foundFarmer = farmers.find(f => f.id === id);
    if (foundFarmer) {
      setFarmer(foundFarmer);
      
      // Get products by this farmer
      const products = allProducts.filter(p => p.farmerId === id);
      setFarmerProducts(products);
    }
  }, [id]);
  
  if (!farmer) {
    return (
      <div className="container-custom py-12 text-center">
        <p>Loading farmer profile...</p>
      </div>
    );
  }
  
  return (
    <div className="container-custom py-12">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link to="/products" className="text-kisan-green hover:text-kisan-lightGreen inline-flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Products
        </Link>
      </div>
      
      {/* Farmer Profile Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img 
                    src={farmer.image} 
                    alt={farmer.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h1 className="text-2xl font-bold text-center mb-2">{farmer.name}</h1>
                <div className="flex items-center mb-4">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="font-medium">{farmer.rating}</span>
                  <span className="text-gray-500 ml-1">rating</span>
                </div>
                <div className="w-full space-y-3 mt-4">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-kisan-green mt-1 mr-2" />
                    <span>{farmer.location}</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-4 w-4 text-kisan-green mt-1 mr-2" />
                    <span>{farmer.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-4 w-4 text-kisan-green mt-1 mr-2" />
                    <span>{farmer.email}</span>
                  </div>
                  <div className="flex items-start">
                    <User className="h-4 w-4 text-kisan-green mt-1 mr-2" />
                    <span>Joined {farmer.joinedDate}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">About {farmer.name}</h2>
              <p className="text-gray-700 mb-6">{farmer.description}</p>
              
              <h3 className="text-lg font-semibold mb-2">Specialties</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {farmer.specialties.map((specialty: string, index: number) => (
                  <span 
                    key={index} 
                    className="bg-green-100 text-kisan-green px-3 py-1 rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center">
                <Package className="h-5 w-5 text-kisan-green mr-2" />
                <span className="font-medium">{farmerProducts.length} Products Available</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Farmer's Products */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Products by {farmer.name}</h2>
        {farmerProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {farmerProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p>No products available from this farmer at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmerProfile;
