
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, ArrowRight, IndianRupee, Truck, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import { toast } from "sonner";

const Cart = () => {
  const navigate = useNavigate();
  const { items, clearCart, getCartTotal } = useCart();
  const cartTotal = getCartTotal();
  const shippingFee = cartTotal >= 500 ? 0 : 60;
  const totalAmount = cartTotal + shippingFee;

  const handleCheckout = () => {
    // In a real app, this would navigate to checkout or payment page
    toast.success("Order placed successfully!");
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="container-custom py-12">
        <div className="max-w-md mx-auto text-center">
          <ShoppingBag className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-6">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Button asChild>
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
        {/* Cart Items */}
        <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
          <div className="p-6 bg-gray-50 border-b">
            <h2 className="text-xl font-semibold">
              Cart Items ({items.length})
            </h2>
          </div>
          
          <div className="divide-y">
            {items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                quantity={item.quantity}
                unit={item.unit}
                farmerName={item.farmerName}
              />
            ))}
          </div>
          
          <div className="p-6 bg-gray-50 border-t">
            <Button 
              variant="outline"
              onClick={() => clearCart()}
              className="w-full sm:w-auto"
            >
              Clear Cart
            </Button>
          </div>
        </div>
        
        {/* Order Summary */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold flex items-center">
                  <IndianRupee className="h-3.5 w-3.5 mr-0.5" />
                  {cartTotal.toFixed(2)}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                {shippingFee === 0 ? (
                  <span className="text-kisan-green font-medium">Free</span>
                ) : (
                  <span className="font-semibold flex items-center">
                    <IndianRupee className="h-3.5 w-3.5 mr-0.5" />
                    {shippingFee.toFixed(2)}
                  </span>
                )}
              </div>
              
              <Separator />
              
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span className="flex items-center text-kisan-green">
                  <IndianRupee className="h-4 w-4 mr-0.5" />
                  {totalAmount.toFixed(2)}
                </span>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-md text-sm space-y-2">
                <div className="flex items-start gap-2">
                  <Truck className="h-4 w-4 text-kisan-green mt-0.5 shrink-0" />
                  <span>Free shipping on orders above ₹500</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="h-4 w-4 text-kisan-green mt-0.5 shrink-0" />
                  <span>Secure checkout process</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                size="lg" 
                className="w-full bg-kisan-green hover:bg-kisan-lightGreen"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <div className="mt-4">
            <Link 
              to="/products" 
              className="text-kisan-green hover:text-kisan-lightGreen flex items-center justify-center"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
