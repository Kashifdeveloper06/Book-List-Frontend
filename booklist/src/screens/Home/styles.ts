import { StyleSheet, Platform } from 'react-native';
const primaryBg = '#242424';
const secondaryBg = '#494949';
const primaryText = '#FFFFFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingHorizontal: 10, // Add horizontal padding to create space between columns
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default styles;