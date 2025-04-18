
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Truck, IndianRupee, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/context/CartContext";

// Mock data for featured products
const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Fresh Organic Tomatoes",
    price: 40,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=500",
    description: "Juicy, ripe tomatoes grown without pesticides",
    category: "vegetables",
    unit: "kg",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
  {
    id: "2",
    name: "Premium Basmati Rice",
    price: 120,
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&q=80&w=500",
    description: "Aromatic long-grain basmati rice",
    category: "grains",
    unit: "kg",
    farmerId: "f2",
    farmerName: "Suresh Patel"
  },
  {
    id: "3",
    name: "Organic Alphonso Mangoes",
    price: 350,
    image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80&w=500",
    description: "Sweet and flavorful Alphonso mangoes",
    category: "fruits",
    unit: "dozen",
    farmerId: "f3",
    farmerName: "Anita Desai"
  },
  {
    id: "4",
    name: "Fresh Green Spinach",
    price: 30,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=500",
    description: "Nutritious leafy green vegetable",
    category: "vegetables",
    unit: "bunch",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
];

// Mock data for categories
const categories = [
  { name: "Vegetables", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5d4b7?auto=format&fit=crop&q=80&w=500" },
  { name: "Fruits", image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=500" },
  { name: "Grains", image: "https://images.unsplash.com/photo-1574323347407-f5e1c0b24770?auto=format&fit=crop&q=80&w=500" },
  { name: "Dairy", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=500" },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-yellow-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Fresh Farm Produce, <br /> Directly To Your Home
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Buy directly from farmers across India. No middlemen, better prices, 
                fresher produce.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-kisan-green hover:bg-kisan-lightGreen"
                  asChild
                >
                  <Link to="/products">Browse Products</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-kisan-orange text-kisan-orange hover:bg-kisan-orange hover:text-white"
                  asChild
                >
                  <Link to="/register?type=farmer">Join as Farmer</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=500"
                alt="Fresh farm produce"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-kisan-green font-bold">100% Authentic</p>
                <p className="text-sm text-gray-600">Direct from farmers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Desi Kisan Kart?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-kisan-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Produce</h3>
              <p className="text-gray-600">
                Directly from farms to your doorstep ensuring maximum freshness.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <IndianRupee className="h-8 w-8 text-kisan-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Better Prices</h3>
              <p className="text-gray-600">
                No middlemen means fair prices for both farmers and customers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-kisan-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Delivery</h3>
              <p className="text-gray-600">
                Fast and reliable delivery to your doorstep within 24-48 hours.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support Farmers</h3>
              <p className="text-gray-600">
                Directly support Indian farmers and their livelihoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Shop by Category</h2>
            <Link to="/products" className="text-kisan-green hover:text-kisan-lightGreen flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/products?category=${category.name.toLowerCase()}`}
                className="relative group overflow-hidden rounded-lg shadow-md"
              >
                <div className="aspect-square">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white text-xl font-bold">{category.name}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/products" className="text-kisan-green hover:text-kisan-lightGreen flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Farmer CTA Section */}
      <section className="py-16 bg-gradient-to-r from-kisan-green to-kisan-lightGreen text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Are You a Farmer?</h2>
              <p className="text-lg mb-6">
                Join our platform to sell your produce directly to customers. 
                Get better prices and grow your business.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-kisan-green hover:bg-gray-100"
                asChild
              >
                <Link to="/register?type=farmer">Register as Farmer</Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=500"
                alt="Indian farmer in field"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
