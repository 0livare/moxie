import {Navigation} from 'react-native-navigation';

import App from './App';
import Screen1 from './Screen1';

export function registerScreens() {

  Navigation.registerComponent('moxie.App', () => App);
  Navigation.registerComponent('moxie.Screen1', () => Screen1);

}
