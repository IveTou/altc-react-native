import { StyleSheet } from 'react-native';
import device from '../constants/device';

const { size: { value } } = device;

export default StyleSheet.create({
  loader: {
    flex: 1,
    paddingTop: '45%',
    backgroundColor: '#ecf0f1',
    padding: 8,
    overflow: 'scroll',
  },
  flatList: {
    flex: 1,
    padding: 8,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#ecf0f1',
    overflow: 'scroll',
    overflowX: 'visible',
  },
  surface: {
    margin: 4,
    elevation: 2,
    maxWidth: value > 1 ? 300 : 520,
    maxHeight: 300,
    marginBottom: 32,
  },
  title: {
    whiteSpace: 'nowrap', 
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  subheading: {
    whiteSpace: 'nowrap', 
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  footer: {
    padding: 32,
    position: 'absolute',
    bottom: 0 ,
    left: 0,
    width: '100%',
    backgroundColor: 'purple',
  },
  footerText: {
    fontSize: value > 1 ? 32 : 18,
    margin: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  }
});
