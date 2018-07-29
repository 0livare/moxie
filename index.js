import { Navigation } from 'react-native-navigation'
import { registerScreens } from './src/screens'
import { loadAssets } from './src/assets'

// HIDE ANNOYING WARNINGS STATING THAT REACT NATIVE NEEDS TO UPDATE NATIVE COMPONENTS
// console.disableYellowBox = true;
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

registerScreens()
loadAssets()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'moxie.App'
            }
          }
        ],
        options: {
          topBar: {
            title: {
              text: 'React Native Init'
            }
          }
        }
      }
    }
  });
});

