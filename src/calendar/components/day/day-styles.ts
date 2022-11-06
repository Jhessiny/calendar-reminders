import { makeStyles } from '~/theme'

export const useStyles = makeStyles()(() => ({
  day: {
    width: '16rem',
    height: '12rem',
    display: 'inline-flex',
    flexDirection: 'column',
    fontSize: '1.4rem',
  },
  header: {
    background: '#eee',
    padding: '.5rem',
  },
  body: {
    width: '100%',
    flex: 1,
  },
}))
