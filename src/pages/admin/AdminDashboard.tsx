
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { useAuth } from "@/contexts/AuthContext";
import { BookOpen, ClipboardCheck, BarChart3, FileText, Users, Building, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto py-8 px-4">
        <div className="mb-4">
          <Button 
            variant="outline"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-600">
              Welcome back, {user?.name}! You have full access to the system.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="border-l-4 border-l-library-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Users className="h-5 w-5 mr-2 text-library-500" />
                Maintenance
              </CardTitle>
              <CardDescription>Manage members, vendors & books</CardDescription>
            </CardHeader>
            <CardContent>
              <Link 
                to="/admin/maintenance" 
                className="text-library-600 hover:text-library-800 text-sm font-medium"
              >
                Manage Maintenance →
              </Link>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <ClipboardCheck className="h-5 w-5 mr-2 text-green-500" />
                Transactions
              </CardTitle>
              <CardDescription>Manage book checkouts and returns</CardDescription>
            </CardHeader>
            <CardContent>
              <Link 
                to="/admin/transactions" 
                className="text-green-600 hover:text-green-800 text-sm font-medium"
              >
                View Transactions →
              </Link>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-amber-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-amber-500" />
                Reports
              </CardTitle>
              <CardDescription>Access system reports and analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <Link 
                to="/admin/reports" 
                className="text-amber-600 hover:text-amber-800 text-sm font-medium"
              >
                View Reports →
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="p-4 bg-white rounded-md shadow mt-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">128</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Books</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">543</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Active Checkouts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="maintenance" className="p-4 bg-white rounded-md shadow mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/admin/maintenance/add-membership" className="group">
                <Card className="transition-all duration-200 group-hover:shadow-md group-hover:border-library-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center">
                      <Users className="h-4 w-4 mr-2 text-library-500" />
                      Add Membership
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-gray-500">
                    Add new member to the library system
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/admin/maintenance/update-membership" className="group">
                <Card className="transition-all duration-200 group-hover:shadow-md group-hover:border-library-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center">
                      <Users className="h-4 w-4 mr-2 text-library-500" />
                      Update Membership
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-gray-500">
                    Modify existing membership details
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/admin/maintenance/add-books" className="group">
                <Card className="transition-all duration-200 group-hover:shadow-md group-hover:border-library-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-library-500" />
                      Add Books
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-gray-500">
                    Add new books to the library inventory
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/admin/maintenance/manage-vendor" className="group">
                <Card className="transition-all duration-200 group-hover:shadow-md group-hover:border-library-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center">
                      <Building className="h-4 w-4 mr-2 text-library-500" />
                      Manage Vendors
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-gray-500">
                    Add or update book vendors
                  </CardContent>
                </Card>
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="activity" className="p-4 bg-white rounded-md shadow mt-2">
            <div className="space-y-4">
              <div className="border-b pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">New book added: "The Great Gatsby"</h3>
                    <p className="text-sm text-gray-500">Added by Admin User</p>
                  </div>
                  <span className="text-xs text-gray-400">2 hours ago</span>
                </div>
              </div>
              <div className="border-b pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Updated vendor information: "BookWorld Inc."</h3>
                    <p className="text-sm text-gray-500">Updated by Admin User</p>
                  </div>
                  <span className="text-xs text-gray-400">5 hours ago</span>
                </div>
              </div>
              <div className="border-b pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">New membership added: "John Smith"</h3>
                    <p className="text-sm text-gray-500">Added by Admin User</p>
                  </div>
                  <span className="text-xs text-gray-400">Yesterday</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
