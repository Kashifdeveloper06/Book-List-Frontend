import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { BookCardStyles } from './styles';
import { IBookCard } from '../Interfaces/interfaces';

const BookCard = (props: IBookCard) => {
  const { navigateFunction, item } = props;
  return (
    <Card onPress={navigateFunction} style={{ borderRadius: 0, width: '49.5%' }}>
      <Image
        source={item.img}
        style={BookCardStyles.imageStyle}
        resizeMode="stretch"
      />

      <Card.Content style={{ paddingTop: 5 }}>
        <Text style={BookCardStyles.cardTitle}>{item.title}</Text>
        <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={BookCardStyles.cardDiscount}>{item.discount}</Text>
          <Text style={BookCardStyles.cardPrice}>{item.price}</Text>
        </View>
      </Card.Content>
    </Card>
  )
};
export default BookCard;