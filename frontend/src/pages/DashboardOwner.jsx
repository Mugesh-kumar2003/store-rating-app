import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function DashboardOwner() {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [ratings, setRatings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/owner/stores", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStores(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchRatings = async (storeId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get(`/owner/stores/${storeId}/ratings`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRatings(res.data);
      setSelectedStore(storeId);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <h2>Store Owner Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>

      <h3>My Stores</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Store Name</th>
            <th>Address</th>
            <th>Avg Rating</th>
            <th>Total Ratings</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.address}</td>
              <td>{s.overall_rating}</td>
              <td>{s.total_ratings}</td>
              <td>
                <button onClick={() => fetchRatings(s.id)}>View Ratings</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedStore && (
        <div>
          <h3>Ratings for Store #{selectedStore}</h3>
          <table border="1">
            <thead>
              <tr>
                <th>User</th>
                <th>Rating</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {ratings.map((r) => (
                <tr key={r.id}>
                  <td>{r.username}</td>
                  <td>{r.rating}</td>
                  <td>{new Date(r.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default DashboardOwner;
