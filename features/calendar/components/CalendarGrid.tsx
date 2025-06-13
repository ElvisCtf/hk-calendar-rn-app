import { FlatList, Text, View, StyleSheet, Dimensions, ViewStyle } from "react-native";


const cardMargin = 3;
const cardWidth = (Dimensions.get('window').width - 32 - (7 * cardMargin * 2)) / 7;
const weekdaysStartWithSUN = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const weekdaysStartWithMON = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

enum CardType {
    Header,
    Day,
    Holiday,
    Empty
}

type CalendarGridProps = {
    year: number,
    month: number
};

type DayModel = {
    key: string,
    type: CardType,
    label: string,
};

function getCalendar(year: number, month: number) {
    const startingWeekday = (new Date(year, month - 1, 1)).getDay();
    const numberOfDays = (new Date(year, month, 0)).getDate();
    const startingIndex = 7 + startingWeekday
    const endingIndex = startingIndex + numberOfDays

    let result: DayModel[] = [];
    let j = 1
    for (let i = 0; i < 42; i++) {
        if (i < 7) {
            result.push({key: `${i}`, type: CardType.Header, label: weekdaysStartWithSUN[i]})
        } else if (i >= startingIndex && i <= endingIndex) {
            result.push({key: `${i}`, type: i % 7 == 0 ? CardType.Holiday : CardType.Day, label: `${j}`})
            j+=1;
        } else {
            result.push({key: `${i}`, type: CardType.Empty, label: ""})
        }
    }
    return result;
}

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


const CalendarGrid: React.FC<CalendarGridProps> = ({year, month}) => {
    let array = getCalendar(year, month)

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