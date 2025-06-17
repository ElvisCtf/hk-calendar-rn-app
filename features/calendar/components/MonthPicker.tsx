import { Text, View, TouchableOpacity, StyleSheet } from "react-native";


type MonthPickerProps = {
    month: number,
    setMonth: React.Dispatch<React.SetStateAction<number>>;
};

const MonthPicker: React.FC<MonthPickerProps> = ({month, setMonth}) => {
    return (
        <View style={styles.hStack}>
            <Text style={styles.title}>month</Text>

            <View style={styles.group}>
              <TouchableOpacity onPress={() => setMonth(prev => prev - 1)}>
                  <Text style={styles.icon}>-</Text>
              </TouchableOpacity>
          
              <Text style={styles.text}>{month}</Text>
          
              <TouchableOpacity onPress={() => setMonth(prev => prev + 1)}>
                  <Text style={styles.icon}>+</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
}

export default MonthPicker;

const styles = StyleSheet.create({
    hStack: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        width: "100%"
    },
    group: {
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontSize: 17,
        width: 64
    },
    text: {
        fontSize: 17,
        textAlign: "center",
        width: 48,
    },
    icon: {
        fontSize: 24,
        textAlign: "center",
        color: "#841584",
        width: 24
    }
});