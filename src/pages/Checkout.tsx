import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import AddressSelector from "@/components/AddressSelector";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  IndianRupee,
  CreditCard,
  Smartphone,
  Banknote,
  Building2,
  Truck,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

const formSchema = z.object({
  paymentMethod: z.enum([
    "upi",
    "netbanking",
    "card",
    "cod",
    "voucher"
  ]),
});

const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { items, getCartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState<number>();
  
  const cartTotal = getCartTotal();
  const shippingFee = cartTotal >= 500 ? 0 : 60;
  const totalAmount = cartTotal + shippingFee;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: "upi",
    },
  });

  useEffect(() => {
    if (items.length === 0) {
      navigate("/cart");
    }
  }, [items.length, navigate]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!selectedAddressId) {
      toast.error("Please select a delivery address");
      return;
    }

    setIsProcessing(true);
    
    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    if (values.paymentMethod === "cod") {
      const deliveryTime = Math.floor(Math.random() * (20 - 10 + 1) + 10);
      toast.success(
        `Order placed successfully! Delivery expected in ${deliveryTime} minutes.`
      );
    } else {
      toast.success("Order placed successfully!");
    }
    
    clearCart();
    navigate("/profile?tab=orders");
    setIsProcessing(false);
  };

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Delivery Address</CardTitle>
              </CardHeader>
              <CardContent>
                <AddressSelector
                  onSelect={(address) => setSelectedAddressId(address.id)}
                  selectedAddressId={selectedAddressId}
                  showActions={false}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="space-y-3"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="upi" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              <div className="flex items-center">
                                <Smartphone className="h-4 w-4 mr-2" />
                                UPI Payment
                              </div>
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="netbanking" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              <div className="flex items-center">
                                <Building2 className="h-4 w-4 mr-2" />
                                Net Banking
                              </div>
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="card" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              <div className="flex items-center">
                                <CreditCard className="h-4 w-4 mr-2" />
                                Credit/Debit Card
                              </div>
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="voucher" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              <div className="flex items-center">
                                <IndianRupee className="h-4 w-4 mr-2" />
                                Voucher
                              </div>
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="cod" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              <div className="flex items-center">
                                <Banknote className="h-4 w-4 mr-2" />
                                Cash on Delivery
                              </div>
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Button
              type="submit"
              className="w-full bg-kisan-green hover:bg-kisan-lightGreen"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Place Order"}
            </Button>
          </form>
        </Form>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Items ({items.length})</span>
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
                <span>Total Amount</span>
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
