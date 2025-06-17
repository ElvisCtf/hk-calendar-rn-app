import { Text, View, Switch, StyleSheet } from "react-native";


type FilterSwitchProps = {
    isFilter: boolean,
    setIsFilter: React.Dispatch<React.SetStateAction<boolean>>,
    title: string
};

const FilterSwitch: React.FC<FilterSwitchProps> = ({isFilter, setIsFilter, title}) => {
    return (
        <View style={styles.hStack}>
            <Text style={styles.title}>{title}</Text>

            <Switch
                trackColor={{false: '#DDA853', true: '#841584'}}
                thumbColor={isFilter ? '#f4f3f4' : '#3C3D37'}
                onValueChange={() => setIsFilter(prev => !prev)}
                value={isFilter}
            />
        </View>
    );
}
export default FilterSwitch;

const styles = StyleSheet.create({
  hStack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
    width: '100%'
  },
  title: {
    fontSize: 17,
    width: 130
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
    width: 48,
  }
});