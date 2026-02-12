import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container" id="contact">
      <span className="long-dashed-border"></span>
      <div className="footer-contact-container">
        <div className="footer-contact">Contact</div>
        <p className="footer-text">
          Reach out on{" "}
          <a
            href="https://www.linkedin.com/in/le-huy-9189b8117/"
            className="footer-contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          or via email at{" "}
          <a
            href="mailto:legiahuy74@gmail.com"
            className="footer-contact-link "
            target="_blank"
            rel="noopener noreferrer"
          >
            legiahuy74@gmail.com
          </a>{" "}
        </p>
      </div>
      <span className="long-dashed-border"></span>
      <div>COPYRIGHT © 2026 Huy Le.</div>
    </footer>
  );
}
