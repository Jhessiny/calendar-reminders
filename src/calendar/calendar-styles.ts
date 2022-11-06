import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()(() => ({
  body: {
    '& *': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
  },
}))
