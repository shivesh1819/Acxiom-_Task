
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddMembership from "./pages/admin/AddMembership";
import UpdateMembership from "./pages/admin/UpdateMembership";

// User Pages
import UserDashboard from "./pages/user/UserDashboard";

// Vendor Pages
import VendorDashboard from "./pages/vendor/VendorDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            
            {/* Admin Routes */}
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/maintenance/add-membership" 
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AddMembership />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/maintenance/update-membership" 
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <UpdateMembership />
                </ProtectedRoute>
              } 
            />
            
            {/* User Routes */}
            <Route 
              path="/user/dashboard" 
              element={
                <ProtectedRoute allowedRoles={["user"]}>
                  <UserDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Vendor Routes */}
            <Route 
              path="/vendor/dashboard" 
              element={
                <ProtectedRoute allowedRoles={["vendor"]}>
                  <VendorDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
