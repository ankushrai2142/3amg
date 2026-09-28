import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { brand, whatsappLink } from "../data/products";
import WhatsAppIcon from "./WhatsAppIcon";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/shop/gifting", label: "Gifting" },
  { to: "/shop/brittle", label: "Brittle Range" },
  { to: "/shop/roca", label: "Roca" },
  { to: "/shop/dry-fruits", label: "Dry Fruits" },
  { to: "/bulk-order", label: "Corporate Gifting" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        transparent
          ? "bg-transparent text-white"
          : "bg-[#F9F3EA]/97 text-[#2a1712] shadow-[0_10px_30px_-20px_rgba(42,23,18,0.45)] backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className="block h-px w-6 bg-current" />
            <span className="block h-px w-6 bg-current" />
            <span className="block h-px w-6 bg-current" />
          </div>
        </button>

        <Link
          to="/"
          className="relative flex shrink-0 items-center"
          aria-label={brand.name}
        >
          <img
            src="/logo-3amg-white.png"
            alt=""
            className={`h-18 w-auto object-contain transition-opacity duration-500 ${
              transparent ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src="/logo-3amg.png"
            alt={brand.legalName}
            className={`absolute left-0 top-0 h-18 w-auto object-contain transition-opacity duration-500 ${
              transparent ? "opacity-0" : "opacity-100"
            }`}
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) =>
                `relative py-2 text-[13px] font-semibold uppercase tracking-[0.04em] xl:text-[14px] transition-opacity hover:opacity-100 ${
                  isActive ? "opacity-100" : "opacity-90"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="inline-flex h-10 w-10 items-center justify-center transition hover:text-[#25D366]"
        >
          <WhatsAppIcon className="h-6 w-6" />
        </a>
      </div>

      {open && (
        <div className="border-t border-[#2a1712]/10 bg-[#F9F3EA] px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end
                className={({ isActive }) =>
                  `border-b border-[#2a1712]/10 py-4 text-[15px] font-semibold uppercase tracking-[0.06em] ${
                    isActive ? "text-[#5a0f24]" : "text-[#2a1712]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-[12px] font-semibold uppercase tracking-widest text-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
