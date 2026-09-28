import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import ProductCard from "../components/ProductCard"
import { products, brittleFlavours, brand, formatPrice } from "../data/products"

const featured = products.filter((p) =>
  [
    "grand-indulgence",
    "utsav-teal",
    "brittle-flavours",
    "roca-royale-24",
    "stuffing-dates",
    "schezwan-festive",
    "dried-fruits-deluxe",
    "haldi-kumkum-assorted",
  ].includes(p.id)
)

const collections = [
  {
    title: "Gifting Collections",
    desc: "Curated festive boxes for loved ones & corporate gifting.",
    to: "/shop/gifting",
    image: "/products/product-01.jpg",
  },
  {
    title: "Brittle Range",
    desc: "Ten signature flavours — almond to Banarasi paan.",
    to: "/shop/brittle",
    image: "/products/product-18.jpg",
  },
  {
    title: "Dry Fruits",
    desc: "Peri peri, barbeque, pudina & classic nut assortments.",
    to: "/shop/dry-fruits",
    image: "/products/product-07.jpg",
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trust strip */}
      <section className="border-b border-cocoa/10 bg-ivory">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-cocoa/10 md:grid-cols-4">
          {[
            { t: "Handcrafted", s: "Artisan chocolate" },
            { t: "Premium Nuts", s: "Carefully sourced" },
            { t: "Festive Ready", s: "Diwali 2026" },
            { t: "Bulk Gifting", s: "Corporate friendly" },
          ].map((item) => (
            <div
              key={item.t}
              className="bg-ivory px-4 py-6 text-center md:py-8"
            >
              <p className="font-display text-xl text-cocoa md:text-2xl">{item.t}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted">
                {item.s}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-ivory px-4 py-20 md:px-6 md:py-24">
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-deep">
              Curated for the season
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-cocoa md:text-5xl">
              Diwali Collections
            </h2>
            <p className="mt-4 text-muted">
              Luxury gift boxes crafted for celebration — chocolates, brittle,
              dry fruits & festive accessories.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {collections.map((c, i) => (
              <Link
                key={c.title}
                to={c.to}
                className={`group relative overflow-hidden ${
                  i === 0 ? "md:row-span-1 min-h-[360px]" : "min-h-[300px]"
                }`}
              >
                <img
                  src={c.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa via-cocoa/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-cream md:p-8">
                  <div className="mb-3 h-px w-10 bg-gold" />
                  <h3 className="font-display text-3xl md:text-4xl">{c.title}</h3>
                  <p className="mt-2 max-w-xs text-sm text-cream/70">{c.desc}</p>
                  <span className="mt-5 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-gold-light">
                    Explore collection →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9F3EA] px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6b5748]">
                Your go-to for gifting and indulgence
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-[#3d2a22] md:text-4xl">
                Perfect for Gifting
              </h2>
            </div>
            <Link
              to="/shop"
              className="text-sm font-semibold text-[#4D362C] underline decoration-[#4D362C]/30 underline-offset-4 hover:decoration-[#4D362C]"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-3 border border-gold/30" />
            <img
              src="/products/box-18.jpg"
              alt="Brittle flavours collection"
              className="relative w-full object-cover"
            />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-deep">
              Brittle Range
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-cocoa md:text-5xl">
              Ten flavours.
              <br />
              One obsession.
            </h2>
            <p className="mt-4 text-muted">
              Handcrafted almond brittle in classic and festive flavours —
              coffee, brownie, rose, mango, Banarasi paan and more.
            </p>
            <p className="mt-4 font-display text-3xl text-gold-deep">
              From {formatPrice(499)}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {brittleFlavours.map((f) => (
                <li
                  key={f}
                  className="border border-cocoa/12 bg-cream px-3 py-1.5 text-[11px] font-medium tracking-wide text-cocoa"
                >
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/shop/brittle"
              className="mt-8 inline-flex bg-cocoa px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-cream transition hover:bg-cocoa-soft"
            >
              Shop Brittle
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-cocoa via-cocoa-soft to-burgundy px-4 py-24 text-cream md:px-6">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <img src="/products/product-27.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-cocoa/70" />
        <div className="relative mx-auto max-w-3xl text-center">
          <img
            src="/logo-pearl-purity.png"
            alt={brand.productBrand}
            className="mx-auto mb-8 h-16 w-auto object-contain"
          />
          <div className="mx-auto mb-6 h-px w-16 bg-gold" />
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            We would love to hear from you
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-cream/70">
            For retail, wholesale and corporate Diwali hampers — reach out for
            customised luxury gifting.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${brand.phones[0].replace(/\s/g, "")}`}
              className="bg-gradient-to-r from-gold-deep to-gold px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-cocoa"
            >
              {brand.phones[0]}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="border border-gold/40 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-light"
            >
              {brand.email}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
