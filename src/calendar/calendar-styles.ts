import { makeStyles } from '~/theme'

export const useStyles = makeStyles()(() => ({
  table: {
    borderCollapse: 'collapse',
    '&, td, th': { border: '1px solid #ccc' },
  },
}))
