
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Package, FileText, Book, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const VendorDashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Vendor Dashboard</h1>
            <p className="text-gray-600">
              Welcome back, {user?.name}! Manage your vendor activities here.
            </p>
          </div>
          
          <Button className="bg-library-600 hover:bg-library-700">
            <Package className="h-4 w-4 mr-2" />
            Add New Item
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="border-l-4 border-l-library-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Book className="h-5 w-5 mr-2 text-library-500" />
                Your Items
              </CardTitle>
              <CardDescription>Manage your book inventory</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">24</div>
              <Link 
                to="/vendor/items" 
                className="text-library-600 hover:text-library-800 text-sm font-medium"
              >
                Manage Items →
              </Link>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                Transactions
              </CardTitle>
              <CardDescription>View your transaction history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">12</div>
              <Link 
                to="/vendor/transactions" 
                className="text-green-600 hover:text-green-800 text-sm font-medium"
              >
                View Transactions →
              </Link>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-amber-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <FileText className="h-5 w-5 mr-2 text-amber-500" />
                Request Item
              </CardTitle>
              <CardDescription>Submit new book requests</CardDescription>
            </CardHeader>
            <CardContent>
              <Link 
                to="/vendor/request" 
                className="text-amber-600 hover:text-amber-800 text-sm font-medium"
              >
                Submit Request →
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <div className="bg-white rounded-md shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">TRX-12345</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 5, 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 books</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$125.00</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">TRX-12344</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 1, 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 books</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$78.50</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
