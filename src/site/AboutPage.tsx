import {
  Button,
  Container,
  Eyebrow,
  H2,
  IconArrow,
  IconPhone,
  Lede,
  PHONE,
  PHONE_DISPLAY,
  Section,
} from './ui'

const VALUES = [
  {
    title: 'No jargon',
    body: "I'll tell you what's wrong and what I'm doing in words that make sense. If I slip into jargon, pull me up on it.",
  },
  {
    title: 'No silly questions',
    body: "Ask the same thing three times if you need to. Nobody is born knowing how any of this works.",
  },
  {
    title: 'Fixed properly',
    body: "I'd rather find the actual cause than apply a patch that has you calling again in a fortnight.",
  },
  {
    title: 'Straight answers',
    body: "If something isn't worth repairing, or you don't need the thing you were about to buy, I'll say so.",
  },
]

export default function AboutPage() {
  return (
    <>
      <div className="site-hero-wash border-b border-[var(--line)]">
        <Container className="py-16 sm:py-20">
          <div className="site-rise max-w-3xl">
            <Eyebrow>About</Eyebrow>
            <h1 className="site-display text-4xl sm:text-5xl">
              A local person who answers the phone.
            </h1>
            <Lede className="mt-6">
              HazIT is friendly technical support for homes around Bath — the sort of help you'd get
              from a knowledgeable neighbour, if your neighbour happened to do this for a living.
            </Lede>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-5 text-[17px] leading-relaxed text-[var(--ink-soft)]">
              <H2 className="!text-[var(--ink)]">How it started</H2>
              <p>
                Most people don't need a big IT company. They need one person who turns up when they
                say they will, sorts the problem, and explains it without making them feel foolish.
              </p>
              <p>
                That's the whole idea behind HazIT. I'm based in Bear Flat and cover Bath and the
                villages around it, working evenings and weekends so appointments land when you're
                actually home — not in a vague weekday window you have to book time off for.
              </p>
              <p>
                A lot of what I do is WiFi. Bath's houses are wonderful and completely hostile to a
                wireless signal: thick Georgian stone, converted flats, and routers installed wherever
                the phone socket happened to be. It's a solvable problem once someone measures it
                properly rather than guessing.
              </p>
              <p>
                The rest is everyday technology — new laptops, stubborn printers, phones, smart TVs,
                and showing people how to get the most out of kit they've already paid for.
              </p>
            </div>

            <div className="self-start rounded-2xl border border-[var(--line)] bg-[var(--stone-deep)] p-8">
              <h3 className="site-display text-xl">At a glance</h3>
              <div className="site-rule my-5" />
              <dl className="space-y-4 text-[15px]">
                <div>
                  <dt className="font-semibold">Based in</dt>
                  <dd className="text-[var(--ink-soft)]">Bear Flat, Bath</dd>
                </div>
                <div>
                  <dt className="font-semibold">Covering</dt>
                  <dd className="text-[var(--ink-soft)]">Bath and the surrounding villages</dd>
                </div>
                <div>
                  <dt className="font-semibold">Hours</dt>
                  <dd className="text-[var(--ink-soft)]">Evenings and weekends</dd>
                </div>
                <div>
                  <dt className="font-semibold">Visits</dt>
                  <dd className="text-[var(--ink-soft)]">In your home, plus remote support</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white" className="border-y border-[var(--line)]">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>How I work</Eyebrow>
            <H2>Four things you can count on.</H2>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.title}>
                <h3 className="site-display text-xl">{v.title}</h3>
                <div className="site-rule my-4" />
                <p className="text-[15px] leading-relaxed text-[var(--ink-soft)]">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="deep">
        <Container className="text-center">
          <H2>Happy to talk it through first.</H2>
          <Lede className="mx-auto mt-4 max-w-xl">
            No obligation, and no charge for a sensible conversation about what you need.
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
