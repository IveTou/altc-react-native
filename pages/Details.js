import React from 'react';
import { get } from 'lodash';
import { 
  Card,
  Paragraph,
  Subheading,
  Title,
} from 'react-native-paper';

const Details = ({ navigation }) => {
  const { multimedia, display_title, headline, publication_date } = get(navigation, 'state.params.data');

  return (      
    <Card>
      <Card.Cover source={{ uri: `${multimedia.src}` }} />
      <Card.Content>
        <Title>{display_title}</Title>
        <Subheading>{headline}</Subheading>
        <Paragraph>Publication: {publication_date}</Paragraph>
      </Card.Content>
    </Card>
  )
}

Details.navigationOptions = ({ navigation }) => {
  const { display_title } = get(navigation, 'state.params.data');
  return { title: display_title };
}

export default Details;
