import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from 'react-redux';
import store from "./store/index";
import Home  from './components/Home';
import Topshots  from './components/Topshots';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Topshots: { screen: Topshots },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#c638a7',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }, 
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
