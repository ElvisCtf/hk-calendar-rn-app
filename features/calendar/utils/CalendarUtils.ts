
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

export function getCalendar(year: number, month: number) {
    let result: DayModel[] = [];
    
    const thisMonth = getThisMonthIndices(year, month);
    let j = 1;
    let k = 1;
    let l = getPrevMonthStartDate(year, month, thisMonth.startIndex - 7);

    for (let i = 0; i < 42; i++) {
        if (i < 7) {
            result.push({key: `${i}`, type: CardType.Header, label: weekdaysStartWithSUN[i]});
        } else if (i >= thisMonth.startIndex && i <= thisMonth.endIndex) {
            result.push({key: `${i}`, type: i % 7 == 0 ? CardType.Holiday : CardType.Day, label: `${j}`});
            j+=1;
        } else if (i > thisMonth.startIndex) {
            result.push({key: `${i}`, type: CardType.Empty, label: `${k}`});
            k+=1;
        } else {
            result.push({key: `${i}`, type: CardType.Empty, label: `${l}`});
            l+=1
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
    if (month - 1 == 0) {
        month = 12;
        year-=1;
    }
    return getLastDate(year, month) - offset;
}

function getStartDay(year: number, month: number) {
    // month is zero-based (January is 0, February is 1, ..., December is 11), so it need to be reduced by 1 first
    return (new Date(year, month - 1, 1)).getDay();
}

function getLastDate(year: number, month: number) {
    // 0 as the 3rd parameter means asking for the last day of the previous month, so it no need to be reduced by 1
    return (new Date(year, month, 0)).getDate();
}