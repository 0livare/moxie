import {Assets} from 'react-native-ui-lib'

export function loadAssets() {

  var imagePath = '../assets/images/'
  var iconPath = imagePath + 'icons/'

  Assets.loadAssetsGroup('icons', {
    calendar: require(iconPath + 'calendar.png'),
    home:     require(iconPath + 'home.png'),
    settings: require(iconPath + 'settings.png'),
  })

  Assets.loadAssetsGroup('images', {
    runWords: require(imagePath + 'running-words.jpg'),
  })
}