import { Navigation } from 'react-native-navigation'
import { registerScreens } from './src/screens'
import { loadAssets } from './src/assets'

// HIDE ANNOYING WARNINGS STATING THAT REACT NATIVE NEEDS TO UPDATE NATIVE COMPONENTS
console.disableYellowBox = true;
// import { YellowBox } from 'react-native';
// YellowBox.ignoreWarnings([
//   'Warning: componentWillMount is deprecated',
//   'Warning: componentWillReceiveProps is deprecated',
// ]);

registerScreens()
loadAssets()


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [{
                component: {name: 'moxie.App'}
              }],
              options: {
                bottomTab: {
                  // text: 'Tab 1',
                  icon: require('./images/icons/home.png'),
                  testID: 'FIRST_TAB_BAR_BUTTON',
                  iconColor: 'black',
                  selectedIconColor: '#007AFF', // apple blue
                }
              }
            },
          },
          {
            component: {
              name: 'moxie.Login',
              passProps: {
                text: 'This is tab 2'
              },
              options: {
                bottomTab: {
                  // text: 'Tab 2',
                  icon: require('./images/icons/settings.png'),
                  testID: 'SECOND_TAB_BAR_BUTTON',
                  backgroundColor: 'green',
                  iconColor: 'black',
                  selectedIconColor: '#007AFF', // apple blue
                }
              }
            }
          }
        ],
        options: {
          backgroundColor: 'green',
          drawBehind: false,
        },
      },
    }
  })
})

