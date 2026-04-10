export function ContactForm() {
  return (
    <form className="grid gap-5 rounded-[32px] border border-mocha/10 bg-white p-8 shadow-soft">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-mocha">
          Full Name
          <input
            type="text"
            className="rounded-2xl border border-mocha/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-caramel"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-mocha">
          Phone Number
          <input
            type="tel"
            className="rounded-2xl border border-mocha/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-caramel"
            placeholder="Your contact number"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-mocha">
        Email
        <input
          type="email"
          className="rounded-2xl border border-mocha/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-caramel"
          placeholder="hello@example.com"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-mocha">
        Enquiry Type
        <select className="rounded-2xl border border-mocha/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-caramel">
          <option>Custom gifting enquiry</option>
          <option>Product order</option>
          <option>Bulk / festive order</option>
          <option>Corporate gifting</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-mocha">
        Message
        <textarea
          rows={5}
          className="rounded-2xl border border-mocha/10 bg-cream px-4 py-3 text-sm outline-none transition focus:border-caramel"
          placeholder="Tell us about your occasion, preferred chocolates, quantity, or packaging style."
        />
      </label>
      <button
        type="submit"
        className="inline-flex w-fit items-center rounded-full bg-mocha px-6 py-3 text-sm font-semibold text-cream transition hover:bg-espresso"
      >
        Send Enquiry
      </button>
    </form>
  );
}
