import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { SERVICES } from './services'
import {
  Container,
  EMAIL,
  Eyebrow,
  H2,
  IconCheck,
  IconMail,
  IconPhone,
  Lede,
  PHONE,
  PHONE_DISPLAY,
  Section,
} from './ui'

const field =
  'w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[16px] text-[var(--ink)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/15'
const label = 'mb-1.5 block text-[14px] font-semibold text-[var(--ink)]'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', area: '', service: '', message: '' })
  const [busy, setBusy] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || (!form.email.trim() && !form.phone.trim())) {
      setError('Please give your name and either a phone number or an email address.')
      return
    }
    setBusy(true)
    setError('')
    const { error: err } = await supabase.from('enquiries').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      area: form.area.trim(),
      service: form.service,
      message: form.message.trim(),
    })
    setBusy(false)
    if (err) {
      setError("Sorry — that didn't send. Please call or email me directly and I'll pick it up.")
      return
    }
    setSent(true)
  }

  return (
    <>
      <div className="site-hero-wash border-b border-[var(--line)]">
        <Container className="py-16 sm:py-20">
          <div className="site-rise max-w-3xl">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="site-display text-4xl sm:text-5xl">Let's get it sorted.</h1>
            <Lede className="mt-6">
              Call, email, or send a message below. Describe the problem however you like — "the
              internet's gone funny" is a perfectly good start.
            </Lede>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Direct contact */}
            <div>
              <H2 className="!text-2xl">Get in touch directly</H2>
              <div className="site-rule my-6" />

              <a
                href={`tel:${PHONE}`}
                className="group flex items-start gap-4 rounded-2xl border border-[var(--line)] bg-white p-6 transition hover:border-[var(--accent)]"
              >
                <span className="mt-0.5 text-[var(--accent-deep)]">
                  <IconPhone />
                </span>
                <span>
                  <span className="block text-[13px] font-semibold uppercase tracking-wider text-[var(--ink-soft)]">
                    Phone
                  </span>
                  <span className="site-display block text-xl group-hover:text-[var(--accent-deep)]">
                    {PHONE_DISPLAY}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="group mt-4 flex items-start gap-4 rounded-2xl border border-[var(--line)] bg-white p-6 transition hover:border-[var(--accent)]"
              >
                <span className="mt-0.5 text-[var(--accent-deep)]">
                  <IconMail />
                </span>
                <span className="min-w-0">
                  <span className="block text-[13px] font-semibold uppercase tracking-wider text-[var(--ink-soft)]">
                    Email
                  </span>
                  <span className="site-display block break-all text-xl group-hover:text-[var(--accent-deep)]">
                    {EMAIL}
                  </span>
                </span>
              </a>

              <div className="mt-8 rounded-2xl border border-[var(--line)] bg-[var(--stone-deep)] p-6">
                <h3 className="site-display text-lg">When I'm available</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                  Evenings and weekends, across Bath and the surrounding villages. Leave a message any
                  time and I'll come back to you.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              {sent ? (
                <div className="rounded-2xl border border-[var(--line)] bg-white p-10 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)]/10">
                    <IconCheck />
                  </span>
                  <h2 className="site-display mt-5 text-2xl">Thank you — message received.</h2>
                  <p className="mx-auto mt-3 max-w-md text-[16px] leading-relaxed text-[var(--ink-soft)]">
                    I'll get back to you shortly. If it's urgent, please give me a ring on{' '}
                    <a href={`tel:${PHONE}`} className="font-semibold text-[var(--accent-deep)]">
                      {PHONE_DISPLAY}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="rounded-2xl border border-[var(--line)] bg-white p-8 sm:p-10">
                  <H2 className="!text-2xl">Send a message</H2>
                  <div className="site-rule my-6" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className={label}>Your name *</span>
                      <input className={field} value={form.name} onChange={(e) => set('name', e.target.value)} autoComplete="name" />
                    </label>
                    <label className="block">
                      <span className={label}>Phone</span>
                      <input className={field} value={form.phone} onChange={(e) => set('phone', e.target.value)} autoComplete="tel" inputMode="tel" />
                    </label>
                    <label className="block">
                      <span className={label}>Email</span>
                      <input className={field} type="email" value={form.email} onChange={(e) => set('email', e.target.value)} autoComplete="email" />
                    </label>
                    <label className="block">
                      <span className={label}>Where are you?</span>
                      <input className={field} value={form.area} onChange={(e) => set('area', e.target.value)} placeholder="e.g. Combe Down" />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className={label}>What do you need help with?</span>
                      <select className={field} value={form.service} onChange={(e) => set('service', e.target.value)}>
                        <option value="">Not sure / something else</option>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block sm:col-span-2">
                      <span className={label}>Tell me a bit more</span>
                      <textarea
                        className={field}
                        rows={5}
                        value={form.message}
                        onChange={(e) => set('message', e.target.value)}
                        placeholder="What's happening, and when it started"
                      />
                    </label>
                  </div>

                  {error && (
                    <div className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-[15px] text-red-700" role="alert">
                      {error}
                    </div>
                  )}

                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      disabled={busy}
                      className="inline-flex items-center justify-center rounded-full bg-[var(--accent-deep)] px-7 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-px hover:bg-[var(--accent)] disabled:opacity-60"
                    >
                      {busy ? 'Sending…' : 'Send message'}
                    </button>
                    <p className="text-[14px] text-[var(--ink-soft)]">
                      Please include a phone number or email so I can reply.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
