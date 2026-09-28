import { Link } from "react-router-dom"
import { formatPrice } from "../data/products"

/** Loyka-style product card — brand, title, price, View Details (no cart) */
export default function ProductCard({ product }) {
  return (
    <article className="group flex flex-col bg-[#F9F3EA]">
      <Link
        to={`/product/${product.id}`}
        className="relative block overflow-hidden bg-[#efe6d8]"
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover object-center transition duration-500 ease-out group-hover:scale-[1.04]"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#6b5748]">
          3AMG
        </p>
        <h3 className="mt-1.5 text-[15px] font-bold leading-snug text-[#3d2a22] md:text-base">
          <Link
            to={`/product/${product.id}`}
            className="transition hover:text-[#5c4033]"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-[15px] font-semibold text-[#3d2a22]">
          {formatPrice(product.price)}
        </p>
        <Link
          to={`/product/${product.id}`}
          className="mt-4 inline-flex w-full items-center justify-center bg-[#4D362C] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#3a2820]"
        >
          View Details
        </Link>
      </div>
    </article>
  )
}
