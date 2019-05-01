import { createStackNavigator, createAppContainer } from "react-navigation";
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

export default createAppContainer(AppNavigator);
