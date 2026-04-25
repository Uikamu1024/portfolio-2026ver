// src/lib/works.ts
// 作品データの定義ファイル
// 新しい作品を追加するときはここに追記するだけでOK！

export type Work = {
  id: number
  title: string
  subtitle: string
  tags: string[]
  url?: string        // 外部リンク（任意）
  description?: string
}

// ★ここを編集して自分の作品に変えてね
export const works: Work[] = [
  {
    id: 1,
    title: 'Q&A Service',
    subtitle: 'チーム開発 · Laravel',
    tags: ['PHP', 'Laravel', 'MySQL'],
    description: 'チームで開発したQ&Aプラットフォーム。',
  },
  {
    id: 2,
    title: 'Web Design Award',
    subtitle: 'コンテスト受賞作品',
    tags: ['HTML', 'CSS', 'Design'],
    description: 'Webデザインコンテスト受賞作品。',
  },
  {
    id: 3,
    title: 'Line Bot',
    subtitle: '毎日の天気、ITニュース、おみくじを配信',
    tags: ['Python', 'API'],
    description: 'Line Botを作成し、天気予報やITニュース、おみくじを配信するサービス。',
  },
  {id :4,
    title: 'Portfolio Site',
    subtitle: 'このサイト！',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    

  },


]
