# ロコナビ (Local Navi)

地域のイベント情報をまとめたシンプルなReactアプリケーションです。  
「参加者募集イベント」と「お手伝い募集イベント」を切り替えて一覧表示し、詳細ページ・お気に入り登録・レスポンシブ対応などの機能を備えています。

---

## プロジェクト構成

```
event-app/
├── node_modules/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Footer.js
│   │   ├── Footer.css
│   │   └── ScrollToTop.jsx
│   ├── data/
│   │   └── events.js
│   ├── images/
│   │   └── headerImage.png
│   ├── pages/
│   │   ├── EventList.jsx
│   │   └── EventDetail.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ セットアップ手順

### 1. リポジトリをクローン

```bash
git clone <リポジトリURL>
cd event-app
```

### 2. 依存ライブラリをインストール

```bash
npm install
```

### 3. 開発サーバーを起動

```bash
npm start
```

ブラウザで `http://localhost:3000` を開きます。

---

## 利用可能なスクリプト

```bash
npm start        # 開発用サーバー起動
npm run build    # 本番用ビルド作成
```

---

## 主な機能

### モード切替
- 参加者募集イベント ⇔ お手伝い募集イベント
- クエリパラメータ（`mode`, `page`, `q`, `tag`）と同期

### ページネーション
- 5件ずつ表示（1ページあたり）

### キーワード・タグ検索
- イベントタイトル・説明・主催者名を対象に検索
- タグをクリックしてフィルタリング可能

### お気に入り機能
- ハートアイコンでトグル切り替え
- ログイン状態のみ有効（localStorageに保存）

### 簡易ログイン機能
- ゲスト / ユーザー切り替え（UIのみ）
- ログイン・ログアウト時にアラート表示

### レスポンシブ対応
- スマホ・タブレット・PCで最適化表示
- スマホではカードレイアウトに切り替え

### 詳細ページ
- イベントの詳細情報を表示
- 「申し込む」ボタン（デモ用アラート）

---

## 開発者

上野 哲

---

## ライセンス

MIT
