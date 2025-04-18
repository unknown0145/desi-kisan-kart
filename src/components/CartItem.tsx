
import React from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, IndianRupee } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  unit: string;
  farmerName: string;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  image,
  quantity,
  unit,
  farmerName,
}) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => {
    updateQuantity(id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    } else {
      removeFromCart(id);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 py-4 border-b">
      <div className="w-full md:w-24 h-24 relative rounded overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="font-medium text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">
          Farmer: {farmerName}
        </p>
        <p className="flex items-center text-kisan-orange font-medium mt-1">
          <IndianRupee className="h-3.5 w-3.5" />
          {price} <span className="text-xs text-gray-500 ml-1">/ {unit}</span>
        </p>
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={handleDecrement}
        >
          <Minus className="h-3 w-3" />
        </Button>
        <span className="w-8 text-center">{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={handleIncrement}
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="font-semibold flex items-center">
            <IndianRupee className="h-3.5 w-3.5" />
            {(price * quantity).toFixed(2)}
          </p>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
          onClick={() => removeFromCart(id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
