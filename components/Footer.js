import React from 'react';
import { Linking, View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        See my profile: 
      </Text>
      <TouchableHighlight onPress={()=> Linking.openURL('https://github.com/IveTou')}>
        <Text style={styles.footerText}>https://github.com/IveTou</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Footer;