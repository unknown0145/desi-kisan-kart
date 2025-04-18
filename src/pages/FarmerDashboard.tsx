
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PlusCircle, 
  Package, 
  IndianRupee, 
  ShoppingBag, 
  Truck, 
  Edit, 
  Trash, 
  AlertTriangle,
  BarChart3 
} from "lucide-react";
import { toast } from "sonner";
import { Product } from "@/context/CartContext";

// Mock data for farmer products
const initialFarmerProducts: Product[] = [
  {
    id: "1",
    name: "Fresh Organic Tomatoes",
    price: 40,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=500",
    description: "Juicy, ripe tomatoes grown without pesticides",
    category: "vegetables",
    unit: "kg",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
  {
    id: "4",
    name: "Fresh Green Spinach",
    price: 30,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=500",
    description: "Nutritious leafy green vegetable",
    category: "vegetables",
    unit: "bunch",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
  {
    id: "8",
    name: "Fresh Green Chillies",
    price: 20,
    image: "https://images.unsplash.com/photo-1573590937232-5ae570d2ad13?auto=format&fit=crop&q=80&w=500",
    description: "Spicy green chillies",
    category: "vegetables",
    unit: "100g",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
];

// Mock orders
const mockOrders = [
  {
    id: "ord1",
    date: "2025-04-15",
    customer: "Priya Sharma",
    total: 240,
    status: "Delivered",
    items: [
      { id: "1", name: "Fresh Organic Tomatoes", quantity: 3, price: 40 },
      { id: "8", name: "Fresh Green Chillies", quantity: 6, price: 20 },
    ],
  },
  {
    id: "ord2",
    date: "2025-04-16",
    customer: "Vikram Singh",
    total: 180,
    status: "Processing",
    items: [
      { id: "1", name: "Fresh Organic Tomatoes", quantity: 2, price: 40 },
      { id: "4", name: "Fresh Green Spinach", quantity: 2, price: 30 },
      { id: "8", name: "Fresh Green Chillies", quantity: 2, price: 20 },
    ],
  },
  {
    id: "ord3",
    date: "2025-04-17",
    customer: "Deepak Verma",
    total: 120,
    status: "Pending",
    items: [
      { id: "1", name: "Fresh Organic Tomatoes", quantity: 3, price: 40 },
    ],
  },
];

interface AddProductFormData {
  name: string;
  price: string;
  description: string;
  category: string;
  unit: string;
  image: string;
}

const FarmerDashboard = () => {
  const { user, userType } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [farmerProducts, setFarmerProducts] = useState<Product[]>(initialFarmerProducts);
  const [orders, setOrders] = useState(mockOrders);
  const [formData, setFormData] = useState<AddProductFormData>({
    name: "",
    price: "",
    description: "",
    category: "vegetables",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=500",
  });
  const [editProductId, setEditProductId] = useState<string | null>(null);

  // Check if user is a farmer
  useEffect(() => {
    if (!user || userType !== "farmer") {
      navigate("/login?type=farmer");
    }
  }, [user, userType, navigate]);

  const resetForm = () => {
    setFormData({
      name: "",
      price: "",
      description: "",
      category: "vegetables",
      unit: "kg",
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=500",
    });
    setEditProductId(null);
  };

  const handleAddOrUpdateProduct = () => {
    // Form validation
    if (!formData.name || !formData.price || !formData.description) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (editProductId) {
      // Update existing product
      setFarmerProducts(prevProducts =>
        prevProducts.map(product =>
          product.id === editProductId
            ? {
                ...product,
                name: formData.name,
                price: parseFloat(formData.price),
                description: formData.description,
                category: formData.category,
                unit: formData.unit,
                image: formData.image,
              }
            : product
        )
      );
      toast.success("Product updated successfully");
    } else {
      // Add new product
      const newProduct: Product = {
        id: Date.now().toString(),
        name: formData.name,
        price: parseFloat(formData.price),
        description: formData.description,
        category: formData.category,
        unit: formData.unit,
        image: formData.image,
        farmerId: user?.id || "f1",
        farmerName: user?.name || "Farmer",
      };
      
      setFarmerProducts([...farmerProducts, newProduct]);
      toast.success("Product added successfully");
    }
    
    resetForm();
  };

  const handleDeleteProduct = (productId: string) => {
    setFarmerProducts(farmerProducts.filter(product => product.id !== productId));
    toast.success("Product deleted successfully");
  };

  const handleEditProduct = (product: Product) => {
    setFormData({
      name: product.name,
      price: product.price.toString(),
      description: product.description,
      category: product.category,
      unit: product.unit,
      image: product.image,
    });
    setEditProductId(product.id);
    setActiveTab("add-product");
  };

  // Calculate order statistics
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const pendingOrders = orders.filter(order => order.status === "Pending").length;
  const completedOrders = orders.filter(order => order.status === "Delivered").length;

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-2">Farmer Dashboard</h1>
      <p className="text-gray-600 mb-8">Manage your products and track orders</p>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="products">My Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="add-product">
            {editProductId ? "Edit Product" : "Add Product"}
          </TabsTrigger>
        </TabsList>
        
        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <IndianRupee className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold flex items-center">
                  <IndianRupee className="h-5 w-5 mr-1 text-kisan-green" />
                  {totalRevenue.toFixed(2)}
                </div>
                <p className="text-xs text-gray-500">+14% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Products</CardTitle>
                <Package className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{farmerProducts.length}</div>
                <p className="text-xs text-gray-500">Across {new Set(farmerProducts.map(p => p.category)).size} categories</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                <ShoppingBag className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{pendingOrders}</div>
                <p className="text-xs text-gray-500">{completedOrders} orders completed this month</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Orders */}
          <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Order ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Customer</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.slice(0, 3).map((order) => (
                      <tr key={order.id} className="border-b">
                        <td className="py-3 px-4">{order.id}</td>
                        <td className="py-3 px-4">{new Date(order.date).toLocaleDateString()}</td>
                        <td className="py-3 px-4">{order.customer}</td>
                        <td className="py-3 px-4 flex items-center">
                          <IndianRupee className="h-3.5 w-3.5 mr-0.5" />
                          {order.total.toFixed(2)}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Processing"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Products Tab */}
        <TabsContent value="products">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">My Products</h2>
            <Button onClick={() => {
              resetForm();
              setActiveTab("add-product");
            }}>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add New Product
            </Button>
          </div>
          
          {farmerProducts.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center">
                <Package className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Products Added Yet</h3>
                <p className="text-gray-500 mb-4">
                  Add your first product to start selling on Desi Kisan Kart.
                </p>
                <Button onClick={() => setActiveTab("add-product")}>
                  Add Your First Product
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {farmerProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-4 p-4">
                    <div className="w-[120px] h-[120px] rounded overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <div className="flex items-center text-kisan-orange font-semibold mt-1">
                        <IndianRupee className="h-3.5 w-3.5 mr-0.5" />
                        {product.price}
                        <span className="text-xs text-gray-500 ml-1">/ {product.unit}</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="text-xs text-gray-400 mt-2">
                        Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                      </div>
                    </div>
                    
                    <div className="flex md:flex-col gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditProduct(product)}
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <Trash className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
        
        {/* Orders Tab */}
        <TabsContent value="orders">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Orders</h2>
          </div>
          
          {orders.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center">
                <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Orders Yet</h3>
                <p className="text-gray-500">
                  Orders will appear here once customers start purchasing your products.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 border-b">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Order ID</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Customer</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.id} className="border-b">
                          <td className="py-3 px-4">{order.id}</td>
                          <td className="py-3 px-4">{new Date(order.date).toLocaleDateString()}</td>
                          <td className="py-3 px-4">{order.customer}</td>
                          <td className="py-3 px-4 flex items-center">
                            <IndianRupee className="h-3.5 w-3.5 mr-0.5" />
                            {order.total.toFixed(2)}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800"
                                  : order.status === "Processing"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        {/* Add Product Tab */}
        <TabsContent value="add-product">
          <Card>
            <CardHeader>
              <CardTitle>{editProductId ? "Edit Product" : "Add New Product"}</CardTitle>
              <CardDescription>
                {editProductId
                  ? "Update your product details below"
                  : "Fill in the details to add a new product to your inventory"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="product-name">Product Name *</Label>
                    <Input
                      id="product-name"
                      placeholder="e.g. Fresh Organic Tomatoes"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="product-price">Price (₹) *</Label>
                    <Input
                      id="product-price"
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="e.g. 40"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="product-category">Category *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger id="product-category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vegetables">Vegetables</SelectItem>
                        <SelectItem value="fruits">Fruits</SelectItem>
                        <SelectItem value="grains">Grains</SelectItem>
                        <SelectItem value="dairy">Dairy</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="product-unit">Unit *</Label>
                    <Select
                      value={formData.unit}
                      onValueChange={(value) => setFormData({ ...formData, unit: value })}
                    >
                      <SelectTrigger id="product-unit">
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kg">Kilogram (kg)</SelectItem>
                        <SelectItem value="g">Gram (g)</SelectItem>
                        <SelectItem value="dozen">Dozen</SelectItem>
                        <SelectItem value="piece">Piece</SelectItem>
                        <SelectItem value="bunch">Bunch</SelectItem>
                        <SelectItem value="500g">500g Pack</SelectItem>
                        <SelectItem value="250g">250g Pack</SelectItem>
                        <SelectItem value="100g">100g Pack</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="product-description">Description *</Label>
                  <Textarea
                    id="product-description"
                    placeholder="Describe your product..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="product-image">Image URL</Label>
                  <Input
                    id="product-image"
                    placeholder="Enter image URL"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  />
                  <p className="text-xs text-gray-500">
                    Please provide a URL to an image of your product. In a real app, you would upload images.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-3">
                  <Button
                    type="button"
                    onClick={handleAddOrUpdateProduct}
                    className="bg-kisan-green hover:bg-kisan-lightGreen"
                  >
                    {editProductId ? "Update Product" : "Add Product"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      resetForm();
                      if (editProductId) {
                        setActiveTab("products");
                      }
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FarmerDashboard;
