import React from 'react';
import './BottomSection.css';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const BottomSection = () => {
  return (
    <footer className="bottom-section">
      <div className="footer-content">
        {/* Left Side - Contact Information */}
        <div className="footer-column address">
          <h2 className="footer-title">Player Connect</h2>
          <p><span className="footer-icon">📍</span> Bournemouth University, Talbot Campus</p>
          <p><span className="footer-icon">✉️</span> 
            <a href="mailto:info@playerconnect.com" className="footer-email"> info@playerconnect.com</a>
          </p>
          <p><span className="footer-icon">🏆</span> Registered Charity Number: 846397</p>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>

      {/* Bottom Section - Copyright & Links */}
      <div className="footer-bottom">
        <p>© 2025 Player Connect. All Rights Reserved</p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/safeguarding-policy">Safeguarding Policy</a>
          <a href="/recruitment-policy">Safer Recruitment Policy</a>
          <a href="/confidentiality-statement">Confidentiality Statement</a>
          <a href="/fundraising-regulator">Fundraising Regulator</a>
        </div>
      </div>
    </footer>
  );
};

export default BottomSection;

