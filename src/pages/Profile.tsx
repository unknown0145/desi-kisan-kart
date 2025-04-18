
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import MyOrders from "@/components/profile/MyOrders";
import SavedAddresses from "@/components/profile/SavedAddresses";
import MyCoupons from "@/components/profile/MyCoupons";
import { UserRound, MapPin, Ticket } from "lucide-react";

const Profile = () => {
  const { user, userType } = useAuth();

  // Redirect non-customers to home
  if (!user || userType !== "customer") {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      
      <div className="bg-white rounded-lg shadow">
        <Card className="p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <UserRound className="w-8 h-8 text-gray-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
            <TabsTrigger 
              value="orders"
              className="data-[state=active]:border-b-2 data-[state=active]:border-kisan-green rounded-none px-6 py-3"
            >
              My Orders
            </TabsTrigger>
            <TabsTrigger 
              value="addresses"
              className="data-[state=active]:border-b-2 data-[state=active]:border-kisan-green rounded-none px-6 py-3"
            >
              Saved Addresses
            </TabsTrigger>
            <TabsTrigger 
              value="coupons"
              className="data-[state=active]:border-b-2 data-[state=active]:border-kisan-green rounded-none px-6 py-3"
            >
              My Coupons
            </TabsTrigger>
          </TabsList>
          
          <div className="p-6">
            <TabsContent value="orders">
              <MyOrders />
            </TabsContent>
            
            <TabsContent value="addresses">
              <SavedAddresses />
            </TabsContent>
            
            <TabsContent value="coupons">
              <MyCoupons />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
