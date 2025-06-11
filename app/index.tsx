import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from 'react';

export default function Index() {
  const [year, setYear] = useState(2025)
  const [month, setMonth] = useState(6)

  function nextMonth() {
    setMonth(prev => prev >= 12 ? 1 : prev + 1)
  }

  function prevMonth() {
    setMonth(prev => prev <= 1 ? 12 : prev - 1)
  }

  return (
    <View style={styles.container}>
      <View style={styles.hStack}>
        <Text style={styles.title}>year</Text>
        
        <TouchableOpacity onPress={() => setYear(prev => prev + 1)}>
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>

        <Text style={styles.text}>{year}</Text>
        
        <TouchableOpacity onPress={() => setYear(prev => prev - 1)}>
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
      </View>

      <Vspacer size={16} />

      <View style={styles.hStack}>
        <Text style={styles.title}>month</Text>

        <TouchableOpacity onPress={nextMonth}>
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>

        <Text style={styles.text}>{month}</Text>

        <TouchableOpacity onPress={prevMonth}>
          <Text style={styles.icon}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Vspacer = ({ size = 10 }) => <View style={{ height: size }} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 16
  },

  vStack: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16
  },

  hStack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    width: '100%'
  },

  title: {
    fontSize: 17,
    width: 64
  },

  text: {
    fontSize: 17,
    textAlign: 'center',
    width: 48,
  },

  icon: {
    fontSize: 24,
    color: '#841584'
  }
});
