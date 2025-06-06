// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ロゴやサイト名 */}
        <div className="footer-logo">
          <span className="footer-logo-text">ロコナビ</span>
        </div>

        {/* ナビリンク */}
        <div className="footer-nav">
          <a href="/about" className="footer-link">
            会社情報
          </a>
          <a href="/contact" className="footer-link">
            お問い合わせ
          </a>
          <a href="/terms" className="footer-link">
            利用規約
          </a>
          <a href="/privacy" className="footer-link">
            プライバシーポリシー
          </a>
        </div>

        {/* コピーライト */}
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} ロコナビ. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;