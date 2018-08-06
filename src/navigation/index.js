import { Navigation } from 'react-native-navigation'
import { registerScreens } from '../screens'
import createBottomTabs from './bottomTabs'


function registerNavigation() {
  registerScreens()
  
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: { bottomTabs: createBottomTabs() }
    })
  })
}

export default registerNavigation