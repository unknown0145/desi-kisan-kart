
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
  User 
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/context/CartContext";
import { toast } from "sonner";

// Mock data for a single product
const allProducts: Product[] = [
  {
    id: "1",
    name: "Fresh Organic Tomatoes",
    price: 40,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=500",
    description: "Juicy, ripe tomatoes grown without pesticides. Our tomatoes are grown in natural conditions with organic compost and no chemicals. These vine-ripened tomatoes are harvested at peak ripeness for maximum flavor and nutrition.",
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
    description: "Aromatic long-grain basmati rice from the foothills of the Himalayas. Aged for 12 months to enhance flavor and aroma. Perfect for biryanis, pulaos, and everyday cooking. 100% authentic, premium quality rice.",
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
    description: "Sweet and flavorful Alphonso mangoes, known as the 'King of Mangoes'. Hand-picked from sustainable orchards in Ratnagiri, Maharashtra. These mangoes are naturally ripened without any artificial chemicals. Rich in flavor with a smooth, fiber-less pulp.",
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
    description: "Nutritious leafy green vegetable, locally grown and harvested daily. Our spinach is washed and ready to use, perfect for salads, sabzis, and smoothies. Rich in iron, vitamins, and antioxidants.",
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
    description: "Creamy, homemade style yogurt made from fresh, pasteurized milk. Made using traditional methods with active cultures for a thick, creamy texture. Perfect for raita, smoothies, or enjoying on its own.",
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
    description: "Free-range eggs from healthy hens raised in natural conditions. Our hens are fed quality grains without antibiotics or hormones. The eggs have bright orange yolks and strong shells, indicating high nutritional value.",
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
    description: "Stone-ground whole wheat flour from organically grown wheat. Our atta is ground in traditional stone chakki, preserving nutrients and natural flavor. Perfect for making soft, fluffy rotis and parathas.",
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
    description: "Spicy green chillies that add heat and flavor to any dish. These fresh chillies are hand-picked daily from our farms. Perfect for tempering, making chutneys, or adding to curries for extra spice.",
    category: "vegetables",
    unit: "100g",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
];

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

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
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
          
          <div className="flex items-center mb-6">
            <User className="h-4 w-4 mr-2 text-kisan-green" />
            <span>Farmer: {product.farmerName}</span>
          </div>
          
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
