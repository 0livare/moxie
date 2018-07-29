import {Assets} from 'react-native-ui-lib'

export function loadAssets() {
  Assets.loadAssetsGroup('images', {
    runWords: require('../images/running-words.jpg'),
  })
}