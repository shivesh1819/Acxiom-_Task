
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { BookOpen, LogOut } from "lucide-react";

const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-library-800 text-white py-3 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6" />
          <span className="text-xl font-semibold">Library Management System</span>
        </div>
        
        {user && (
          <div className="flex items-center gap-6">
            <div className="text-sm">
              <span className="opacity-75">Logged in as: </span>
              <span className="font-medium capitalize">{user.role} - {user.name}</span>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-transparent border-white hover:bg-white/10"
              onClick={logout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
