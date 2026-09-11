import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function Private({ children }) {
  const { session, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen bg-abyss-950 flex items-center justify-center">
        <p className="text-mist-500 text-sm">Chargement...</p>
      </div>
    );
  }
  if (!session) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <BrowserRouter basename="/word-consulting-digital">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Private>
                <Dashboard />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
