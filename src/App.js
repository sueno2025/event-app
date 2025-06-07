// src/App.js
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import headerImage from "./images/headerImage.png";
import Footer from "./components/Footer";
import EventList from "./pages/EventList";
import EventDetail from "./pages/EventDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // 簡易ログイン状態管理
  const [user, setUser] = useState(null); // null=ゲスト, "ユーザー"でログイン

  const handleLoginLogout = () => {
    if (user) {
      // ログアウト
      setUser(null);
    } else {
      // ログイン
      setUser("ユーザー");
      alert("デモ版なのでログイン認証機能は省略しています。");
    }
  };

  return (
    <div className="app">
      {/* ヘッダー */}
      <header className="header">
        <Link to="/">
          <img
            src={headerImage}
            alt="ロコナビ (Local Navi) ロゴ"
            className="logo-image"
          />
        </Link>
        <div className="user-section">
          <p>こんにちは “{user || "ゲスト"}” さん</p>
          <button onClick={handleLoginLogout} className="login-button">
            {user ? "ログアウト" : "ログイン"}
          </button>
          {!user && (
            <button className="register-button">
              会員登録
            </button>
          )}
        </div>
      </header>
      <ScrollToTop />
      {/* メインコンテンツ */}
      <main className="content">
        <Routes>
          <Route
            path="/"
            element={<EventList user={user} />}
          />
          <Route
            path="/events/:id"
            element={<EventDetail user={user} />}
          />
        </Routes>
      </main>

      {/* フッター */}
      <Footer />
    </div>
  );
}

export default App;