import { memo } from 'react'
import { weekDaysLabels } from '~/contants'
import useCalendar from '~/hooks/use-calendar'
import { useStyles } from './calendar-styles'
import { CalendarHeader, Week } from './components'

const Calendar = () => {
  const { getWeeks, selectedDate, getNextMonth, getPreviousMonth } = useCalendar()
  const { classes } = useStyles()

  const weeks = getWeeks()

  return (
    <>
      <CalendarHeader
        selectedDate={selectedDate}
        goNext={getNextMonth}
        goPrevious={getPreviousMonth}
      />
      <table className={classes.table}>
        <thead>
          <tr>
            {weekDaysLabels.map((label) => (
              <th key={label}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, index) => (
            <Week key={index} days={week} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default memo(Calendar)
