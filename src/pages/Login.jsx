import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import BackToHome from "../components/BackToHome";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setMessage("");

    if (!email || !password) {
      setMessage("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Login failed.");
        return;
      }

      setMessage("Login successful!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 700);

    } catch (error) {
      console.error(error);

      setMessage(
        "Backend is not running. Please start the SheCare server."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        {/* Logo */}
        <img
          src="/shecare-logo.png"
          alt="SheCare Logo"
          className="login-logo"
        />

        {/* Heading */}
        <h1>
          Welcome Back <span>🌸</span>
        </h1>

        <p className="login-subtitle">
          Login to continue your SheCare journey
        </p>

        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="login-form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="login-form-group">

            <div className="login-password-label">
              <label>Password</label>

              <span>Minimum 8 characters</span>
            </div>

            <div className="login-password-wrapper">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>
          </div>

          {/* Message */}
          {message && (
            <p className="login-message">
              {message}
            </p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="login-submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {/* Register */}
        <p className="login-register">
          Don't have an account?{" "}
          <Link to="/register">
            Create Account
          </Link>

        </p>
        
        <Link to="/"className="login-home">
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Login;