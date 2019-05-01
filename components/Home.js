import React from 'react';
import { Button, Text, View } from 'react-native';

export default Home = () => (
  <View>
    <Text>Home</Text>
  </View>
);

Home.navigationOptions = ({ navigation: { navigate } }) => {
  return {
    title: 'Dribble',
    headerRight: (
      <Button
        onPress={() => navigate('Topshots')}
        title="Top shots"
        accessibilityLabel="The top-rated shots"
      />
    ),
  };
}