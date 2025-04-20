
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, IndianRupee, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/context/CartContext";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [showQuantity, setShowQuantity] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      navigate("/login");
      return;
    }
    addToCart(product, quantity);
    setShowQuantity(true);
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantity(prev => prev + 1);
    addToCart(product, 1);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
      addToCart(product, -1);
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {product.name}
            </h3>
            <div className="flex items-center text-kisan-orange font-semibold">
              <IndianRupee className="h-4 w-4 mr-0.5" />
              <span>{product.price}</span>
              <span className="text-sm text-gray-500 ml-1">/ {product.unit}</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-2 truncate">
            {product.description}
          </p>
          <p className="text-xs text-gray-400">
            Farmer: {product.farmerName}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          {!showQuantity ? (
            <Button
              onClick={handleAddToCart}
              className="w-full bg-kisan-green hover:bg-kisan-lightGreen transition-colors"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          ) : (
            <div className="flex items-center justify-between w-full">
              <Button
                variant="outline"
                size="icon"
                onClick={handleDecrement}
                className="h-8 w-8"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-medium">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={handleIncrement}
                className="h-8 w-8"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProductCard;

