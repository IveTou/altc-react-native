import React, { Component } from 'react'
import { connect } from "react-redux";
import { Colors, IconButton } from 'react-native-paper';
import List from '../components/List';
import LoadingView from '../components/LoadingView';
import { getReviewsAll } from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }
  
  componentDidMount() {
    this.props.getReviewsAll();
  }

  showModal = () => this.setState({ visible: true });
  hideModal = () => this.setState({ visible: false });

  render() {
    const { reviews = [], navigation } = this.props;
    return reviews.length ? 
      <List data={reviews} navigation={navigation}/> : 
      <LoadingView />;
  }
}

Home.navigationOptions = ({ navigation: { navigate } }) => {
  return {
    title: 'NYT',
    headerRight: (
      <IconButton
        icon="star"
        color={Colors.white}
        size={30}
        accessibilityLabel="Show liked reviews"
        onPress={() => navigate('Topreviews')}
      />
    ),
  };
}

const mapStateToProps = state => {
  return { reviews: state.reviews };
};

const mapDispatchToProps = dispatch => {
  return {
    getReviewsAll: () => dispatch(getReviewsAll())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
