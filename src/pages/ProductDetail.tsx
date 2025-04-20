
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronLeft, 
  ShoppingCart, 
  Minus, 
  Plus, 
  Truck, 
  Check, 
  IndianRupee, 
  User, 
  Star
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/context/CartContext";
import { allProducts } from "@/data/products";
import { toast } from "sonner";

// Mock data for a single product is now moved to data/products.ts

// Related products mapping
const relatedProductIds = {
  "1": ["4", "8"], // Related to tomatoes
  "2": ["7"],      // Related to rice
  "3": [],         // No related to mangoes
  "4": ["1", "8"], // Related to spinach
  "5": ["6"],      // Related to yogurt
  "6": ["5"],      // Related to eggs
  "7": ["2"],      // Related to flour
  "8": ["1", "4"], // Related to chillies
};

// Mock data for farmers
const farmers = [
  {
    id: "f1",
    name: "Ramesh Kumar",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1000",
    rating: 4.8
  },
  {
    id: "f2",
    name: "Suresh Patel",
    image: "https://images.unsplash.com/photo-1594008671689-851108a4fe28?q=80&w=1000",
    rating: 4.6
  },
  {
    id: "f3",
    name: "Anita Desai",
    image: "https://images.unsplash.com/photo-1622032493735-965eb4d4bfa7?q=80&w=1000",
    rating: 4.9
  },
  {
    id: "f4",
    name: "Lakshmi Devi",
    image: "https://images.unsplash.com/photo-1621507387091-cbdd25abcf55?q=80&w=1000",
    rating: 4.7
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [farmerInfo, setFarmerInfo] = useState<any>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // In a real app, fetch product by ID from an API
    const foundProduct = allProducts.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Get related products
      const related = relatedProductIds[id as keyof typeof relatedProductIds] || [];
      const relatedProductsData = allProducts.filter((p) => related.includes(p.id));
      setRelatedProducts(relatedProductsData);
      
      // Get farmer information
      const farmer = farmers.find(f => f.id === foundProduct.farmerId);
      if (farmer) {
        setFarmerInfo(farmer);
      }
    }
    
    // Reset quantity when product changes
    setQuantity(1);
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast.success(`Added ${quantity} ${product.name} to cart`);
    }
  };

  if (!product) {
    return (
      <div className="container-custom py-12 text-center">
        <p>Loading product...</p>
      </div>
    );
  }

  return (
    <div className="container-custom py-12">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          to="/products"
          className="text-kisan-green hover:text-kisan-lightGreen inline-flex items-center"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Products
        </Link>
      </div>
      
      {/* Product Detail Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center text-xl text-kisan-orange font-semibold mb-4">
            <IndianRupee className="h-5 w-5 mr-1" />
            {product.price}
            <span className="text-sm text-gray-500 ml-1">/ {product.unit}</span>
          </div>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          {/* Farmer Info Card */}
          {farmerInfo && (
            <Card className="mb-6">
              <CardContent className="p-4">
                <Link to={`/farmer/${farmerInfo.id}`} className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img 
                      src={farmerInfo.image} 
                      alt={farmerInfo.name} 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  <div>
                    <p className="font-medium">Sold by: {farmerInfo.name}</p>
                    <div className="flex items-center">
                      <Star className="h-3.5 w-3.5 text-yellow-500 mr-1" />
                      <span className="text-sm">{farmerInfo.rating} Rating</span>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                    >
                      <span>View Profile</span>
                    </Button>
                  </div>
                </Link>
              </CardContent>
            </Card>
          )}
          
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <Check className="h-4 w-4 text-kisan-green" />
              <span>Fresh from farm</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Check className="h-4 w-4 text-kisan-green" />
              <span>No pesticides</span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck className="h-4 w-4 text-kisan-green" />
              <span>Free delivery on orders above ₹500</span>
            </div>
          </div>
          
          {/* Quantity Selector */}
          <div className="flex items-center mb-6">
            <span className="mr-4">Quantity:</span>
            <div className="flex items-center border rounded">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="h-10 w-10"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                className="h-10 w-10"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <Button
            size="lg"
            className="w-full bg-kisan-green hover:bg-kisan-lightGreen"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
      
      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <Link to={`/products/${product.id}`}>
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">{product.name}</h3>
                    <div className="flex items-center text-kisan-orange font-semibold mt-1">
                      <IndianRupee className="h-3.5 w-3.5 mr-0.5" />
                      {product.price}
                      <span className="text-xs text-gray-500 ml-1">/ {product.unit}</span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
