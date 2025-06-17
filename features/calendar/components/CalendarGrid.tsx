import { FlatList, Text, View, StyleSheet, Dimensions, ViewStyle } from "react-native";
import { getCalendar, CardType } from "../utils/CalendarUtils";

const cardMargin = 3;
const cardWidth = (Dimensions.get('window').width - 32 - (7 * cardMargin * 2)) / 7;

type CalendarGridProps = {
    year: number,
    month: number,
    isShowThisMonthOnly: boolean
};

const CalendarGrid: React.FC<CalendarGridProps> = ({year, month, isShowThisMonthOnly}) => {
    let array = getCalendar(year, month, isShowThisMonthOnly);

    return (
        <FlatList
            data={array}
            numColumns={7}
            renderItem={({ item }) => (
            <View style={getCardStyle(item.type)}>
                <Text>{item.label}</Text>
            </View>
            )}
            keyExtractor={(item) => item.key}
        />
    );
}

export default CalendarGrid;

function getCardStyle(type: CardType): ViewStyle {
    switch (type) {
        case CardType.Header:
            return styles.header;
        case CardType.Day:
            return styles.day;
        case CardType.Holiday:
            return styles.holiday;
        case CardType.Empty:
                return styles.empty
    }
}

const styles = StyleSheet.create({
    header: {
        margin: cardMargin,
        height: 32,
        width: cardWidth,
        alignItems: 'center',
        justifyContent: 'center'
    },
    day: {
        margin: cardMargin,
        height: 48,
        width: cardWidth,
        borderRadius: 8,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center'
    },
    holiday: {
        margin: cardMargin,
        height: 48,
        width: cardWidth,
        borderRadius: 8,
        backgroundColor: '#FF8A8A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    empty: {
        margin: cardMargin,
        height: 48,
        width: cardWidth,
        alignItems: 'center',
        justifyContent: 'center'
    }
});