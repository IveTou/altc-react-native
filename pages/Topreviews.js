import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import List from '../components/List';
import Footer from '../components/Footer';
import { rootStyles as styles } from './styles';

const Topreviews = ({ likes = [], navigation }) =>
  <>
    <View style={styles.view}>
      <Text style={styles.text}>
        {likes.length ? 
          'Reviews You Like':
          'You did not like anything yet.'
        }
      </Text>
    </View>
    <List data={likes} navigation={navigation} />
    <Footer />
  </> 

Topreviews.navigationOptions = {
  title: 'Top reviews',
};

const mapStateToProps = state => {
  return { likes: state.likes };
};

Topreviews.propTypes = {
  likes: PropTypes.array,
  navigation: PropTypes.object,
};

export default connect(mapStateToProps)(Topreviews);
