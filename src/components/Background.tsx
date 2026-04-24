// src/components/Background.tsx
// 背景のグラデーションオーブとグリッドを描画するコンポーネント
export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* グリッドオーバーレイ */}
      <div className="absolute inset-0 bg-grid" />

      {/* グラデーションオーブ */}
      <div
        className="absolute rounded-full opacity-30"
        style={{
          width: 500,
          height: 500,
          background: '#4f46e5',
          filter: 'blur(100px)',
          top: -150,
          left: -150,
        }}
      />
      <div
        className="absolute rounded-full opacity-25"
        style={{
          width: 350,
          height: 350,
          background: '#06b6d4',
          filter: 'blur(80px)',
          top: '30%',
          right: -100,
        }}
      />
      <div
        className="absolute rounded-full opacity-20"
        style={{
          width: 300,
          height: 300,
          background: '#8b5cf6',
          filter: 'blur(80px)',
          bottom: -50,
          left: '30%',
        }}
      />
    </div>
  )
}
