import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({ username: "", email: "", address: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", form);
      alert("Signup successful! Please login.");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.errors?.[0]?.msg || "Signup failed");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="text" name="username" placeholder="Name" value={form.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
