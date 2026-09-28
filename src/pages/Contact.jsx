import { brand } from "../data/products"

export default function Contact() {
  return (
    <div className="bg-ivory px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-deep">
          Contact Information
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-cocoa md:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          We would love to hear from you — for product queries, bulk orders and
          festive gifting.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="border border-cocoa/10 bg-cream p-8">
            <img
              src="/logo-3amg.png"
              alt={brand.legalName}
              className="mb-6 h-20 w-auto object-contain"
            />
            <h2 className="font-display text-3xl text-cocoa">{brand.legalName}</h2>
            <address className="mt-4 not-italic text-sm leading-relaxed text-muted">
              {brand.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${brand.email}`}
                    className="text-cocoa hover:underline"
                  >
                    {brand.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
                  Phone
                </dt>
                <dd className="space-y-1">
                  {brand.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="block text-cocoa hover:underline"
                    >
                      {p}
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
                  GSTIN / UIN
                </dt>
                <dd className="text-cocoa">{brand.gstin}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
                  State
                </dt>
                <dd className="text-cocoa">{brand.state}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
                  License
                </dt>
                <dd className="text-cocoa">{brand.licenseNo}</dd>
              </div>
            </dl>
          </div>

          <div className="overflow-hidden border border-cocoa/10 bg-white">
            <img
              src="/contact-page.jpg"
              alt="Contact page from catalogue"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
