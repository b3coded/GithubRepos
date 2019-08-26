import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,

    elevation: 8,
    borderWidth: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowColor: '#ccc',
  },
});
export default styles;
