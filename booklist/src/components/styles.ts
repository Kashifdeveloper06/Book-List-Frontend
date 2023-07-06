import { StyleSheet, Dimensions, Platform } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const primaryBg = '#242424';
const secondaryBg = '#494949';
const primaryText = '#FFFFFF';

const BookCardStyles = StyleSheet.create({
  imageStyle: {
    height: 200,
    flex: 1,
    width: '100%'
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  cardDiscount: {
    color: '#FF003E',
  },
  cardPrice: {
    fontWeight: "700",
    fontSize: 16,
  }
});

const CommentsStyles = StyleSheet.create({
  header: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  profileActions: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  commentContent: {
    // paddingLeft: '13%',
    // paddingRight: '2%'
    paddingTop: '2%'
  },
  commentActions: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 5,
  }
});

export { BookCardStyles, CommentsStyles };