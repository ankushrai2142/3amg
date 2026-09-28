import { Link } from "react-router-dom"
import { brand } from "../data/products"

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-cocoa text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-3 md:px-6">
        <div>
          <img
            src="/logo-3amg.png"
            alt={brand.legalName}
            className="mb-6 h-20 w-auto object-contain"
          />
          <p className="font-display text-3xl text-gold-light">{brand.name}</p>
          <p className="mt-1 text-sm text-cream/60">{brand.productBrand}</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/55">
            {brand.tagline}
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
            Contact Us
          </h3>
          <p className="text-sm font-medium text-cream">{brand.legalName}</p>
          <address className="mt-3 not-italic text-sm leading-relaxed text-cream/60">
            {brand.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-5 text-xs text-cream/45">GSTIN/UIN: {brand.gstin}</p>
          <p className="text-xs text-cream/45">State: {brand.state}</p>
        </div>

        <div>
          <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
            Get in Touch
          </h3>
          <a
            href={`mailto:${brand.email}`}
            className="block text-sm text-cream/80 transition hover:text-gold-light"
          >
            {brand.email}
          </a>
          {brand.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="mt-2 block text-sm text-cream/80 transition hover:text-gold-light"
            >
              {phone}
            </a>
          ))}
          <p className="mt-5 text-xs text-cream/40">License {brand.licenseNo}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/bulk-order"
              className="bg-gradient-to-r from-gold-deep to-gold px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-cocoa"
            >
              Bulk Inquiry
            </Link>
            <Link
              to="/contact"
              className="border border-gold/35 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-light"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-[11px] text-cream/40 md:flex-row md:px-6">
          <p>
            © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link to="/shop" className="hover:text-gold-light">
              Shop All
            </Link>
            <Link to="/shop/brittle" className="hover:text-gold-light">
              Brittle
            </Link>
            <Link to="/shop/gifting" className="hover:text-gold-light">
              Gifting
            </Link>
            <Link to="/contact" className="hover:text-gold-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
