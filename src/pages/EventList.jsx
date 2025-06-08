// src/pages/EventList.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { events } from "../data/events";

const ITEMS_PER_PAGE = 5;

export default function EventList({ user }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialMode = searchParams.get("mode") || "participant";
  const initialPage = parseInt(searchParams.get("page") || "1", 10);
  const initialKeyword = searchParams.get("q") || "";
  const initialTag = searchParams.get("tag") || "";

  const [mode, setMode] = useState(initialMode);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [keyword, setKeyword] = useState(initialKeyword);
  const [tagFilter, setTagFilter] = useState(initialTag);
  const [favorites, setFavorites] = useState([]);

  const tableRef = useRef(null);

  // user変化時に favorites をロード/リセット
  useEffect(() => {
    if (user) {
      const stored = localStorage.getItem("favorites");
      setFavorites(stored ? JSON.parse(stored) : []);
    } else {
      setFavorites([]);
    }
  }, [user]);



  // favorites を userがいる場合のみ localStorage に保存
  useEffect(() => {
    if (user) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, user]);

  // お気に入りトグル処理
const toggleFavorite = (id) => {
  if (!user) {
    alert("お気に入り機能はログイン後にご利用いただけます。");
    return;
  }
  setFavorites(prev =>
    prev.includes(id)
      ? prev.filter(fid => fid !== id)
      : [...prev, id]
  );
};

  // URL 同期 (スクロールはページ切り替え時だけ)
  useEffect(() => {
    const params = {};
    if (mode !== "participant") params.mode = mode;
    if (currentPage !== 1) params.page = currentPage;
    if (keyword) params.q = keyword;
    if (tagFilter) params.tag = tagFilter;
    setSearchParams(params);
  }, [mode, currentPage, keyword, tagFilter, setSearchParams]);

  // ページ番号が変わった時のみページトップへスクロール
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // フィルタリング
  let filtered = events.filter((ev) => ev.type === mode);
  if (keyword) {
    const kw = keyword.toLowerCase();
    filtered = filtered.filter((ev) =>
      ev.title.toLowerCase().includes(kw) ||
      ev.description.toLowerCase().includes(kw) ||
      ev.host.toLowerCase().includes(kw)
    );
  }
  if (tagFilter) filtered = filtered.filter((ev) => ev.audiences.includes(tagFilter));

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setCurrentPage(1);
    setTagFilter("");
  };
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  const clearTag = () => setTagFilter("");

  return (
    <>
      <div className="mode-switch">
        <button
          onClick={() => handleModeChange("participant")}
          className={`filter-button ${mode === "participant" ? "is-active" : ""}`}
        >
          参加者募集
        </button>
        <button
          onClick={() => handleModeChange("helper")}
          className={`filter-button ${mode === "helper" ? "is-active" : ""}`}
        >
          お手伝い募集
        </button>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="キーワードで検索"
          value={keyword}
          onChange={(e) => { setKeyword(e.target.value); setCurrentPage(1); }}
        />
        <button onClick={() => setKeyword("")}>クリア</button>
      </div>

      {tagFilter && (
        <div className="tag-filter-active">
          <span>タグ: {tagFilter}</span>
          <button onClick={clearTag}>×クリア</button>
        </div>
      )}

      {/* <h2 className="section-title">
        {mode === "participant" ? "参加者募集イベント" : "お手伝い募集イベント"}
      </h2> */}

      <table className="event-table" ref={tableRef}>
        <thead>
          <tr>
            <th className="th-fav"></th>
            <th className="th-date">開催日</th>
            <th className="th-image">画像</th>
            <th className="th-title">イベント名</th>
            <th className="th-location">開催地</th>
            <th className="th-capacity">{mode === "participant" ? "定員" : "募集"}</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((ev) => (
            <tr key={ev.id} className="card">
              <td className="td-fav">
                <span
                  className={`fav-heart ${favorites.includes(ev.id) ? "is-active" : ""}`}
                  onClick={() => toggleFavorite(ev.id)}
                >
                  ♥
                </span>
              </td>
              <td className="td-date">{ev.date}</td>
              <td className="td-image">
                <img src={ev.imageUrl} alt="" className="event-image" />
              </td>
              <td className="td-title">
                <Link to={`/events/${ev.id}`} className="event-link">{ev.title}</Link>
                <div className="audience-tags">
                  {ev.audiences.map((t) => (
                    <span
                      key={t}
                      className="audience-tag clickable"
                      onClick={() => { setTagFilter(t); setCurrentPage(1); }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="event-host">主催：{ev.host}</div>
                <div className="event-description">{ev.description}</div>
              </td>
              <td className="td-location">{ev.location}</td>
              <td className="td-capacity">{ev.capacity}</td>
            </tr>
          ))}
          {paginated.length === 0 && (
            <tr>
              <td colSpan="6" className="no-results">条件に一致するイベントがありません</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&lt; 前へ</button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx + 1}
            onClick={() => handlePageChange(idx + 1)}
            className={currentPage === idx + 1 ? "is-active" : ""}
          >{idx + 1}</button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>次へ &gt;</button>
      </div>
    </>
  );
}
