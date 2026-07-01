import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "./layouts/layoutdash";
import ProtectedRoute from "./components/Protected";

// Public Pages
import Home from "./pages/Home";
import Login from "./pages/Login";


// Protected Pages
import Dashboard from "./pages/Dashboard";
import UploadPCB from "./pages/Upload";
import Analysis from "./pages/Analysis";
import Components from "./pages/components";
import Reports from "./pages/reports";
import Settings from "./pages/Setting";
import Profile from "./pages/Profile";
import Signup from './pages/Signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
    <Route path="/" element={<Home />} />

<Route path="/login" element={<Login />} />

<Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<UploadPCB />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/components" element={<Components />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Unknown Route */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;