import { MenuEntry } from '@becoswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://bsc.becoswap.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '#comingsoon',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '#comingsoon',
  },
  {
    label: 'Discord',
    icon: 'ReferralIcon',
    href: 'https://discord.gg/id',
  }

]

export default config
