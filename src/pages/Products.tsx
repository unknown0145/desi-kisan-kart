
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import { Search, Filter } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/context/CartContext";

// Mock data for products
const allProducts: Product[] = [
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
  {
    id: "5",
    name: "Desi Dahi (Yogurt)",
    price: 60,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=500",
    description: "Creamy, homemade style yogurt",
    category: "dairy",
    unit: "500g",
    farmerId: "f4",
    farmerName: "Lakshmi Devi"
  },
  {
    id: "6",
    name: "Fresh Farm Eggs",
    price: 90,
    image: "https://images.unsplash.com/photo-1569288063643-5d5567bb4783?auto=format&fit=crop&q=80&w=500",
    description: "Free-range eggs from healthy hens",
    category: "dairy",
    unit: "dozen",
    farmerId: "f4",
    farmerName: "Lakshmi Devi"
  },
  {
    id: "7",
    name: "Organic Wheat Flour",
    price: 65,
    image: "https://images.unsplash.com/photo-1599180856482-60bde9cf9d42?auto=format&fit=crop&q=80&w=500",
    description: "Stone-ground whole wheat flour",
    category: "grains",
    unit: "kg",
    farmerId: "f2",
    farmerName: "Suresh Patel"
  },
  {
    id: "8",
    name: "Fresh Green Chillies",
    price: 20,
    image: "https://images.unsplash.com/photo-1573590937232-5ae570d2ad13?auto=format&fit=crop&q=80&w=500",
    description: "Spicy green chillies",
    category: "vegetables",
    unit: "100g",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
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

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">Browse Products</h1>
      
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
    </div>
  );
};

export default Products;
