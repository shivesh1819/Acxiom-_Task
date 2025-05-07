
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { useAuth } from "@/contexts/AuthContext";
import { BookOpen, ClipboardCheck, BarChart3, Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">User Dashboard</h1>
            <p className="text-gray-600">
              Welcome back, {user?.name}! You have access to transactions and reports.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <ClipboardCheck className="h-5 w-5 mr-2 text-green-500" />
                Transactions
              </CardTitle>
              <CardDescription>Issue and return books</CardDescription>
            </CardHeader>
            <CardContent>
              <Link 
                to="/user/transactions" 
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
              <CardDescription>Access available reports</CardDescription>
            </CardHeader>
            <CardContent>
              <Link 
                to="/user/reports" 
                className="text-amber-600 hover:text-amber-800 text-sm font-medium"
              >
                View Reports →
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Your Current Books</h2>
        <div className="bg-white rounded-md shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book Title</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">To Kill a Mockingbird</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 1, 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 15, 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Overdue
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1984</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 5, 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 19, 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Membership Status</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Member ID</p>
                  <p className="text-lg font-semibold">MEM12345</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Expiration Date</p>
                  <p className="text-lg font-semibold">December 31, 2023</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-1" />
                    <p className="text-lg font-semibold text-green-600">Active</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
