
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ticket, Copy } from "lucide-react";
import { toast } from "sonner";

// Mock coupons data (in a real app, this would come from an API)
const coupons = [
  {
    id: "WELCOME50",
    discount: "50% OFF",
    maxDiscount: "500",
    minPurchase: "1000",
    validUntil: "2025-05-01",
    description: "Get 50% off on your first order"
  },
  {
    id: "FRESH100",
    discount: "₹100 OFF",
    maxDiscount: "100",
    minPurchase: "500",
    validUntil: "2025-04-30",
    description: "Flat ₹100 off on fresh vegetables"
  }
];

const MyCoupons = () => {
  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Coupon code copied!");
  };

  return (
    <div className="grid gap-4">
      {coupons.map((coupon) => (
        <Card key={coupon.id} className="p-6">
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <Ticket className="h-5 w-5 text-kisan-green mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">{coupon.discount}</h3>
                <p className="text-gray-600 mb-2">{coupon.description}</p>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>Min. Purchase: ₹{coupon.minPurchase}</p>
                  <p>Max. Discount: ₹{coupon.maxDiscount}</p>
                  <p>Valid until: {new Date(coupon.validUntil).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline"
              onClick={() => copyCode(coupon.id)}
              className="flex items-center gap-2"
            >
              <span className="font-mono">{coupon.id}</span>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MyCoupons;
