import { useParams, Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import { categories, filterProducts } from "../data/products"

export default function Shop() {
  const { category } = useParams()
  const active = category || "all"
  const list = filterProducts(active)
  const current = categories.find((c) => c.id === active) || categories[0]

  return (
    <div className="bg-[#F9F3EA] px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6b5748]">
            Catalogue
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-[#3d2a22] md:text-5xl">
            {current.label}
          </h1>
          <p className="mt-3 text-sm text-[#6b5748]">
            Premium Diwali boxes with catalogue pricing. Enquire to order — no
            online checkout.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 border-b border-[#4D362C]/10 pb-6">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={c.id === "all" ? "/shop" : `/shop/${c.id}`}
              className={`px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] transition ${
                active === c.id
                  ? "bg-[#4D362C] text-white"
                  : "border border-[#4D362C]/20 text-[#4D362C] hover:bg-[#4D362C]/10"
              }`}
            >
              {c.label}
            </Link>
          ))}
        </div>

        <p className="mt-6 text-sm text-[#6b5748]">{list.length} products</p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-7">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
