
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, MapPin, Pencil, Trash2 } from "lucide-react";

// Mock addresses data (in a real app, this would come from an API)
const addresses = [
  {
    id: 1,
    type: "Home",
    address: "123 Green Park Colony",
    area: "Sector 15",
    city: "Gurugram",
    state: "Haryana",
    pincode: "122001",
    default: true
  },
  {
    id: 2,
    type: "Office",
    address: "456 Cyber City",
    area: "DLF Phase 3",
    city: "Gurugram",
    state: "Haryana",
    pincode: "122002",
    default: false
  }
];

const SavedAddresses = () => {
  return (
    <div className="space-y-6">
      <Button className="bg-kisan-green hover:bg-kisan-lightGreen">
        <Plus className="mr-2 h-4 w-4" />
        Add New Address
      </Button>

      <div className="grid gap-4">
        {addresses.map((address) => (
          <Card key={address.id} className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-kisan-green mt-1" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{address.type}</h3>
                    {address.default && (
                      <span className="text-xs bg-green-100 text-kisan-green px-2 py-0.5 rounded">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">{address.address}</p>
                  <p className="text-gray-600">{address.area}</p>
                  <p className="text-gray-600">
                    {address.city}, {address.state} - {address.pincode}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SavedAddresses;
