import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav>
      <span>Logged in as: {role}</span>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;
