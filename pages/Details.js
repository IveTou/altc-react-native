import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { 
  Card,
  Button,
  Paragraph,
  Subheading,
  Text,
  Title,
} from 'react-native-paper';
import { Linking } from 'react-native';
import { detailsStyles as styles } from './styles';

const Details = ({ navigation }) => {
  const { multimedia, display_title, headline, publication_date, byline, summary_short, link: { url } } = get(navigation, 'state.params.data');
  return (      
    <Card style={styles.card}>
      <Card.Cover style={styles.cover} source={{ uri: `${multimedia.src}` }} />
      <Card.Content>
        <Title style={styles.title}>{display_title}</Title>
        <Subheading style={styles.content}>{headline}</Subheading>
        <Text style={styles.content}>
          <Text>{byline}: </Text>
          <Text>{summary_short}</Text>
        </Text>
        <Paragraph style={styles.caption}>Publication: {publication_date}</Paragraph>
        <Button 
          style={styles.button}
          icon="link"
          mode="contained"
          onPress={()=> Linking.openURL(url)}
        >
          Read at NYT webpage
        </Button>
      </Card.Content>
    </Card>
  )
}

Details.navigationOptions = ({ navigation }) => {
  const { display_title } = get(navigation, 'state.params.data');
  return { title: display_title };
}

Details.propTypes = {
  navigation: PropTypes.object,
};

export default Details;
