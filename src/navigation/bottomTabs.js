import {Assets, Colors} from 'react-native-ui-lib'


// The (mostly) full list of react native navigation options 
// can be found here: https://wix.github.io/react-native-navigation/v2/#/docs/styling?id=options-object-format

function createBottomTabs() {

  var homeTab = createBottomTabStack(
    'moxie.Home',
    'Home',
    Assets.icons.home,
    'HOME_TAB_BAR_BUTTON'
  )

  var calendarTab = createBottomTabStack(
    'moxie.Schedule',
    'Schedule',
    Assets.icons.calendar,
    'CALENDAR_TAB_BAR_BUTTON'
  )
  
  var settingsTab = createBottomTabStack(
    'moxie.Login',
    'Settings',
    Assets.icons.settings,
    'SETTINGS_TAB_BAR_BUTTON'
  )
  
  var bottomTabs = {
    children: [
      homeTab, 
      calendarTab, 
      settingsTab,
    ],
    options: {
    },
  }


  return bottomTabs
}


function createBottomTabStack(name, title, icon, testID) {
  return {
    stack: {
      children: [{
        component: {name}
      }],
      options: createBottomTabOptions(
        icon,
        title,
        testID
      )
    },
  }
}

function createBottomTabOptions(icon, title, testID) {
  return {
    bottomTab: {
      text: title,
      textColor: 'white',
      selectedTextColor: Colors.accent,
      icon,
      testID,
      iconColor: 'white',
      selectedIconColor: Colors.accent,

      // Remove the label's vertical space from below the tab icons
      //iconInsets: { top: 6, left: 0, bottom: -6, right: 0 },
    }
  }
}



export default createBottomTabs 