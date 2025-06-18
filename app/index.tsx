import { Text, StyleSheet } from "react-native";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import YearPicker from "@/features/calendar/components/YearPicker";
import MonthPicker from "@/features/calendar/components/MonthPicker";
import CalendarGrid from "@/features/calendar/components/CalendarGrid";
import Spacer from "@/common/components/Spacer";
import { getCurrentMonth, getCurrentYear } from "@/features/calendar/utils/CalendarUtils";
import FilterSwitch from "@/features/calendar/components/FilterSwitch";
import { toastConfig } from "@/features/calendar/components/ToastConfig";


const Index = () => {
    const [year, setYear] = useState(getCurrentYear());
    const [month, setMonth] = useState(getCurrentMonth());
    const [isShowThisMonthOnly, setIsShowThisMonthOnly] = useState(false);

    return (
        <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <YearPicker year={year} setYear={setYear}/>
            <Spacer height={16} />

            <MonthPicker month={month} setMonth={setMonth}/>
            <Spacer height={16} />

            <FilterSwitch isFilter={isShowThisMonthOnly} setIsFilter={setIsShowThisMonthOnly} title="This month only"/>
            <Spacer height={32} />

            <CalendarGrid year={year} month={month} isShowThisMonthOnly={isShowThisMonthOnly}/>

            <Toast config={toastConfig}/>
        </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});
