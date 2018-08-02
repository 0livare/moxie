import {Navigation} from 'react-native-navigation'

import App from './pages/App'
import Screen1 from './pages/Screen1'
import Login from './pages/Login'
import Home from './pages/Home'
import Calendar from './pages/Schedule'

export function registerScreens() {

  register('moxie.App', App)
  register('moxie.Screen1', Screen1)
  register('moxie.Login', Login)
  register('moxie.Home', Home)
  register('moxie.Schedule', Calendar)

  function register(id, component) {
    Navigation.registerComponent(id, () => component)
  }
}
