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
import { fetchBookData } from '../../helpers/getBooks';
import { BookData } from '../../Interfaces/interfaces';
import Loader from '../../helpers/loader';

const DetailsScreen = ({ route }) => {
  const { bookID } = route.params;
  const [book, setBook] = useState<BookData>();

  useEffect(() => {
    fetchBookData(bookID)
      .then(data => {
        setBook(data.document);
      })
      .catch(error => {
      });
  }, []);

  return (
    <View style={styles.container}>
      {book ?
        <ScrollView>
          <View style={{ borderRadius: 0, width: '100%', }}>
            <Image
              source={{ uri: book?.coverImage }}
              style={styles.imageStyle}
              resizeMode="stretch"
            />
            <View style={{ paddingHorizontal: 15, paddingTop: 5 }}>
              <Text style={styles.cardTitle}>{book?.title}</Text>
              <View style={styles.cardDescriptionContainer}>
                <Text style={styles.cardDescription}>{book?.description}</Text>
              </View>
              <View style={styles.cardPrices}>
                <Text style={styles.cardDiscount}>{book?.discountRate}</Text>
                <Text style={styles.cardPrice}>{book?.price}</Text>
              </View>
            </View>
          </View>
          <Divider height={2} style={{ marginVertical: 10 }} />
          <Comments />
          <Divider height={2} />
          <NewComment />
        </ScrollView>
        :
        <Loader msg={"Fetching Book"} />
      }
    </View>
  );
};

export default DetailsScreen;