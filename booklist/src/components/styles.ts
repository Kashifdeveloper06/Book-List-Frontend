import { StyleSheet, Dimensions, Platform } from 'react-native';

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
  container: {
    flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10
  },
  header: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  profileActions: {
    flexDirection: 'row', alignItems: 'center'
  },
  senderName: { fontSize: 14, fontWeight: '700', color: '#1D232B' },
  sendingTime: { fontSize: 10, fontWeight: '500', color: '#919EB6' },
  commentContent: {
    paddingTop: '2%'
  },
  commentActions: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 5,
  },
  optionButton: { flex: 0.5, alignItems: 'flex-end', paddingTop: '3%' }

});

export { BookCardStyles, CommentsStyles };