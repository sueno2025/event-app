ロコナビ (Local Navi)

地域のイベント情報をまとめたシンプルなReactアプリケーション。
「参加者募集イベント」と「お手伝い募集イベント」を切り替えて一覧表示し、詳細ページ・お気に入り登録・レスポンシブ対応などの機能を備えています。

 プロジェクト構成
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

セットアップ

1.リポジトリをクローン
    git clone <リポジトリURL>
    cd event-app
2.依存ライブラリをインストール
    npm install
3.開発用サーバー起動
    npm start
ブラウザで http://localhost:3000 を開きます。

スクリプト
npm start  開発サーバー起動
npm run build  本番用ビルド

主な機能

モード切替
    参加者募集イベント ⇔ お手伝い募集イベント

URL同期 & ページネーション
    クエリパラメータに mode, page, q, tag を保持

5件ずつのページネーション
    キーワード・タグ検索

イベントタイトル・説明・主催者名でキーワード検索
    タグクリックで絞り込み

お気に入り登録
    ハートアイコンでトグル
    ログイン状態でのみ利用可能 & localStorageに保持

簡易ログイン
    ゲスト／ユーザー切り替え（今回はフロントページのみの作成なので、ログインページ/認証機能等は省略してあります）
    アラートでログイン・ログアウトを通知

レスポンシブ対応
    スマホ・タブレット・PCそれぞれ最適化
    スマホではカードレイアウトに切り替え

詳細ページ
    イベントごとの詳細情報
    申し込みボタン（デモアラート）

開発者
    上野 哲

ライセンス
    MIT
