import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function DashboardUser() {
  const [stores, setStores] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/stores", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStores(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRating = async (storeId, rating) => {
    try {
      const token = localStorage.getItem("token");
      await api.post(
        `/ratings/${storeId}`,
        { rating },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchStores(); // refresh after rating
    } catch (err) {
      alert("Error submitting rating");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const filteredStores = stores.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>User Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>

      <input
        type="text"
        placeholder="Search by name or address"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table border="1">
        <thead>
          <tr>
            <th>Store Name</th>
            <th>Address</th>
            <th>Overall Rating</th>
            <th>Your Rating</th>
          </tr>
        </thead>
        <tbody>
          {filteredStores.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.address}</td>
              <td>{s.overall_rating || "N/A"}</td>
              <td>
                <select
                  value={s.user_rating || ""}
                  onChange={(e) => handleRating(s.id, e.target.value)}
                >
                  <option value="">--</option>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardUser;
