// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  // デモアラート
  const handleDemoAlert = (e) => {
    e.preventDefault();
    alert("デモページの為、リンクは存在しません。");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ロゴやサイト名 */}
        <div className="footer-logo">
          <span className="footer-logo-text">ロコナビ</span>
        </div>

        {/* ナビリンク */}
        <div className="footer-nav">
          <a href="/about" className="footer-link" onClick={handleDemoAlert}>
            会社情報
          </a>
          <a href="/contact" className="footer-link" onClick={handleDemoAlert}>
            お問い合わせ
          </a>
          <a href="/terms" className="footer-link" onClick={handleDemoAlert}>
            利用規約
          </a>
          <a href="/privacy" className="footer-link" onClick={handleDemoAlert}>
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