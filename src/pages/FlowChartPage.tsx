
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const FlowChartPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <Button 
        variant="outline" 
        onClick={() => navigate(-1)}
        className="mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Go Back
      </Button>
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-library-800">Library Management System</h1>
        <h2 className="text-xl text-library-600">Flow Chart</h2>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img 
          src="/lovable-uploads/d086de4b-cbff-422a-89f6-70a06eaee47c.png"
          alt="Library Management System Flow Chart" 
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default FlowChartPage;
