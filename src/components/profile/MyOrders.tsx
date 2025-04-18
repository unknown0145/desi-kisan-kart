
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ExternalLink, AlertTriangle } from "lucide-react";

// Mock orders data (in a real app, this would come from an API)
const mockOrders = [
  {
    id: "ORD001",
    date: "2025-04-18",
    total: 750,
    items: [
      { name: "Fresh Organic Tomatoes", quantity: 2, price: 40 },
      { name: "Premium Basmati Rice", quantity: 1, price: 120 }
    ],
    status: "Delivered",
    deliveryTime: "Delivered on Apr 18, 2025",
  },
  {
    id: "ORD002",
    date: "2025-04-18",
    total: 580,
    items: [
      { name: "Organic Alphonso Mangoes", quantity: 1, price: 350 },
      { name: "Fresh Sweet Limes", quantity: 2, price: 60 }
    ],
    status: "In Transit",
    deliveryTime: "Expected by Apr 19, 2025",
  }
];

const OrderDetails = ({ order }) => {
  const [complaint, setComplaint] = useState("");

  const handleSubmitComplaint = () => {
    if (!complaint.trim()) {
      toast.error("Please describe your issue");
      return;
    }
    // In a real app, this would be sent to an API
    toast.success("Complaint submitted successfully");
    setComplaint("");
  };

  return (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>Order #{order.id}</DialogTitle>
        <DialogDescription>
          Placed on {new Date(order.date).toLocaleDateString()}
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <div>
          <h4 className="font-semibold mb-2">Items</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {order.items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>₹{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Delivery Status</h4>
          <p className="text-gray-600">{order.deliveryTime}</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Have an issue with this order?</h4>
          <Textarea
            placeholder="Describe your issue here..."
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            className="mb-4"
          />
          <Button 
            onClick={handleSubmitComplaint}
            className="bg-kisan-red hover:bg-red-600"
          >
            <AlertTriangle className="mr-2 h-4 w-4" />
            Submit Complaint
          </Button>
        </div>
      </div>
    </DialogContent>
  );
};

const MyOrders = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
              <TableCell>₹{order.total}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </DialogTrigger>
                  <OrderDetails order={order} />
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyOrders;
