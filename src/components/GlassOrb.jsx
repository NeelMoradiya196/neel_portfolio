export default function GlassOrb() {
  return (
    <div className="relative size-[clamp(200px,25vw,380px)] sunrise">
      {/* Main orb */}
      <div className="glass-orb size-full float" />

      {/* Glass bubble highlight */}
      <div
        className="absolute inset-[15%] rounded-full pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 26%, #ffffffe6 0, #ffffffe6 3%, transparent 12%),
            radial-gradient(circle, #ffffff0a 0, #ffffff0a 58%, #38bdf859 68%, #ffffffb3 71%, #38bdf840 73%, transparent 74%)
          `,
        }}
      />

      {/* Clouds */}
      <div
        className="cloud absolute -bottom-6 -left-8"
        style={{ width: '140%', height: '40%' }}
      />
      <div
        className="cloud absolute -bottom-10 left-[20%]"
        style={{ width: '80%', height: '30%', animationDelay: '3s' }}
      />
    </div>
  )
}
