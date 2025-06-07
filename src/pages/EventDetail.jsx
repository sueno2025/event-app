// src/pages/EventDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { events } from "../data/events";

export default function EventDetail() {
  const { id } = useParams();
  const ev = events.find((e) => e.id === Number(id));

  if (!ev) {
    return (
      <div>
        <p>イベントが見つかりません。</p>
        <Link to="/">一覧へ戻る</Link>
      </div>
    );
  }

  return (
    <div className="event-detail">
      <h1>{ev.title}</h1>
      <p className="detail-date">
        開催日：{ev.date.replace("\n", " ")}
      </p>
      <img src={ev.imageUrl} alt="" className="detail-image" />

      {/* 場所・主催 */}
      <p className="detail-location">場所：{ev.location}</p>
      <p className="detail-host">主催：{ev.host}</p>

      {/* 5行程度の詳細説明 */}
      <div className="detail-long-description">
        {ev.longDescription.trim().split("\n").map((line, idx) => (
          <p key={idx}>{line.trim()}</p>
        ))}
      </div>

      {/* 追加情報 */}
      <p className="detail-schedule">時間：{ev.schedule}</p>
      {ev.type === "participant" ? (
        <p className="detail-fee">参加費：{ev.fee}</p>
      ) : (
        <p className="detail-fee">報酬：{ev.fee}</p>
      )}
      <p className="detail-contact">お問い合わせ：{ev.contact}</p>

      {/* 注意事項リスト */}
      <h3>注意事項</h3>
      <ul className="detail-attention">
        {ev.attention.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* 概要（短い説明） */}
      <p className="detail-description">{ev.description}</p>

      {/* 定員／現在の申し込み人数 */}
      <p className="detail-capacity">
        定員：{ev.capacity}名&nbsp;／&nbsp;現在の申し込み：{ev.registered}名
      </p>

      {/* 申し込みボタン */}
      <div className="apply-button-wrap">
        <button
          className="apply-button"
          onClick={() => alert("申し込みフォームへ遷移します")}
        >
          申し込む
        </button>
      </div>

      <Link to="/" className="back-link">← イベント一覧に戻る</Link>
    </div>
  );
}