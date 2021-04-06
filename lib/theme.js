import base from '@hackclub/theme'
import { merge } from 'theme-ui'

const theme = base

const colors = {
  fuschia: '#ff2467',
  pink: '#ff707a',
  lilac: '#849de1',
  yellow: '#ffaf26',
  light: '#ffeaeb',
  indigo: '#3b47a8',
  purple: '#8057c5'
}

theme.colors = merge(base.colors, {
  ...colors,
  primary: colors.indigo,
  accent: colors.fuschia,
  modes: {
    dark: {
      primary: colors.lilac,
      accent: colors.yellow
    }
  }
})

theme.fonts.heading = `"Space Grotesk", ${base.fonts.heading}`
theme.fonts.body = `"Space Mono", ${base.fonts.heading}`

export default theme
