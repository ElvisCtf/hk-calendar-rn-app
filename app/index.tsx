import { StyleSheet } from "react-native";
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import YearPicker from "@/features/calendar/components/YearPicker";
import MonthPicker from "@/features/calendar/components/MonthPicker";
import CalendarGrid from "@/features/calendar/components/CalendarGrid";
import Spacer from "@/common/components/Spacer";


var date = new Date();
var currentYear = date.getFullYear()
var currentMonth = date.getMonth() + 1

const Index = () => {
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);
  
  function nextMonth() {
    setMonth(prev => prev >= 12 ? 1 : prev + 1);
  }

  function prevMonth() {
    setMonth(prev => prev <= 1 ? 12 : prev - 1);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <YearPicker year={year} setYear={setYear}/>

        <Spacer height={16} />

        <MonthPicker month={month} setMonth={setMonth}/>

        <Spacer height={32} />

        <CalendarGrid year={year} month={month}/>

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
