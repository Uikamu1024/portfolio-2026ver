# uikaむ Portfolio

Next.js + TypeScript + Tailwind CSS で構築したポートフォリオサイト。

## 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **MDX** (Markdownブログ)
- **Vercel** (ホスティング)

---

## セットアップ

```bash
# 依存パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで http://localhost:3000 を開く。

---

## よくカスタマイズする場所

### 自分の情報を変える

| ファイル | 変更内容 |
|---------|---------|
| `src/app/about/page.tsx` | 自己紹介文・スキル・経歴 |
| `src/app/contact/page.tsx` | SNSリンク・メールアドレス |
| `src/components/Terminal.tsx` | ターミナルに表示するコマンドと出力 |
| `src/lib/works.ts` | 作品一覧 |
| `src/app/layout.tsx` | サイトタイトル・description |

### ブログ記事を書く

`content/blog/` フォルダに `.md` ファイルを追加するだけ！

```markdown
---
title: "記事タイトル"
date: "2025-05-01"
tags: ["Python", "学習"]
summary: "一言まとめ"
---

本文をMarkdownで書く
```

---

## Vercelへのデプロイ

1. GitHubにリポジトリを作ってpushする
2. [vercel.com](https://vercel.com) でGitHubと連携
3. リポジトリを選ぶだけで自動デプロイ完了！

GitHubにpushするたびに自動で更新される。
