import React from "react";
import "./App.css";

function App() {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <div className="app">
      <header className="header">
        <img
          src="/images/headerImage.png"
          alt="ロコナビ (Local Navi) ロゴ"
          className="logo-image"
        />
        <div className="user-section">
          <p>こんにちは "ゲスト" さん</p>
          <button>ログイン</button>
          <button>会員登録</button>
        </div>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="キーワードで検索" />
        <button>検索</button>
      </div>

      <main className="content">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="card">
            <img
              src="https://placehold.jp/320x240.png"
              alt="dummy"
              className="image"
            />
            <div className="text-section">
              <div className="text">{lorem}</div>
              <button className="tag-button">タグ</button>
            </div>
            <div className="heart">❤️</div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;