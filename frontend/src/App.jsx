import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardUser from "./pages/DashboardUser";
import DashboardOwner from "./pages/DashboardOwner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/user" element={<DashboardUser />} />
        <Route path="/owner" element={<DashboardOwner />} />
      </Routes>
    </Router>
  );
}

export default App;
