import { useState } from 'react'
import { DayModel } from '~/models'

const useCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const getNextMonth = () => {
    const selectedMonth = selectedDate.getMonth()
    const selectedYear = selectedDate.getFullYear()

    const nextMonth = selectedMonth === 11 ? 0 : selectedMonth + 1
    const nextYear = selectedMonth === 11 ? selectedYear + 1 : selectedYear

    const nextDate = new Date(nextYear, nextMonth, 1)
    setSelectedDate(nextDate)
  }

  const getPreviousMonth = () => {
    const selectedMonth = selectedDate.getMonth()
    const selectedYear = selectedDate.getFullYear()

    const nextMonth = selectedMonth === 0 ? 11 : selectedMonth - 1
    const nextYear = selectedMonth === 0 ? selectedYear - 1 : selectedYear

    const nextDate = new Date(nextYear, nextMonth, 1)
    setSelectedDate(nextDate)
  }

  const getDaysInWeek = ({
    start,
    lastMonthEnd,
    currentMonthEnd,
  }: {
    start: number
    lastMonthEnd?: number
    currentMonthEnd?: number
  }): DayModel[] => {
    const weekDays = new Array(7).fill(null)
    let counter = start
    weekDays.forEach((day, index) => {
      const dayItem = { day: counter, reminders: [] }
      weekDays[index] = dayItem
      counter++
      if (lastMonthEnd && counter > lastMonthEnd) counter = 1
      if (currentMonthEnd && counter > currentMonthEnd) counter = 1
    })
    return weekDays
  }

  const getWeeks = () => {
    const currentMonth = selectedDate.getMonth()
    const currentYear = selectedDate.getFullYear()
    const monthTotalDays = new Date(currentYear, currentMonth + 1, 0).getDate()
    const monthWeekStart = new Date(currentYear, currentMonth, 1).getDay()
    const totalWeeks = Array(Math.ceil((monthTotalDays + monthWeekStart) / 7)).fill(null)
    const previousMonthLastDay = new Date(currentYear, currentMonth, 0).getDate()
    const firstWeekEmptyPositions = monthWeekStart === 0 ? 0 : monthWeekStart - 1

    const firstWeekSundayDay =
      firstWeekEmptyPositions === 0 ? 1 : previousMonthLastDay - firstWeekEmptyPositions
    console.log(previousMonthLastDay, firstWeekEmptyPositions)
    totalWeeks.forEach((_, index) => {
      if (index === 0) {
        totalWeeks[index] = getDaysInWeek({
          start: firstWeekSundayDay,
          lastMonthEnd: previousMonthLastDay,
        })
        return
      }
      const lastWeekDay: DayModel = totalWeeks[index - 1][6]
      if (index === totalWeeks.length - 1) {
        totalWeeks[index] = getDaysInWeek({
          start: lastWeekDay.day + 1,
          currentMonthEnd: monthTotalDays,
        })
        return
      }
      totalWeeks[index] = getDaysInWeek({ start: lastWeekDay.day + 1 })
    })
    return totalWeeks
  }

  return { getWeeks, selectedDate, getNextMonth, getPreviousMonth }
}

export default useCalendar
