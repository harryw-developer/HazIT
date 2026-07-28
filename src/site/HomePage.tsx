import { Link } from 'react-router-dom'
import { SERVICES } from './services'
import {
  Button,
  Container,
  Eyebrow,
  H2,
  IconArrow,
  IconCheck,
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
      {/* Hero */}
      <div className="site-hero-wash">
        <Container className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="site-rise max-w-3xl">
            <Eyebrow>Bath · Bear Flat</Eyebrow>
            <h1 className="site-display text-[2.6rem] leading-[1.08] sm:text-6xl">
              Local tech support
              <br />
              in Bath.
            </h1>
            <Lede className="mt-7 max-w-2xl">
              Friendly help with WiFi, computers and everyday technology — at home, in plain English.
              Covering Bath and the surrounding villages, evenings and weekends, when you're actually
              home.
            </Lede>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={`tel:${PHONE}`}>
                <IconPhone /> {PHONE_DISPLAY}
              </Button>
              <Button to="/contact" variant="outline">
                Send a message <IconArrow />
              </Button>
            </div>
          </div>
        </Container>
      </div>

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

      {/* WiFi feature — the signature service */}
      <Section tone="deep" className="border-y border-[var(--line)]">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <Eyebrow>Bath's speciality</Eyebrow>
              <H2>Georgian stone is lovely. WiFi disagrees.</H2>
              <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-[var(--ink-soft)]">
                <p>
                  Thick walls, converted flats and a router stuck in the wrong corner make dead spots
                  that no amount of rebooting will fix.
                </p>
                <p>
                  I survey the house to find exactly where the signal gives up, then fix it properly —
                  mesh, extra access points, or powerline where you can't run cable and can't drill.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/services" variant="outline">
                  How it works <IconArrow />
                </Button>
              </div>
            </div>

            <ul className="space-y-4 rounded-2xl border border-[var(--line)] bg-white p-8">
              {[
                'Full survey to find the dead spots',
                'Mesh systems and additional access points',
                'Powerline where cable isn’t an option',
                'Router setup and secure configuration',
                'Parental controls and content filtering',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[16px]">
                  <IconCheck />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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

      {/* CTA */}
      <Section tone="white" className="border-t border-[var(--line)]">
        <Container>
          <div className="overflow-hidden rounded-3xl bg-[var(--accent-deep)] px-8 py-14 text-center sm:px-16">
            <h2 className="site-display text-3xl text-white sm:text-4xl">
              Something not working?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-white/70">
              Give me a ring and describe it however you like — "the internet's gone funny" is a
              perfectly good start.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[var(--accent-deep)] transition hover:-translate-y-px hover:shadow-lg"
              >
                <IconPhone /> {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-white transition hover:border-white/60"
              >
                <IconMail /> {EMAIL}
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
