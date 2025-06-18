import { ApiClient } from "@/services/ApiClient";
import { HolidayDataResponseDto } from "./models/HolidayResponseDto";

const BASE_URL = "https://www.1823.gov.hk/common/ical/";
const apiService = new ApiClient(BASE_URL);

export enum Language {
    EN, // English
    TC, // Traditional Chinese
    SC, // Simplified Chinese
}

export function getHolidayData(language: Language) {
    let endpoint = "/en.json";
    if (language === Language.TC) {
        endpoint = "/tc.json";
    } else if(language === Language.SC) {
        endpoint = "/sc.json";
    }
    return apiService.getData<HolidayDataResponseDto>(endpoint);
}