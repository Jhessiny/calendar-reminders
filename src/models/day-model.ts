export interface DayModel {
  day: number
  reminders: ReminderModel[]
}

export interface ReminderModel {
  date: Date
  text: string
  location: string
}
