import { FlatList, Text, View, StyleSheet, Dimensions } from "react-native";


const cardMargin = 2;
const cardWidth = (Dimensions.get('window').width - 32 - (7 * cardMargin * 2)) / 7;

const CalendarGrid = () => {
    return (
        <FlatList
            data={Array.from({ length: 42 }, (_, i) => ({ key: `${i}`, label: `${i + 1}` }))}
            numColumns={7}
            renderItem={({ item }) => (
            <View style={[styles.item, {width: cardWidth}]}>
                <Text>{item.label}</Text>
            </View>
            )}
            keyExtractor={(item) => item.key}
        />
    );
}

export default CalendarGrid;

const styles = StyleSheet.create({
  item: {
    margin: cardMargin,
    height: 48,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center'
  }
});