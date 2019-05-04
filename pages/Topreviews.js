import React from 'react';
import { connect } from "react-redux";
import List from '../components/List';

const Topreviews = ({ likes = [], navigation }) => 
  <List data={likes} navigation={navigation} />

Topreviews.navigationOptions = {
  title: 'Top reviews',
};

const mapStateToProps = state => {
  return { likes: state.likes };
};

export default connect(mapStateToProps)(Topreviews);
