import {Colors} from 'react-native-ui-lib'

function createLayoutStyles() {
  return {
    topBar: {
      title: { color: Colors.accent },
      background: { color: Colors.light }
    },
    layout: {
      backgroundColor: Colors.dark
    },
    bottomTabs: { 
      backgroundColor: Colors.light,
    }
  }
}

export default createLayoutStyles