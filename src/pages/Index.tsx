
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-library-50 to-library-100">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <BookOpen className="h-16 w-16 text-library-700" />
        </div>
        <h1 className="text-4xl font-bold text-library-900 mb-2">Library Management System</h1>
        <p className="text-lg text-library-700">Efficiently manage your library resources</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl w-full px-4">
        <Button 
          className="h-14 text-lg bg-library-600 hover:bg-library-700"
          onClick={() => navigate("/login")}
        >
          User Login
        </Button>
        <Button 
          className="h-14 text-lg bg-library-700 hover:bg-library-800"
          onClick={() => navigate("/login")}
        >
          Admin Login
        </Button>
        <Button 
          className="h-14 text-lg bg-library-800 hover:bg-library-900"
          onClick={() => navigate("/login")}
        >
          Vendor Login
        </Button>
      </div>
      
      <footer className="mt-16 text-center text-sm text-library-500">
        <p>© 2023 Library Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
