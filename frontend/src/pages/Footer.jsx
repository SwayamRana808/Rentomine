import React from 'react'

const Footer = () => {
    return (
      <footer style={{ backgroundColor: "black", color: "white", padding: "20px", textAlign: "center" }}>
        <nav>
          <ul style={{ listStyle: "none", padding: "0", display: "flex", justifyContent: "center", gap: "20px" }}>
            <li>
              <a href="/about-us" style={{ color: "white", textDecoration: "none" }}>About Us</a>
            </li>
            <li>
              <a href="/contact-us" style={{ color: "white", textDecoration: "none" }}>Contact Us</a>
            </li>
            <li>
              <a href="/privacy-policy" style={{ color: "white", textDecoration: "none" }}>Privacy Policy</a>
            </li>
            <li>
              <a href="/terms&conditions" style={{ color: "white", textDecoration: "none" }}>Terms & Conditions</a>
            </li>
            <li>
              <a href="/refund" style={{ color: "white", textDecoration: "none" }}>Cancellation/Refund Policies</a>
            </li>
          </ul>
        </nav>
        <p style={{ marginTop: "10px" }}>&copy; {new Date().getFullYear()} Rentomine. All rights reserved.</p>
      </footer>
    );
  };
  

export default Footer