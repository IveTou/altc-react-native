import React from 'react';
import { FlatList } from 'react-native';
import ReviewCard from './ReviewCard';
import styles from './styles';

export default List = ({ navigation, data }) => {
  return (
    <FlatList
      style={styles.flatList}
      data={data}
      renderItem={({ item }) => <ReviewCard item={item} navigation={navigation} />}
      keyExtractor={(_, index) => index.toString()}
    />
  )
}