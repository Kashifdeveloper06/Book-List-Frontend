import React, { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';

import { Card } from 'react-native-paper';
import styles from './styles';
import { Divider } from 'react-native-paper';
import Comments from '../../components/Comments';
import NewComment from '../../components/NewComment';

const DetailsScreen = ({ route }) => {
  const { book } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ borderRadius: 0, width: '100%', }}>
          <Image
            source={book.img}
            style={styles.imageStyle}
            resizeMode="stretch"
          />
          <View style={{ paddingHorizontal: 15, paddingTop: 5 }}>
            <Text style={styles.cardTitle}>{book.title}</Text>
            <View style={styles.cardDescriptionContainer}>
              <Text style={styles.cardDescription}>{book.description}</Text>
            </View>
            <View style={styles.cardPrices}>
              <Text style={styles.cardDiscount}>{book.discount}</Text>
              <Text style={styles.cardPrice}>{book.price}</Text>
            </View>
          </View>
        </View>
        <Divider height={2} style={{ marginVertical: 10 }} />
        <Comments />
        <Divider height={2} />
        <NewComment />
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;