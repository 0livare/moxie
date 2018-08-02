import { loadAssets } from './src/assets'
import registerNavigation from './src/navigation'

// HIDE ANNOYING WARNINGS STATING THAT REACT NATIVE NEEDS TO UPDATE NATIVE COMPONENTS
console.disableYellowBox = true;
// import { YellowBox } from 'react-native';
// YellowBox.ignoreWarnings([
//   'Warning: componentWillMount is deprecated',
//   'Warning: componentWillReceiveProps is deprecated',
// ]);

loadAssets()
registerNavigation()



