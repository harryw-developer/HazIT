import { IconDevices, IconLaptop, IconRemote, IconTutorial, IconWifi } from './ui'

export interface Service {
  slug: string
  icon: typeof IconWifi
  title: string
  short: string
  body: string[]
  points: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'wifi',
    icon: IconWifi,
    title: 'WiFi and home networking',
    short: 'Dead spots found and fixed — properly, not by rebooting.',
    body: [
      'If the signal drops out in certain rooms, I survey the house to find exactly where it gives up.',
      'Then I put a proper fix in place — a mesh system, additional access points, or powerline where you can’t run cable and can’t drill.',
    ],
    points: [
      'Full WiFi survey to find the dead spots',
      'Mesh systems and additional access points',
      'Powerline where cable isn’t an option',
      'Router setup, parental controls and content filtering',
    ],
  },
  {
    slug: 'computers',
    icon: IconLaptop,
    title: 'Computers',
    short: 'New machines set up, old ones brought back to life.',
    body: [
      'New PC, laptop and Mac setup, including moving your files, photos and email across from the old machine — so nothing gets left behind.',
      'If your current computer has slowed to a crawl, I can clean it up, get the updates in order and keep it maintained.',
    ],
    points: [
      'New PC, laptop and Mac setup',
      'Files, photos and email moved across',
      'Slow computer cleanups',
      'Updates and general maintenance',
    ],
  },
  {
    slug: 'devices',
    icon: IconDevices,
    title: 'Devices and everyday tech',
    short: 'Phones, printers, TVs and smart home kit, all talking to each other.',
    body: [
      'Phones, tablets, printers, smart TVs, streaming boxes and smart home kit. Setup, troubleshooting, and getting things talking to each other.',
      'Usually it’s the talking-to-each-other part that causes the headache — that’s the bit I enjoy sorting out.',
    ],
    points: [
      'Phones and tablets',
      'Printers that refuse to co-operate',
      'Smart TVs and streaming boxes',
      'Smart home kit',
    ],
  },
  {
    slug: 'tutorials',
    icon: IconTutorial,
    title: 'One-to-one tutorials',
    short: 'A relaxed hour learning your new device, at your own pace.',
    body: [
      'A relaxed hour learning your new device, at your own pace. No jargon, no rushing, and no making you feel silly for asking.',
      'Ask the same question three times if you need to — that’s what the hour is for.',
    ],
    points: [
      'At your own pace, in your own home',
      'Plain English, no jargon',
      'Any device — phone, tablet, laptop',
      'Ask anything, as many times as you like',
    ],
  },
  {
    slug: 'remote',
    icon: IconRemote,
    title: 'Remote support',
    short: 'Quick fixes handled without a visit.',
    body: [
      'Quick follow-ups and small fixes handled without a visit — often while we’re still on the phone.',
      'Existing customers can raise a request any time through the client portal.',
    ],
    points: ['Quick follow-ups', 'Small fixes without a visit', 'Raise a request in the client portal'],
  },
]
