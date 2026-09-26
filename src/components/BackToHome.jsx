import { Link } from "react-router-dom";
import "./BackToHome.css";

function BackToHome() {
  return (
    <div className="back-home-container">
      <Link to="/" className="back-home-btn">
        ← Back to Home
      </Link>
    </div>
  );
}

export default BackToHome;