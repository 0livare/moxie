import React, {Component} from 'react'
import ProgressRing from '../Components/ProgressRing'
import {View, TextInput, Text, Button} from 'react-native-ui-lib'
import {StyleSheet} from 'react-native'


export default class Home extends Component {
  constructor(props) {
      super(props)
      this.finishStuff = this.finishStuff.bind(this)

      this.state = {
        percentComplete: 0,
      }
  }

  static get options() {
      return {}
  }

  finishStuff() {
    let current = this.state.percentComplete
    let incremented = (current + 25) % 100

    if (current == 75) incremented = 100
    else if (current == 100) incremented = 0

    this.setState({percentComplete: incremented})
  }

  render() {
    return (
      <View flex centerH style={styles.container}>
        <View style={styles.ring}>
          <ProgressRing 
            percentComplete={this.state.percentComplete}
            />
        </View>
        <Button 
          style={styles.fakeButton}
          onPress={this.finishStuff} 
          label="Do sutff"
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  ring: {
    marginTop: 20,
    // backgroundColor: 'green',
  },
  fakeButton: { marginTop: 20 },
})