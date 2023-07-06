import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import BookCard from '../../components/BookCard';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { BookData } from '../../Interfaces/interfaces';
import { fetchBookList } from '../../helpers/getBooks';
import Loader from '../../helpers/loader';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [allBooks, setAllBooks] = useState([]);
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchBookList()
      .then((bookList) => {
        const nextPageBooks: BookData[] = bookList.documents;
        setAllBooks(bookList.documents);
        setLoading(false);
        fetchData();

        const newData = nextPageBooks?.slice((page - 1) * 5, page * 5);
        setMyBooks(prevData => [...prevData, ...newData]);
        setHasMore(newData.length > 0);
        setPage(prevPage => prevPage + 1);

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [])

  const renderCard = ({ item }: { item: BookData }) => {
    const navigateFunction = () => { navigation.navigate('Details', { headerTitle: item.title, bookID: item._id }); };
    return (<BookCard navigateFunction={navigateFunction} item={item} />);
  };

  const fetchData = async () => {
    if (loading || !hasMore) {
      return;
    }
    setLoading(true);
    try {
      const newData = allBooks.slice((page - 1) * 5, page * 5);
      setMyBooks(prevData => [...prevData, ...newData]);
      setHasMore(newData.length > 0);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderFooter = () => {
    if (loading || !hasMore) return null;
    return (<Loader msg={'Fetching Books...'} />);
  };

  return (
    <SafeAreaView style={styles.container}>
      {
        (loading || myBooks[0]) ?
          <FlatList
            data={myBooks}
            renderItem={renderCard}
            keyExtractor={item => item._id}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            onEndReached={fetchData}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
          />
          :
          <Loader msg={'Network Error...'} />
      }
    </SafeAreaView>
  );
};

export default HomeScreen;