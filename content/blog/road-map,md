---
title: "ポートフォリオサイトを自分で弄るための学習ロードマップ"
date: "2025-04-25"
tags: ["Next.js", "TypeScript", "React", "学習", "ロードマップ"]
summary: "Claudeに作ってもらったポートフォリオを自分でカスタマイズできるようになるまでの学習計画。"
---

このサイトはClaude（AI）に作ってもらったNext.js + TypeScript製のポートフォリオ。
せっかくなので、自分で弄れるようになるまでの学習ロードマップをまとめておく。

## 現在地

- Python 学習中（大学の授業 + AtCoder）
- TypeScript / React はこれから
- HTML / CSS は得意（Webデザインコンテスト受賞経験あり）

---

## Phase 1｜今すぐできる（コードを読まなくてもOK）

まずはコードを理解しなくても変えられる場所から手をつける。

### 作品を追加する → `src/lib/works.ts`

```ts
export const works: Work[] = [
  {
    id: 1,
    title: 'Q&A Service',
    subtitle: 'チーム開発 · Laravel',
    tags: ['PHP', 'Laravel', 'MySQL'],
  },
  // ↑ここにオブジェクトを追加するだけ
]
```

### ブログ記事を書く → `content/blog/*.md`

このファイルみたいに `.md` を追加するだけで自動で記事一覧に反映される。

### 自己紹介を変える → `src/app/about/page.tsx`

テキストとスキル一覧を書き換えるだけ。

### ターミナルの中身を変える → `src/components/Terminal.tsx`

```ts
const lines = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'ここを自分の情報に変える' },
  // ...
]
```

---

## Phase 2｜1〜2ヶ月後（TypeScript + React の基礎）

TypeScriptの勉強を始めたら、サイトのコードを読みながら並行して学ぶ。

### 型定義を読む → `src/lib/works.ts`

```ts
type Work = {
  id: number
  title: string
  tags: string[]
}
```

Pythonの型ヒント（`def f(x: int) -> str`）と同じ発想。

### propsを理解する → `src/components/WorkCard.tsx`

```tsx
export default function WorkCard({ work }: { work: Work }) {
  // workというデータを受け取って表示するコンポーネント
}
```

関数の引数に型をつけた形。

### useStateを読む → `src/components/Terminal.tsx`

```tsx
const [visibleCount, setVisibleCount] = useState(0)
// 状態が変わると画面が自動で再描画される
```

すでにサイトで使われているので、動きを見ながら理解できる。

### デザインを変える → `src/app/globals.css`

CSSはすでに得意なはず。カラーコードや余白を変えるだけで印象が変わる。

---

## Phase 3｜3〜6ヶ月後（Next.js の仕組みを理解する）

### 動的ルーティング → `src/app/blog/[slug]/page.tsx`

`[slug]` がURLのパラメータになる。
`/blog/hello-world` にアクセスすると `slug = "hello-world"` として処理される。

### サーバーコンポーネント → `src/app/page.tsx`

`'use client'` がついていないコンポーネントはサーバー側で動く。
`async/await` でデータ取得ができる。

### 新ページを追加する → `src/app/*/page.tsx`

フォルダを作って `page.tsx` を置くだけでURLが増える。

```
src/app/
└── new-page/
    └── page.tsx  → /new-page にアクセスできるようになる
```

### APIルート → `src/app/api/*/route.ts`

お問い合わせフォームやPython連携などのバックエンド処理をここに書く。
将来的にAIを組み込むときもここが起点になる。

---

## まとめ

| フェーズ | 時期 | やること |
|---------|------|---------|
| Phase 1 | 今すぐ | 中身を自分のものに変える |
| Phase 2 | 1〜2ヶ月後 | TypeScript・Reactの基礎を学ぶ |
| Phase 3 | 3〜6ヶ月後 | Next.jsの仕組みを理解して改造する |

このサイト自体が教材。コードを読む→弄る→動く、を繰り返すのが一番の近道だと思う。