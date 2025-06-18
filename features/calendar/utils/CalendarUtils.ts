import { HolidayModel } from "../services/models/HolidayModel";

const weekdaysStartWithSUN = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

type DayModel = {
    key: string,
    type: CardType,
    label: string,
};

export enum CardType {
    Header,
    Day,
    Holiday,
    Empty
}

export function getCurrentYear() {
    return (new Date).getFullYear()
}

export function getCurrentMonth() {
    return (new Date).getMonth() + 1
}

export function getCalendar(year: number, month: number, isShowThisMonthOnly: boolean, holidays: HolidayModel[]) {
    let result: DayModel[] = [];
    
    const thisMonth = getThisMonthIndices(year, month);
    let currIndex = 1;
    let prevIndex = getPrevMonthStartDate(year, month, thisMonth.startIndex - 7);
    let nextIndex = 1;

    for (let i = 0; i < 42; i++) {
        if (i < 7) {
            // add header card SUN ~ SAT
            result.push({key: `${i}`, type: CardType.Header, label: weekdaysStartWithSUN[i]});
        } else if (i >= thisMonth.startIndex && i <= thisMonth.endIndex) {
            // add selected month date card
            const isHoliday = i % 7 == 0 || checkIsHoliday(month, currIndex, holidays);
            result.push({key: `${i}`, type: isHoliday ? CardType.Holiday : CardType.Day, label: `${currIndex}`});
            currIndex+=1;
        } else if (i < thisMonth.startIndex && !isShowThisMonthOnly) {
            // add previous month date card
            result.push({key: `${i}`, type: CardType.Empty, label: `${prevIndex}`});
            prevIndex+=1
        } else if (i > thisMonth.endIndex && !isShowThisMonthOnly){
            // add next month date card
            result.push({key: `${i}`, type: CardType.Empty, label: `${nextIndex}`});
            nextIndex+=1;
        } else {
            // add empty text card
            result.push({key: `${i}`, type: CardType.Empty, label: ''});
        }
    }
    return result;
}

function getThisMonthIndices(year: number, month: number) {
    const startIndex = 7 + getStartDay(year, month);
    const endIndex = startIndex + getLastDate(year, month) - 1;
    return {
        startIndex: startIndex,
        endIndex: endIndex
    };
}

function getPrevMonthStartDate(year: number, month: number, offset: number) {
    month-=1;
    if (month == 0) {
        month = 12;
        year-=1;
    }
    return getLastDate(year, month) - offset + 1;
}

function getStartDay(year: number, month: number) {
    // month is zero-based (January is 0, February is 1, ..., December is 11), so it need to be reduced by 1 first
    return (new Date(year, month - 1, 1)).getDay();
}

function getLastDate(year: number, month: number) {
    // 0 as the 3rd parameter means asking for the last day of the previous month
    return (new Date(year, month, 0)).getDate();
}

function checkIsHoliday(month: number, day: number, holidays: HolidayModel[]) {
    for (let i = 0; i < holidays.length; i+=1) {
        if (holidays[i].day === day && holidays[i].month === month) {
            return true;
        }
    }
    return false;
}