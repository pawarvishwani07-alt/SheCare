import API_URL from "../config";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed.");
        return;
      }

      setMessage(data.message);

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

    } catch (error) {
      setError(
        "Cannot connect to the SheCare server. Please make sure the backend is running."
      );
    }
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <div className="register-logo">
          <img src="/shecare-logo.png" alt="SheCare Logo" />
        </div>

        <div className="register-heading">
          <h1>Create Account 🌸</h1>

          <p>
            Join SheCare for better health awareness
          </p>
        </div>

        <form onSubmit={handleRegister}>

          <div className="register-field">
            <label htmlFor="name">
              Full Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>


          <div className="register-field">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>


          <div className="register-field">

            <div className="password-label-row">
              <label htmlFor="password">
                Password
              </label>

              <span className="password-hint">
                Minimum 8 characters
              </span>
            </div>

            <div className="password-input-wrapper">

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength="8"
                required
              />

              <button
                type="button"
                className="show-password-btn"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>
          </div>


          <div className="register-field">

            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <div className="password-input-wrapper">

              <input
                id="confirmPassword"
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                minLength="8"
                required
              />

              <button
                type="button"
                className="show-password-btn"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>

            </div>
          </div>


          {error && (
            <div className="register-error">
              {error}
            </div>
          )}

          {message && (
            <div className="register-success">
              {message}
            </div>
          )}


          <button
            type="submit"
            className="register-btn"
          >
            Create SheCare Account
          </button>

        </form>


        <p className="login-text">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

        <Link
          to="/"
          className="register-home"
        >
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Register;