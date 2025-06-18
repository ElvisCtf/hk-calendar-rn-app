export type HolidayDataResponseDto = {
  vcalendar: Vcalendar[]
}

export type Vcalendar = {
  prodid: string
  version: string
  calscale: string
  "x-wr-timezone": string
  "x-wr-calname": string
  "x-wr-caldesc": string
  vevent: Vevent[]
}

export type Vevent = {
  dtstart: [string, Dtstart]
  dtend: [string, Dtend]
  dtstamp: string
  transp: string
  uid: string
  summary: string
}

export type Dtstart = {
  value: string
}

export type Dtend = {
  value: string
}