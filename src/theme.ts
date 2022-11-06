import { createMakeAndWithStyles } from 'tss-react' // "tss-react/compat" if your project is using Typescript < 4.4

function useTheme() {
  return {
    primaryColor: '#32CD32',
  }
}

export const { makeStyles, withStyles, useStyles } = createMakeAndWithStyles({ useTheme })
