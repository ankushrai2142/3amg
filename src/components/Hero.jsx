import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const slides = [
  {
    id: "gifting",
    image: "/hero/hero-1.jpg",
    position: "object-[60%_50%]",
    title: "A truly indulgent\nexperience is here.",
    subtitle: "Diwali Gifting Collection 2026",
    to: "/shop/gifting",
  },
  {
    id: "festive",
    image: "/hero/hero-2.jpg",
    position: "object-[65%_40%]",
    title: "Celebrate in\nfestive colours.",
    subtitle: "Signature Festive Hampers",
    to: "/shop/gifting",
  },
  {
    id: "gift-box",
    image: "/hero/hero-3.jpg",
    position: "object-[65%_50%]",
    title: "Crafted to be\ngifted.",
    subtitle: "Premium Chocolate Gift Boxes",
    to: "/shop",
  },
  {
    id: "hampers",
    image: "/hero/hero-4.jpg",
    position: "object-[60%_50%]",
    title: "Grand hampers for\ngrand celebrations.",
    subtitle: "Bulk & Corporate Gifting",
    to: "/bulk-order",
  },
]

const track = [...slides, slides[0]]
const INTERVAL = 5000

export default function Hero() {
  const [pos, setPos] = useState(0)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)
  const active = pos % slides.length

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setPos((p) => p + 1), INTERVAL)
    return () => clearInterval(t)
  }, [paused])

  useEffect(() => {
    if (animate) return
    let inner
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setAnimate(true))
    })
    return () => {
      cancelAnimationFrame(outer)
      cancelAnimationFrame(inner)
    }
  }, [animate])

  function handleTransitionEnd(e) {
    if (e.target !== e.currentTarget) return
    if (pos >= slides.length) {
      setAnimate(false)
      setPos(0)
    }
  }

  function goTo(i) {
    setAnimate(true)
    setPos(i)
  }

  return (
    <section
      className="relative -mt-20 h-[calc(100svh-2rem)] min-h-140 overflow-hidden bg-[#170b07] text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${pos * 100}%)`,
          transition: animate ? "transform 1s cubic-bezier(0.65, 0, 0.35, 1)" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {track.map((slide, i) => (
          <div key={`${slide.id}-${i}`} className="relative h-full w-full shrink-0">
            <img
              src={slide.image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover ${slide.position}`}
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#170b07]/90 via-[#170b07]/50 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/55 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/40 to-transparent" />

            <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 pt-20 md:px-8">
              <div className="max-w-2xl">
                <h2 className="whitespace-pre-line font-lora text-[clamp(2.4rem,5.4vw,4.4rem)] font-normal leading-[1.1] tracking-[-0.01em] drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]">
                  {slide.title}
                </h2>
                <p className="mt-6 text-lg font-light text-white/90 md:text-xl">
                  {slide.subtitle}
                </p>
                <Link
                  to={slide.to}
                  tabIndex={i === pos ? 0 : -1}
                  className="mt-10 inline-flex items-center rounded-full border border-white/15 bg-[#5a0f24] px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.06em] text-white shadow-[0_12px_30px_-12px_rgba(90,15,36,0.9)] transition hover:bg-[#6e142d]"
                >
                  Explore now!
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10">
        <div className="mx-auto flex max-w-7xl gap-2.5 px-5 md:px-8">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-0.75 rounded-full transition-all duration-500 ${
                i === active ? "w-10 bg-white" : "w-5 bg-white/35 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
