import { StyleSheet } from 'react-native';
import device from '../constants/device';

const { size: { value } } = device;

export const rootStyles = StyleSheet.create({
  view: {
    margin: 'auto',
    maxWidth: 720,
  },
  text: {
    fontSize: value > 1 ? 52 : 40,
    marginTop: value > 1 ? 32 : 16,
    marginBottom: value > 1 ? 40 : 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export const detailsStyles = StyleSheet.create({
  card: {
    //boxShadow: 'none',
  },
  title: {
    fontSize: 32,
    margin: 8,
    marginTop: 16,
    marginBottom: 24,
  },
  content: {
    fontSize: 18,
    margin: 8,
    marginTop: 16,
    marginBottom: 16,
    maxWidth: 600,
  },
  caption: {
    fontSize: 14,
    margin: 8,
  },
  button: {
    maxWidth: 300,
    marginTop: 32,
  },
  cover: {
    maxWidth: 400,
    margin: 24,
  },
});
