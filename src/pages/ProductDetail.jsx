import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getProduct, products, formatPrice, brand, whatsappLink } from "../data/products"
import ProductCard from "../components/ProductCard"
import WhatsAppIcon from "../components/WhatsAppIcon"

function countPieces(contents) {
  let total = 0
  for (const items of Object.values(contents)) {
    for (const item of items) {
      const m = String(item).match(/(\d+)\s*pcs?/i)
      if (m) total += Number(m[1])
    }
  }
  return total > 0 ? total : "Assorted"
}

const trustItems = [
  {
    title: "Free Shipping on Orders Over Rs. 450/-",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="7" width="12" height="10" rx="1" />
        <path d="M14 10h3l3 3v4h-6V10z" />
        <circle cx="7" cy="18.5" r="1.5" />
        <circle cx="17" cy="18.5" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Secure Payment",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="5" y="11" width="14" height="10" rx="1.5" />
        <path d="M8 11V8a4 4 0 118 0v3" />
      </svg>
    ),
  },
  {
    title: "100% Veg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
        <path d="M12 10v4M12 7.5h.01" />
      </svg>
    ),
  },
  {
    title: "Great taste loved by millions",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3l2.1 4.3 4.7.7-3.4 3.3.8 4.7L12 14.2 7.8 16l.8-4.7L5.2 8l4.7-.7L12 3z" />
      </svg>
    ),
  },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProduct(id)
  const [infoOpen, setInfoOpen] = useState(true)

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl bg-[#F9F3EA] px-4 py-24 text-center">
        <h1 className="text-3xl font-semibold text-[#3d2a22]">Product not found</h1>
        <Link to="/shop" className="mt-6 inline-block text-[#4D362C] underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const pcs = countPieces(product.contents)
  const categoryLabel = product.category.replace("-", " ")

  return (
    <div className="bg-[#F9F3EA]">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Single main photo only — no thumbnails / no catalogue below */}
          <div className="overflow-hidden bg-[#efe6d8]">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square w-full object-cover object-center"
            />
          </div>

          {/* Right info — Loyka style, no qty / cart / buy */}
          <div className="lg:pt-1">
            <h1 className="text-[1.75rem] font-bold leading-tight text-[#3d2a22] md:text-[2.15rem]">
              {product.name}
            </h1>
            <p className="mt-3 text-lg text-[#3d2a22] md:text-xl">
              {formatPrice(product.price)}
            </p>

            <div className="mt-8 border-y border-[#4D362C]/30">
              <button
                type="button"
                onClick={() => setInfoOpen((v) => !v)}
                className="flex w-full items-center justify-between py-3.5 text-left"
              >
                <span className="text-[15px] font-medium text-[#3d2a22]">
                  Product Info
                </span>
                <span className="text-xl leading-none text-[#3d2a22]">
                  {infoOpen ? "−" : "+"}
                </span>
              </button>

              {infoOpen && (
                <div className="border-t border-[#4D362C]/15 pb-5 pt-4 text-sm leading-relaxed text-[#5c4a3e]">
                  <p className="mb-4">{product.highlight}</p>
                  {Object.entries(product.contents).map(([group, items]) => (
                    <div key={group} className="mb-3 last:mb-0">
                      <p className="font-semibold text-[#3d2a22]">{group}</p>
                      <ul className="mt-1 space-y-0.5">
                        {items.map((item) => (
                          <li key={item}>· {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <p className="mt-5 text-xs text-[#8a7a6c]">
              Brand: 3AMG &nbsp;&nbsp; category: {categoryLabel} &nbsp;&nbsp; No
              of pcs: {pcs}
            </p>

            <ul className="mt-8 space-y-4">
              {trustItems.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-3 text-sm text-[#3d2a22]"
                >
                  <span className="shrink-0 text-[#4D362C]">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2.5 bg-[#25D366] px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_10px_24px_-10px_rgba(37,211,102,0.7)] transition hover:bg-[#1ebe5b]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Enquire on WhatsApp
            </a>

            <p className="mt-6 text-sm text-[#5c4a3e]">
              Or reach us at{" "}
              <a
                href={`mailto:${brand.email}`}
                className="font-medium text-[#4D362C] underline underline-offset-2"
              >
                {brand.email}
              </a>{" "}
              or call{" "}
              <a
                href={`tel:${brand.phones[0].replace(/\s/g, "")}`}
                className="font-medium text-[#4D362C] underline underline-offset-2"
              >
                {brand.phones[0]}
              </a>
            </p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-[#4D362C]/10 px-4 py-14 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-semibold text-[#3d2a22] md:text-3xl">
              You may also like
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
