import { SERVICES } from './services'
import {
  Button,
  Container,
  Eyebrow,
  H2,
  IconArrow,
  IconCheck,
  IconPhone,
  Lede,
  PHONE,
  PHONE_DISPLAY,
  Section,
} from './ui'

export default function ServicesPage() {
  return (
    <>
      <div className="site-hero-wash border-b border-[var(--line)]">
        <Container className="py-16 sm:py-20">
          <div className="site-rise max-w-3xl">
            <Eyebrow>Services</Eyebrow>
            <h1 className="site-display text-4xl sm:text-5xl">
              Help with the technology you actually use.
            </h1>
            <Lede className="mt-6">
              From WiFi that won't reach the back bedroom to a new laptop that needs everything moved
              across — here's what I can take off your hands.
            </Lede>
          </div>
        </Container>
      </div>

      {SERVICES.map((s, i) => {
        const Icon = s.icon
        const alt = i % 2 === 1
        return (
          <Section
            key={s.slug}
            tone={alt ? 'white' : 'stone'}
            className={alt ? 'border-y border-[var(--line)]' : ''}
          >
            <Container>
              <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--stone)] text-[var(--accent-deep)]">
                      <Icon />
                    </span>
                    <span className="site-eyebrow !mb-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <H2 className="mt-6">{s.title}</H2>
                  <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-[var(--ink-soft)]">
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>

                <ul className="space-y-4 self-start rounded-2xl border border-[var(--line)] bg-[var(--stone-deep)] p-8">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[16px]">
                      <IconCheck />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Container>
          </Section>
        )
      })}

      <Section tone="deep" className="border-t border-[var(--line)]">
        <Container className="text-center">
          <H2>Not sure which one you need?</H2>
          <Lede className="mx-auto mt-4 max-w-xl">
            That's completely fine — describe the problem and I'll tell you straight what's involved.
          </Lede>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={`tel:${PHONE}`}>
              <IconPhone /> {PHONE_DISPLAY}
            </Button>
            <Button to="/contact" variant="outline">
              Send a message <IconArrow />
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
