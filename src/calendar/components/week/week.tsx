import { DayModel } from '~/models'
import { Day } from '~/calendar/components'
import { useStyles } from './week-styles'

interface Props {
  days: DayModel[]
}

export const Week = ({ days }: Props) => {
  const { classes } = useStyles()
  return (
    <tr className={classes.row}>
      {days.map((day) => (
        <Day key={day.day} day={day} />
      ))}
    </tr>
  )
}
