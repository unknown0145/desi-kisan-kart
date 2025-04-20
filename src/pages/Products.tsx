
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, User } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/context/CartContext";
import { allProducts } from "@/data/products";

// Mock data for farmers
const farmers = [
  {
    id: "f1",
    name: "Ramesh Kumar",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1000",
    specialties: ["Organic Vegetables"],
    rating: 4.8
  },
  {
    id: "f2",
    name: "Suresh Patel",
    image: "https://images.unsplash.com/photo-1594008671689-851108a4fe28?q=80&w=1000",
    specialties: ["Premium Rice", "Organic Grains"],
    rating: 4.6
  },
  {
    id: "f3",
    name: "Anita Desai",
    image: "https://images.unsplash.com/photo-1622032493735-965eb4d4bfa7?q=80&w=1000",
    specialties: ["Alphonso Mangoes", "Tropical Fruits"],
    rating: 4.9
  },
  {
    id: "f4",
    name: "Lakshmi Devi",
    image: "https://images.unsplash.com/photo-1621507387091-cbdd25abcf55?q=80&w=1000",
    specialties: ["Organic Dairy"],
    rating: 4.7
  }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [activeTab, setActiveTab] = useState("categories");
  const location = useLocation();

  // Extract category from URL if provided
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    if (categoryParam) {
      setCategory(categoryParam.toLowerCase());
    }
  }, [location]);

  // Filter products based on search, category, and sort
  useEffect(() => {
    let result = [...allProducts];
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (category && category !== "all") {
      result = result.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Sort products
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // "featured" - default order
        break;
    }
    
    setFilteredProducts(result);
  }, [searchTerm, category, sortBy]);

  // Get products by farmer
  const getProductsByFarmer = (farmerId: string) => {
    return allProducts.filter(product => product.farmerId === farmerId);
  };

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">Browse Products</h1>
      
      <Tabs defaultValue="categories" value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="categories">Shop by Category</TabsTrigger>
          <TabsTrigger value="farmers">Shop by Farmer</TabsTrigger>
        </TabsList>
        
        <TabsContent value="categories">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
            {/* Filters Sidebar */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Filter Products</h2>
                  
                  {/* Search */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Search
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  {/* Category Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="vegetables">Vegetables</SelectItem>
                        <SelectItem value="fruits">Fruits</SelectItem>
                        <SelectItem value="grains">Grains</SelectItem>
                        <SelectItem value="dairy">Dairy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Sort By */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sort By
                    </label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue placeholder="Featured" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="name-asc">Name: A to Z</SelectItem>
                        <SelectItem value="name-desc">Name: Z to A</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => {
                      setSearchTerm("");
                      setCategory("all");
                      setSortBy("featured");
                    }}
                    className="w-full"
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Products Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} products
                </p>
                
                {/* Mobile filters button */}
                <Button variant="outline" size="sm" className="lg:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-500">
                    Try changing your search or filter criteria
                  </p>
                </div>
              )}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="farmers">
          <div className="space-y-12">
            {farmers.map(farmer => (
              <div key={farmer.id} className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                      <img 
                        src={farmer.image} 
                        alt={farmer.name} 
                        className="h-full w-full object-cover" 
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{farmer.name}</h2>
                      <div className="flex flex-wrap mt-1">
                        {farmer.specialties.map((specialty, index) => (
                          <span 
                            key={index} 
                            className="text-sm bg-green-100 text-kisan-green px-2 py-0.5 rounded mr-2 mb-1"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Link to={`/farmer/${farmer.id}`}>
                    <Button>
                      <User className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {getProductsByFarmer(farmer.id).slice(0, 4).map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                
                {getProductsByFarmer(farmer.id).length > 4 && (
                  <div className="mt-4 text-center">
                    <Link to={`/farmer/${farmer.id}`}>
                      <Button variant="outline">
                        View All Products from {farmer.name}
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Products;
