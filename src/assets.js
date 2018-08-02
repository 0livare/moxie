import {Assets} from 'react-native-ui-lib'

export function loadAssets() {

  Assets.loadAssetsGroup('icons', {
    home:     require('../images/icons/home.png'),
    settings: require('../images/icons/settings.png'),
  })

  Assets.loadAssetsGroup('images', {
    runWords: require('../images/running-words.jpg'),
  })
}