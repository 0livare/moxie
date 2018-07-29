import {Navigation} from 'react-native-navigation'

import App from './Pages/App'
import Screen1 from './Pages/Screen1'
import Login from './Pages/Login'
import Home from './Pages/Home'

export function registerScreens() {

  register('moxie.App', App)
  register('moxie.Screen1', Screen1)
  register('moxie.Login', Login)

  function register(id, component) {
    Navigation.registerComponent(id, () => component)
  }
}
