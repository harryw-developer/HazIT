import {
  Button,
  Container,
  Eyebrow,
  IconArrow,
  IconPhone,
  Lede,
  PHONE,
  PHONE_DISPLAY,
  Section,
} from './ui'

const IN_BATH = [
  'Bear Flat',
  'Widcombe',
  'Combe Down',
  'Odd Down',
  'Southdown',
  'Oldfield Park',
  'Twerton',
  'Weston',
  'Newbridge',
  'Lansdown',
  'Larkhall',
  'Walcot',
  'Bathwick',
  'Claverton Down',
]

const VILLAGES = [
  'Batheaston',
  'Bathampton',
  'Bathford',
  'Claverton',
  'Monkton Combe',
  'Limpley Stoke',
  'Freshford',
  'Combe Hay',
  'Englishcombe',
  'Newton St Loe',
  'Corston',
  'Saltford',
  'Peasedown St John',
  'Charlcombe',
]

function PlaceList({ title, places }: { title: string; places: string[] }) {
  return (
    <div>
      <h3 className="site-display text-xl">{title}</h3>
      <div className="site-rule my-5" />
      <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-[16px] text-[var(--ink-soft)]">
        {places.map((p) => (
          <li key={p} className="flex items-center gap-2.5">
            <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function AreasPage() {
  return (
    <>
      <div className="site-hero-wash border-b border-[var(--line)]">
        <Container className="py-16 sm:py-20">
          <div className="site-rise max-w-3xl">
            <Eyebrow>Areas covered</Eyebrow>
            <h1 className="site-display text-4xl sm:text-5xl">Bath, and the villages around it.</h1>
            <Lede className="mt-6">
              Based in Bear Flat, so most of Bath is a short hop. I also cover the surrounding
              villages — if you're a little further out, just ask.
            </Lede>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <PlaceList title="Around Bath" places={IN_BATH} />
            <PlaceList title="Surrounding villages" places={VILLAGES} />
          </div>

          <div className="mt-16 rounded-2xl border border-[var(--line)] bg-[var(--stone-deep)] p-8 sm:p-10">
            <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto]">
              <div>
                <h3 className="site-display text-2xl">Don't see your village?</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-[var(--ink-soft)]">
                  The list isn't exhaustive. Give me a ring and if you're nearby, I'll come to you —
                  and if you're not, I'll say so honestly rather than waste your time.
                </p>
              </div>
              <Button href={`tel:${PHONE}`}>
                <IconPhone /> {PHONE_DISPLAY}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white" className="border-t border-[var(--line)]">
        <Container>
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <h3 className="site-display text-xl">Evenings and weekends</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                Appointments when you're actually home — no taking a day off work to wait in.
              </p>
            </div>
            <div>
              <h3 className="site-display text-xl">Remote where it suits</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                Small fixes and follow-ups can often be handled without a visit at all.
              </p>
            </div>
            <div>
              <h3 className="site-display text-xl">One person, start to finish</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                You'll deal with the same face each time, who remembers your setup.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Button to="/contact" variant="outline">
              Get in touch <IconArrow />
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
