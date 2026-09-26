import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">

          <h2>🌸 SheCare</h2>

          <p>
            Women's Health Awareness &
            Education Platform
          </p>

        </div>


        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/topics">Health Topics</a>
          <a href="/resources">Resources</a>

        </div>


        <div className="footer-info">

          <h3>Health Awareness</h3>

          <p>
            Learn about women's health,
            understand your body and make
            informed health decisions.
          </p>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 SheCare. All Rights Reserved.
        </p>

        <p>
          For educational purposes only.
        </p>

      </div>

    </footer>
  );
}

export default Footer;