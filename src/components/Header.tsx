
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, ChevronDown, LogOut, Home, Package, IndianRupee } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const { user, logout, userType } = useAuth();
  const { getItemCount } = useCart();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const cartItemCount = getItemCount();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-scale">
            <span className="text-2xl font-bold text-kisan-green">
              देसी<span className="text-kisan-orange">किसान</span>कार्ट
            </span>
          </Link>

          {/* Navigation */}
          {!isMobile ? (
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-kisan-green transition duration-300 hover-scale">
                Home
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-kisan-green transition duration-300 hover-scale">
                Products
              </Link>
              {userType === "farmer" && (
                <Link to="/farmer-dashboard" className="text-gray-700 hover:text-kisan-green transition duration-300 hover-scale">
                  Dashboard
                </Link>
              )}
              {userType === "customer" && (
                <Link to="/profile" className="text-gray-700 hover:text-kisan-green transition duration-300 hover-scale">
                  My Profile
                </Link>
              )}
            </nav>
          ) : null}

          {/* Right section: Cart & Auth */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/cart" className="relative hover-scale">
                  <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-kisan-green transition duration-300" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-kisan-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full hover-scale">
                      <User className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <div className="flex items-center justify-start p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium">{user.name}</p>
                        <p className="w-[200px] truncate text-sm text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <DropdownMenuItem asChild>
                      <Link to={userType === "farmer" ? "/farmer-dashboard" : "/profile"} className="cursor-pointer">
                        {userType === "farmer" ? "Dashboard" : "My Profile"}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => {
                        logout();
                        navigate("/");
                      }}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/login")}
                  className="hidden sm:inline-flex hover-scale"
                >
                  Login
                </Button>
                <Button
                  onClick={() => navigate("/register")}
                  className="hidden sm:inline-flex hover-scale"
                >
                  Register
                </Button>
              </>
            )}
            
            {isMobile && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="hover-scale">
                    <Menu className="h-6 w-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/">
                      <Home className="h-4 w-4 mr-2" />
                      Home
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/products">
                      <Package className="h-4 w-4 mr-2" />
                      Products
                    </Link>
                  </DropdownMenuItem>
                  {!user ? (
                    <>
                      <DropdownMenuItem onClick={() => navigate("/login")}>
                        Login
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate("/register")}>
                        Register
                      </DropdownMenuItem>
                    </>
                  ) : userType === "farmer" ? (
                    <DropdownMenuItem asChild>
                      <Link to="/farmer-dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                  ) : null}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
