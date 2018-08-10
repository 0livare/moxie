import {Assets} from 'react-native-ui-lib'



function createBottomTabs() {

  var homeTab = createBottomTabStack(
    'moxie.Home',
    Assets.icons.home,
    'HOME_TAB_BAR_BUTTON'
  )

  var calendarTab = createBottomTabStack(
    'moxie.Schedule',
    Assets.icons.calendar,
    'CALENDAR_TAB_BAR_BUTTON'
  )
  
  var settingsTab = createBottomTabStack(
    'moxie.Login',
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


function createBottomTabStack(name, icon, testID) {
  return {
    stack: {
      children: [{
        component: {name}
      }],
      options: createBottomTabOptions(
        icon,
        testID
      )
    },
  }
}

function createBottomTab(name, icon, testID) {
  return {
    component: {
      name,
      options: createBottomTabOptions(icon, testID)
    }
  }
}

function createBottomTabOptions(icon, testID) {
  return {
    bottomTab: {
      // text: 'Tab 2',
      icon,
      testID,
      iconColor: 'gray',
      selectedIconColor: '#007AFF', // apple blue

      // Remove the label's vertical space from below the tab icons
      iconInsets: { top: 6, left: 0, bottom: -6, right: 0 },
    }
  }
}



export default createBottomTabs 