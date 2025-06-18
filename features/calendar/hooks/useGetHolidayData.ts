import { useEffect, useState } from "react";
import { getHolidayData, Language } from "../services/HolidayApiService";
import { HolidayModel } from "../services/models/HolidayModel";
import { getCurrentYear } from "../utils/CalendarUtils";


export function useGetHolidays(endpoint: string) {
    const currentYear = String(getCurrentYear())
    const [holidays, setHolidays] = useState<HolidayModel[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await getHolidayData(Language.EN);
            const vevents = data.vcalendar[0].vevent
            const holidays: HolidayModel[] = vevents
            .filter((item) => {
                const year = item.dtstart[0].slice(0, 4);
                return year === currentYear
            })
            .map((item) => {
                const date = item.dtstart[0];
                return {
                    month: Number(date.slice(4, 6)),
                    day: Number(date.slice(6, 8)),
                    summary: item.summary
                };
            });
            setHolidays(holidays);
        } catch (err) {
            setError(err as Error);
        }
        };

        fetchData();
    }, [endpoint]);

    return { holidays, error };
};

