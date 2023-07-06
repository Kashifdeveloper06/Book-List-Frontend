import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
} from 'react-native';
import BookCard from '../../components/BookCard';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { BookData } from '../../Interfaces/interfaces';

const DATA: BookData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '레이블라우스',
    discount: "10%",
    price: "57600 원",
    img: require('../../assets/Images/bookimage.jpeg'),
    description: "Description of the book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 'cd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '레이블라우스',
    discount: "10%",
    price: "57600 원",
    img: require('../../assets/Images/bookimage.jpeg'),
    description: "Description of the book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 'dd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '레이블라우스',
    discount: "10%",
    price: "57600 원",
    img: require('../../assets/Images/bookimage.jpeg'),
    description: "Description of the book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 'ed7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '레이블라우스',
    discount: "10%",
    price: "57600 원",
    img: require('../../assets/Images/bookimage.jpeg'),
    description: "Description of the book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 'ed7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '레이블라우스',
    discount: "10%",
    price: "57600 원",
    img: require('../../assets/Images/bookimage.jpeg'),
    description: "Description of the book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 'ed7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '레이블라우스',
    discount: "10%",
    price: "57600 원",
    img: require('../../assets/Images/bookimage.jpeg'),
    description: "Description of the book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderCard = ({ item }: { item: BookData }) => {

    const navigateFunction = () => {
      navigation.navigate('Details', { headerTitle: item.title, book: item });
    };

    return (
      <BookCard navigateFunction={navigateFunction} item={item} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;