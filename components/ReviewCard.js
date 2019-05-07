import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  Button,
  Card,
  Colors,
  IconButton,
  Paragraph,
  Subheading,
  Surface,
  Title,
} from 'react-native-paper';
import { connect } from 'react-redux';
import styles from './styles';
import { likeReview, dislikeReview } from '../actions';
import { NYT_PLACEHOLDER } from '../constants/resources';

class ReviewCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };
  }

  toggleLike = (item) => {
    this.setState({ isLiked: !this.state.isLiked }, () => {
      this.state.isLiked ? 
        this.props.likeReview(item) :
        this.props.dislikeReview(item);
    })
  }
  
  render() {
    const { item, navigation: { navigate, state: { routeName } } } = this.props;
    return (
      <Surface style={styles.surface}>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: `${item.multimedia ? item.multimedia.src : NYT_PLACEHOLDER}` }} />
          <Card.Content>
            <Title  style={styles.title}>{item.display_title}</Title>
            <Subheading  style={styles.subheading}>{item.headline}</Subheading>
            <Paragraph>Publication: {item.publication_date}</Paragraph>
          </Card.Content>
          <Card.Actions style={styles.actions}>
            <Button onPress={() => navigate('Details', { data: item })}>Details</Button>
            {routeName === 'Home' && 
              <IconButton
                icon="star"
                color={this.state.isLiked ? Colors.yellow800 : Colors.grey300}
                size={30}
                title="Top reviews"
                accessibilityLabel="Like a review"
                onPress={() => this.toggleLike(item)}
              />
            }
          </Card.Actions>
        </Card>
      </Surface>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    likeReview: (like) => dispatch(likeReview(like)),
    dislikeReview: (like) => dispatch(dislikeReview(like)),
  };
}

ReviewCard.propTypes = {
  item: PropTypes.object,
  navigation: PropTypes.object,
};

export default connect(null, mapDispatchToProps)(ReviewCard);