// src/App.js
import React, { useState } from "react";
import "./App.css";
import headerImage from "./images/headerImage.png";
import Footer from "./components/Footer.js";

function App() {
  // 「audiences」フィールド付きのイベントデータに、よりローカル感の強いものを追加
  const events = [
    // ───────────────────────────────────────────────
    // 参加者募集
    // ───────────────────────────────────────────────
    {
      id: 1,
      type: "participant",
      date: "2025年\n7月10日",
      imageUrl: "https://placehold.jp/100x100.png",
      title: "【千歳烏山駅前】夏休みこどもプログラミング体験会",
      link: "#",
      host: "烏山区民センター",
      description:
        "小学生向けに Scratch を使ったプログラミング体験。親子で参加できます！",
      location: "東京都世田谷区",
      capacity: "20名",
      audiences: ["子ども", "親子向け"],
    },
    {
      id: 2,
      type: "participant",
      date: "2025年\n7月15日",
      imageUrl: "https://placehold.jp/100x100.png",
      title: "【下北沢】インディーズバンドライブ交流会",
      link: "#",
      host: "下北沢ライブハウス RAGE",
      description:
        "世田谷区在住バンド中心のライブイベント。終演後に出演者と無料交流会あり。",
      location: "東京都世田谷区",
      capacity: "50名",
      audiences: ["若者", "音楽好き"],
    },
    {
      id: 3,
      type: "participant",
      date: "2025年\n7月20日",
      imageUrl: "https://placehold.jp/100x100.png",
      title: "【三軒茶屋】朝ヨガ＆瞑想ワークショップ",
      link: "#",
      host: "三軒茶屋ウェルネススタジオ",
      description:
        "初心者大歓迎の朝ヨガ＋瞑想クラス。深呼吸でリフレッシュしましょう。",
      location: "東京都世田谷区",
      capacity: "15名",
      audiences: ["高齢者", "初心者歓迎"],
    },
    {
      id: 4,
      type: "participant",
      date: "2025年\n7月27日",
      imageUrl: "https://placehold.jp/100x100.png",
      title: "【駒沢公園】親子ピクニック＆自然観察会",
      link: "#",
      host: "駒沢公園サービスセンター",
      description:
        "駒沢公園内を散策し、季節の植物や生き物を観察。親子で自然と触れ合う午後イベント。",
      location: "東京都世田谷区",
      capacity: "30組",
      audiences: ["親子向け", "自然好き"],
    },
    {
      id: 5,
      type: "participant",
      date: "2025年\n8月3日",
      imageUrl: "https://placehold.jp/100x100.png",
      title: "【世田谷区民会館】町内会夏祭り 参加者募集",
      link: "#",
      host: "世田谷区町内会",
      description:
        "盆踊りや屋台ゲーム、ビンゴ大会など。地元住民同士の交流を深める夏祭り。",
      location: "東京都世田谷区",
      capacity: "100名",
      audiences: ["地域住民", "家族連れ"],
    },

    // ───────────────────────────────────────────────
    // お手伝い募集
    // ───────────────────────────────────────────────
    {
      id: 6,
      type: "helper",
      date: "2025年\n7月25日",
      imageUrl: "https://placehold.jp/100x100.png",
      title: "【二子玉川】夏のこども英会話サマーキャンプ　スタッフ募集",
      link: "#",
      host: "二子玉川インターナショナルスクール",
      description:
        "小1～小3対象のサマーキャンプで受付・誘導をお手伝いできる方を募集。",
      location: "東京都世田谷区",
      capacity: "スタッフ5名",
      audiences: ["子ども好き", "英語スキルがある人"],
    },
    {
      id: 7,
      type: "helper",
      date: "2025年\n7月30日",
      imageUrl: "https://placehold.jp/100x100.png",
      title:
        "【用賀】地域交流バーべキュー＆縁日フェスタ　ボランティア募集",
      link: "#",
      host: "用賀商店街振興組合",
      description:
        "屋台の運営補助やビンゴ大会進行など、当日サポートしていただける方を募集中。",
      location: "東京都世田谷区",
      capacity: "ボランティア10名",
      audiences: ["料理好き", "子どもと遊べる人"],
    },
    {
      id: 8,
      type: "helper",
      date: "2025年\n8月2日",
      imageUrl: "https://placehold.jp/100x100.png",
      title: "【砧公園】公園清掃ボランティア 募集",
      link: "#",
      host: "砧公園管理事務所",
      description:
        "週末に砧公園内を清掃。落ち葉・ゴミ拾いを通じて公園をきれいに保ち、地域に貢献しましょう。",
      location: "東京都世田谷区",
      capacity: "ボランティア15名",
      audiences: ["地域住民", "体力に自信のある人"],
    },
    {
      id: 9,
      type: "helper",
      date: "2025年\n8月10日",
      imageUrl: "https://placehold.jp/100x100.png",
      title: "【三軒茶屋】子どもふれあいスポーツ大会 運営スタッフ募集",
      link: "#",
      host: "三茶スポーツクラブ",
      description:
        "小学生向けスポーツ大会の運営補助。競技進行や受付、簡単な誘導などをお手伝いください。",
      location: "東京都世田谷区",
      capacity: "スタッフ10名",
      audiences: ["スポーツ好き", "元気な人"],
    },
  ];

  // モード切り替え (参加者募集 / お手伝い募集)
  const [mode, setMode] = useState("participant");
  const filteredEvents = events.filter((ev) => ev.type === mode);
  const headerTitles = {
    participant: "参加者募集イベント",
    helper: "お手伝い募集イベント",
  };

  return (
    <div className="app">
      {/* ヘッダー部分（ロゴ＋ログイン） */}
      <header className="header">
        <img
          src={headerImage}
          alt="ロコナビ (Local Navi) ロゴ"
          className="logo-image"
        />
        <div className="user-section">
          <p>こんにちは "ゲスト" さん</p>
          <button>ログイン</button>
          <button>会員登録</button>
        </div>
      </header>

      {/* 検索バー */}
      <div className="search-bar">
        <input type="text" placeholder="キーワードで検索" />
        <button>検索</button>
      </div>

      {/* モード切り替えボタン */}
      <div className="mode-switch">
        <button
          className={`filter-button ${
            mode === "participant" ? "is-active" : ""
          }`}
          onClick={() => setMode("participant")}
        >
          参加者募集
        </button>
        <button
          className={`filter-button ${mode === "helper" ? "is-active" : ""}`}
          onClick={() => setMode("helper")}
        >
          お手伝い募集
        </button>
      </div>

      {/* イベント一覧テーブル */}
      <main className="content">
        <h2 className="section-title">{headerTitles[mode]}</h2>
        <table className="event-table">
          <thead>
            <tr>
              <th className="th-date">開催日</th>
              <th className="th-image">画像</th>
              <th className="th-title">イベント名</th>
              <th className="th-location">開催地</th>
              <th className="th-capacity">
                {mode === "participant" ? "定員" : "募集"}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((ev) => (
              <tr key={ev.id}>
                {/* 開催日 */}
                <td className="td-date">{ev.date}</td>
                {/* 画像 */}
                <td className="td-image">
                  <img
                    src={ev.imageUrl}
                    alt="イベント画像"
                    className="event-image"
                  />
                </td>
                {/* イベント名＋詳細＋タグ */}
                <td className="td-title">
                  <a href={ev.link} className="event-link">
                    {ev.title}
                  </a>
                  {/* タグ(対象客層) */}
                  <div className="audience-tags">
                    {ev.audiences.map((tag) => (
                      <span key={tag} className="audience-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="event-host">主催：{ev.host}</div>
                  <div className="event-description">{ev.description}</div>
                </td>
                {/* 開催地 */}
                <td className="td-location">{ev.location}</td>
                {/* 定員／募集人数 */}
                <td className="td-capacity">{ev.capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer/>
    </div>
  );
}

export default App;