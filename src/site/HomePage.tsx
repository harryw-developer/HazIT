import { Link } from 'react-router-dom'
import bathLandscape from '../assets/bath-landscape.jpg'
import { SERVICES } from './services'
import {
  Container,
  Eyebrow,
  H2,
  IconArrow,
  IconMail,
  IconPhone,
  Lede,
  PHONE,
  PHONE_DISPLAY,
  EMAIL,
  Section,
} from './ui'

const PROMISES = [
  {
    title: 'Evenings and weekends',
    body: 'Appointments when you’re actually home, rather than a vague weekday window you have to take time off for.',
  },
  {
    title: 'Local, not a call centre',
    body: 'Based in Bear Flat. You’ll deal with the same person every time, and I know the houses round here.',
  },
  {
    title: 'Plain English',
    body: 'I’ll explain what’s wrong and what I’m doing in words that make sense. No jargon, no talking down to you.',
  },
]

const STEPS = [
  { n: '01', title: 'Get in touch', body: 'Call, email, or send a message. Tell me what’s going on — however you’d describe it is fine.' },
  { n: '02', title: 'We find a time', body: 'Usually an evening or a weekend. I’ll give you a straight answer on what’s involved.' },
  { n: '03', title: 'Sorted properly', body: 'I fix the cause, not just the symptom, and show you what changed before I go.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero — Bath skyline */}
      <section className="relative isolate overflow-hidden">
        <img
          src={bathLandscape}
          alt="Aerial view over Bath and the Royal Crescent"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Readability wash: deepest behind the text, clearing to the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1220]/92 via-[#0a1220]/72 to-[#0a1220]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220]/60 via-transparent to-[#0a1220]/35" />
        {/* Melt into the stone page below */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--stone)] to-transparent" />

        <Container className="relative py-24 sm:py-36">
          <div className="site-rise max-w-3xl">
            <p className="site-eyebrow mb-5 !text-[#9fc0ff]">Bath · Bear Flat</p>
            <h1 className="site-display text-[2.7rem] leading-[1.06] !text-white [text-shadow:0_2px_18px_rgba(6,12,24,0.55)] sm:text-6xl">
              Local tech support
              <br />
              in Bath.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Friendly help with WiFi, computers and everyday technology — at home, in plain English.
              Based in Bear Flat, Bath, UK, working evenings and weekends, when you're actually home.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-[var(--accent-deep)] shadow-lg transition hover:-translate-y-px hover:bg-white/95"
              >
                <IconPhone /> {PHONE_DISPLAY}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/5 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/10"
              >
                Send a message <IconArrow />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <Section tone="white" className="border-y border-[var(--line)]">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>What I help with</Eyebrow>
            <H2>Whatever's stopped working, start here.</H2>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = s.icon
              return (
                <Link key={s.slug} to="/services" className="group block">
                  <div className="text-[var(--accent-deep)] transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Icon />
                  </div>
                  <h3 className="site-display mt-5 text-xl">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-soft)]">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--accent-deep)]">
                    Read more
                    <IconArrow className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Why */}
      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Eyebrow>Why HazIT</Eyebrow>
              <H2>The bit most people find hardest is asking.</H2>
              <Lede className="mt-6">
                There's no such thing as a silly question here. Most of what I'm called out for is
                quick to fix once someone takes a proper look.
              </Lede>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-1">
              {PROMISES.map((p) => (
                <div key={p.title} className="bg-[var(--stone)] p-7">
                  <h3 className="site-display text-lg">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-soft)]">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section>
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>How it works</Eyebrow>
            <H2>Simple, and no surprises.</H2>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n}>
                <div className="site-display text-3xl text-[var(--accent)] opacity-40">{s.n}</div>
                <div className="site-rule my-4" />
                <h3 className="site-display text-xl">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-soft)]">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA — bookends the hero, tinted to sit in the same palette */}
      <section className="relative isolate overflow-hidden">
        <img
          src={bathLandscape}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-[50%_72%]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#101a2c]/93 via-[#132038]/88 to-[#1b2438]/85" />
        {/* Warm stone glow so it belongs to the rest of the page */}
        <div className="absolute inset-0 bg-[radial-gradient(38rem_20rem_at_18%_15%,rgba(214,188,140,0.18),transparent_65%)]" />
        {/* Soft joins top and bottom */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--stone)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--stone-deep)] to-transparent" />

        <Container className="relative py-24 text-center sm:py-28">
          <h2 className="site-display text-3xl !text-white sm:text-4xl">Something not working?</h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-white/75">
            Give me a ring and describe it however you like — "the internet's gone funny" is a
            perfectly good start.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[var(--accent-deep)] shadow-lg transition hover:-translate-y-px"
            >
              <IconPhone /> {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/10"
            >
              <IconMail /> {EMAIL}
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
