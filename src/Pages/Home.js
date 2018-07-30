import React, {Component} from 'react'
import ProgressRing from '../Components/ProgressRing'
import {View, TextInput, Text, Button, Card, Assets} from 'react-native-ui-lib'
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
    let incremented = (current + 25) % 125

    this.setState({percentComplete: incremented})
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.ring}>
            <ProgressRing 
              percentComplete={this.state.percentComplete}
              />
          </View>
        </View>


        <View style={styles.cards}>
          <Card 
            row
            height={160} 
            onPress={this.finishStuff}
            containerStyle={styles.card}
            >
            <Card.Image 
              width={115} 
              imageSource={Assets.images.runWords} 
              />
            <Card.Section body>
              <Card.Section>
                <Text text70 dark10>
                  Welcome to Moxie!
                </Text>
              </Card.Section>
              <Card.Section>
                <Text text80 dark10>
                  The app that focuses on planning, so you can focus on running.
                </Text>
              </Card.Section>
            </Card.Section>
          </Card>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    margin: 5,
  },
  ring: {
    marginTop: 20,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  cards: {
    marginTop: 20,
    flexDirection: 'column',

  },
  card: {
    marginLeft: 5,
    marginRight: 5,
  }
})