import React from 'react';
import {  ActivityIndicator, View } from 'react-native';
import styles from './styles';
import { Colors } from 'react-native-paper';

const LoadingView = () => (
  <View style={styles.loader} >
    <ActivityIndicator animating={true} color={Colors.red800} size="large" />
  </View>
);

export default  LoadingView;