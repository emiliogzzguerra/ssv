const breakpoints = ['320px','576px', '768px', '992px', '1200px','1600px']

breakpoints.xs = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]
breakpoints.xxl = breakpoints[5]

export const co = {
  primaryColor : '#314E77',
  primaryColorDark : '#022859',
  secondaryColor : '#3DBC94',
  secondaryColorDark : '#2FA882',
  accentColor : '#07AEEB',
  accentColorDark : '#0879A4',
  island1 : '#8ECB41',
  island2 : '#F8D8A5',
  island3 : '#D3B596',
  island4 : '#CEE3F5',
  island5 : '#F5F7F8',
  gray1: '#F2F2F2',

}

export const mq = {
  xs: `@media screen and (min-width: ${breakpoints[0]})`,
  sm: `@media screen and (min-width: ${breakpoints[1]})`,
  md: `@media screen and (min-width: ${breakpoints[2]})`,
  lg: `@media screen and (min-width: ${breakpoints[3]})`,
  xl: `@media screen and (min-width: ${breakpoints[4]})`,
  xxl: `@media screen and (min-width: ${breakpoints[5]})`
};

export const flexcolumn = `
  display: flex;
  flex-direction: column;
`

export const flexrow = `
  display: flex;
  flex-direction: row;
`

export const flexcenter = `
  justify-content: center;
  align-items: center;
`

export default {
  breakpoints,
}
