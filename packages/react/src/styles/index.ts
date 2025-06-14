import { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space } from '@isz-dsystem/tokens'
import { createStitches, defaultThemeMap } from "@stitches/react"

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    radii,
    space,
    lineHeights
  }
})