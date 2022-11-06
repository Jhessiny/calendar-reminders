import { DayModel } from '~/models'
import { useStyles } from './day-styles'

interface Props {
  day: DayModel
}

export const Day = ({ day }: Props) => {
  const { classes } = useStyles()
  return (
    <td>
      <div className={classes.day}>
        <div className={classes.header}>{day.day}</div>
        <div className={classes.body}>
          {day.reminders.map((item) => (
            <p key={item.text}>{item.text}</p>
          ))}
        </div>
      </div>
    </td>
  )
}
