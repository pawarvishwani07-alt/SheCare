import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="header-logo">
  <Link to="/">
    <img src="/shecare-logo.png" alt="SheCare Logo" />
  </Link>
</div>

      <nav className="header-nav">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

      </nav>

      <div className="header-buttons">

        <Link to="/login" className="header-login">
          Login
        </Link>

        <Link to="/register" className="header-register">
          Register
        </Link>

      </div>

    </header>
  );
}

export default Header;