import { useEffect, useState } from "react"

function getMoonPhase() {
  const knownFullMoon = new Date(Date.UTC(2026, 1, 1))
  const today = new Date()

  const diffTime = today.getTime() - knownFullMoon.getTime()
  const diffDays = diffTime / (1000 * 60 * 60 * 24)

  const lunarCycle = 29.53
  return ((diffDays % lunarCycle) + lunarCycle) % lunarCycle
}

export default function MoonBackground() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    setPhase(getMoonPhase())
  }, [])

  const lunarCycle = 29.53
  const theta = (2 * Math.PI * phase) / lunarCycle
  const isWaxing = phase <= lunarCycle / 2
  const shift = Math.cos(theta)

  return (
    <div className="fixed left-8 top-[35%] -translate-y-1/2 w-72 h-72 scale-[0.60] z-10 group">

      <div className="relative w-full h-full rounded-full overflow-hidden">

        {/* Full Moon Reveal on Hover */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            backgroundColor: "rgb(255,253,245)"
          }}
        />

        {/* Illuminated Portion */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            backgroundColor: "rgb(255,253,245)", // 99% white + 1% yellow
            boxShadow: `
              0 0 40px rgba(255,255,230,0.5),
              0 0 90px rgba(255,240,200,0.3),
              0 0 140px rgba(255,230,180,0.2)
            `
          }}
        >
          <div
            className="absolute w-full h-full rounded-full bg-black transition-all duration-1000"
            style={{
              transform: `translateX(${isWaxing ? shift * 100 : -shift * 100}%)`,
            }}
          />
        </div>

      </div>
    </div>
  )
}