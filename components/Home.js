import React, { Component } from 'react'
import { connect } from "react-redux";
import { Button, Text, View } from 'react-native';
import { getShots } from '../actions/';

class Home extends Component {
  componentDidMount() {
    this.props.getShots();
  }

  render() {
    return (
      <View>
          {this.props.shots.map(shot => (
            <Text key={shot.id}>{shot.title}</Text>
          ))}
      </View>
    )
  }
}

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

const mapStateToProps = state => {
  return { shots: state.shots };
};

const mapDispatchToProps = dispatch => {
  return {
    getShots: () => dispatch(getShots())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
