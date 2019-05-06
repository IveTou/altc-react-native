import React from 'react';
import { FlatList } from 'react-native';
import ReviewCard from './ReviewCard';
import device from '../constants/device';
import styles from './styles';

const List = ({ navigation, data }) => {
  const { size: { value } } = device;
  return (
    <FlatList
      horizontal={value > 1}
      style={styles.flatList}
      data={data}
      renderItem={({ item }) => <ReviewCard item={item} navigation={navigation} />}
      keyExtractor={(_, index) => index.toString()}
    />
  )
}

export default List;