import { StyleSheet, Platform } from 'react-native';
const primaryBg = '#242424';
const secondaryBg = '#494949';
const primaryText = '#FFFFFF';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  imageStyle: {
    height: 400,
    width: '100%'
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  cardDescriptionContainer: {
    paddingTop: 10,
  },
  cardDescription: {
    fontSize: 12,
    fontWeight: '400',
  },
  cardPrices: {
    display: 'flex',
    paddingTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  cardDiscount: {
    color: '#FF003E',
  },
  cardPrice: {
    fontWeight: "700",
    fontSize: 16,
  }
});

export default styles;