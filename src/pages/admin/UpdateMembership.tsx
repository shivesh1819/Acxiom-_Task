
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import FlowChartLink from "@/components/FlowChartLink";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Save, Search, UserRound } from "lucide-react";
import { toast } from "sonner";

// Mock member data
const mockMember = {
  id: "M12345",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "(555) 123-4567",
  address: "123 Main St, Anytown, AT 12345",
  membershipType: "1year",
  startDate: "2023-01-15",
  endDate: "2024-01-15",
};

const UpdateMembership = () => {
  const navigate = useNavigate();
  const [membershipNumber, setMembershipNumber] = useState("");
  const [memberFound, setMemberFound] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    membershipType: "6months",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };
  
  const handleRadioChange = (value: string) => {
    setFormData({
      ...formData,
      membershipType: value,
    });
  };
  
  const handleSearch = async () => {
    if (!membershipNumber.trim()) {
      setErrors({
        ...errors,
        membershipNumber: "Membership number is required",
      });
      return;
    }
    
    setIsSearching(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      if (membershipNumber === "M12345") {
        // Member found
        setFormData({
          name: mockMember.name,
          email: mockMember.email,
          phone: mockMember.phone,
          address: mockMember.address,
          membershipType: mockMember.membershipType,
        });
        setMemberFound(true);
        setErrors({});
      } else {
        // Member not found
        toast.error("No member found with this membership number.");
        setMemberFound(false);
      }
    } catch (error) {
      toast.error("Error searching for member. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast.success("Membership updated successfully!");
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error("Failed to update membership. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <FlowChartLink />
      
      <div className="container mx-auto py-8 px-4">
        <div className="mb-6 flex items-center">
          <Button 
            variant="outline"
            onClick={() => navigate("/admin/dashboard")}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-gray-800">Update Membership</h1>
        </div>
        
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Find Membership</CardTitle>
            <CardDescription>
              Enter the membership number to find and update member details.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="flex gap-3">
              <div className="flex-grow">
                <Input
                  placeholder="Enter membership number (try M12345)"
                  value={membershipNumber}
                  onChange={(e) => {
                    setMembershipNumber(e.target.value);
                    if (errors.membershipNumber) {
                      setErrors({
                        ...errors,
                        membershipNumber: "",
                      });
                    }
                  }}
                  className={errors.membershipNumber ? "border-red-500" : ""}
                />
                {errors.membershipNumber && (
                  <p className="text-red-500 text-xs mt-1">{errors.membershipNumber}</p>
                )}
              </div>
              <Button 
                onClick={handleSearch} 
                disabled={isSearching}
                className="bg-library-600 hover:bg-library-700"
              >
                {isSearching ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                ) : (
                  <Search className="h-4 w-4 mr-2" />
                )}
                Search
              </Button>
            </div>
          </CardContent>
          
          {memberFound && (
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4 border-t pt-6">
                <div className="bg-library-50 p-4 rounded-md mb-4 flex items-center">
                  <UserRound className="h-5 w-5 text-library-600 mr-3" />
                  <div>
                    <p className="font-medium text-library-900">Member Found: {mockMember.id}</p>
                    <p className="text-xs text-library-600">
                      Current membership valid until: {mockMember.endDate}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter member's full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Enter complete address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={errors.address ? "border-red-500" : ""}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                  )}
                </div>
                
                <div className="space-y-2 pt-2">
                  <Label>Membership Duration</Label>
                  <RadioGroup 
                    value={formData.membershipType} 
                    onValueChange={handleRadioChange} 
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="6months" id="update-6months" />
                      <Label htmlFor="update-6months">6 Months</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1year" id="update-1year" />
                      <Label htmlFor="update-1year">1 Year</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2years" id="update-2years" />
                      <Label htmlFor="update-2years">2 Years</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/admin/dashboard")}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="bg-library-600 hover:bg-library-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                      <span>Updating...</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Save className="h-4 w-4 mr-2" />
                      <span>Update Membership</span>
                    </div>
                  )}
                </Button>
              </CardFooter>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};

export default UpdateMembership;
