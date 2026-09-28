import { useLocation } from "react-router-dom"
import { getProduct, whatsappLink } from "../data/products"
import WhatsAppIcon from "./WhatsAppIcon"

export default function WhatsAppFloat() {
  const { pathname } = useLocation()
  const productId = pathname.startsWith("/product/") ? pathname.split("/")[2] : null
  const product = productId ? getProduct(productId) : null

  return (
    <a
      href={whatsappLink(product)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] transition hover:scale-105 hover:bg-[#1ebe5b] md:bottom-7 md:right-7"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
      <WhatsAppIcon className="h-7 w-7" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-40 group-hover:pr-1 md:inline">
        Chat with us
      </span>
    </a>
  )
}
