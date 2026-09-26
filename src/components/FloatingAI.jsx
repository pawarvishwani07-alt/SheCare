import { useNavigate } from "react-router-dom";
import "./FloatingAI.css";

function FloatingAI() {
  const navigate = useNavigate();

  const openChatbot = () => {
    navigate("/chatbot");
  };

  return (
    <button
      className="floating-ai-button"
      onClick={openChatbot}
      aria-label="Open SheCare AI"
    >
      <img
        src="/shecare-ai-logo.png"
        alt="SheCare AI"
      />
    </button>
  );
}

export default FloatingAI;