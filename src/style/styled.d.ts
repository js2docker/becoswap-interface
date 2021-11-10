// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from 'becoswap-toolkit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}
