import { useLocation } from "react-router-dom"
import { useState } from "react"
import { brand } from "../data/products"

export default function BulkOrder() {
  const location = useLocation()
  const preset = location.state?.productName || ""
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: preset,
    quantity: "",
    message: "",
  })

  function update(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function submit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Bulk Order Inquiry${form.product ? ` — ${form.product}` : ""}`
    )
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company}\nProduct: ${form.product}\nApprox. Quantity: ${form.quantity}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const field =
    "w-full rounded-md border border-cocoa/15 bg-ivory px-4 py-3 text-sm outline-none transition focus:border-gold"

  return (
    <div className="bg-ivory px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-deep">
            Wholesale & Corporate
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-cocoa md:text-5xl">
            Bulk Order Inquiry
          </h1>
          <p className="mt-4 text-muted">
            Tell us about your Diwali gifting needs. Our team will respond with
            availability and pricing — no online payment required.
          </p>
          <div className="mt-8 space-y-3 text-sm text-cocoa/80">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href={`mailto:${brand.email}`} className="text-gold-deep">
                {brand.email}
              </a>
            </p>
            {brand.phones.map((p) => (
              <p key={p}>
                <span className="font-semibold">Phone:</span>{" "}
                <a href={`tel:${p.replace(/\s/g, "")}`} className="text-gold-deep">
                  {p}
                </a>
              </p>
            ))}
          </div>
        </div>

        <form onSubmit={submit} className="space-y-4 rounded-lg border border-cocoa/10 bg-cream p-6 md:p-8">
          {[
            ["name", "Full Name", "text", true],
            ["email", "Email", "email", true],
            ["phone", "Phone", "tel", true],
            ["company", "Company / Organisation", "text", false],
            ["product", "Product / Collection Interest", "text", false],
            ["quantity", "Approximate Quantity", "text", false],
          ].map(([name, label, type, required]) => (
            <label key={name} className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
                {label}
              </span>
              <input
                name={name}
                type={type}
                required={required}
                value={form[name]}
                onChange={update}
                className={field}
              />
            </label>
          ))}
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
              Message
            </span>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={update}
              className={field}
              placeholder="Occasion, delivery city, preferred date…"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-cocoa py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition hover:bg-cocoa-soft"
          >
            Send Inquiry
          </button>
          {sent && (
            <p className="text-center text-sm text-gold-deep">
              Opening your email app… If it doesn&apos;t open, write to{" "}
              {brand.email}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
