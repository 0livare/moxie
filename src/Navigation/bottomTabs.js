import {Assets} from 'react-native-ui-lib'

function createBottomTabs() {
  var homeTab = {
    stack: {
      children: [{
        component: {name: 'moxie.Home'}
      }],
      options: {
        bottomTab: {
          // text: 'Tab 1',
          icon: Assets.icons.home,
          testID: 'FIRST_TAB_BAR_BUTTON',
          iconColor: 'black',
          selectedIconColor: '#007AFF', // apple blue
        }
      }
    },
  }
  
  
  var settingsTab = {
    component: {
      name: 'moxie.Login',
      passProps: {
        text: 'This is tab 2'
      },
      options: {
        bottomTab: {
          // text: 'Tab 2',
          icon: Assets.icons.settings,
          testID: 'SECOND_TAB_BAR_BUTTON',
          backgroundColor: 'green',
          iconColor: 'black',
          selectedIconColor: '#007AFF', // apple blue
        }
      }
    }
  }
  
  var bottomTabs = {
    children: [homeTab, settingsTab],
    options: {
      // Attempt to remove the labels vertical space from below the tab icons
      iconInsets: { // add this to change icon position (optional, iOS only).
        top: 6,     // optional, default is 0.
        left: 0,    // optional, default is 0.
        bottom: -6, // optional, default is 0.
        right: 0    // optional, default is 0.
      },
    },
  }


  return bottomTabs
}



export default createBottomTabs 