interface Props {
  selectedDate: Date
  goPrevious: () => void
  goNext: () => void
}

export const CalendarHeader = ({ selectedDate, goNext, goPrevious }: Props) => {
  return (
    <div>
      <button onClick={goPrevious}>previous</button>
      <div>{selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</div>
      <button onClick={goNext}>next</button>
    </div>
  )
}
