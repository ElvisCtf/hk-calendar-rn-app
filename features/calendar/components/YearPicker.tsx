import { Text, View, TouchableOpacity, StyleSheet } from "react-native";


type YearPickerProps = {
    year: number,
    setYear: React.Dispatch<React.SetStateAction<number>>;
};

const YearPicker: React.FC<YearPickerProps> = ({year, setYear}) => {
    return (
        <View style={styles.hStack}>
            <Text style={styles.title}>year</Text>
        
            <View style={styles.group}>
              <TouchableOpacity onPress={() => setYear(prev => prev - 1)}>
                <Text style={styles.icon}>-</Text>
              </TouchableOpacity>
          
              <Text style={styles.text}>{year}</Text>
          
              <TouchableOpacity onPress={() => setYear(prev => prev + 1)}>
                <Text style={styles.icon}>+</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
}

export default YearPicker;

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