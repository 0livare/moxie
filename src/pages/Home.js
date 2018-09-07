import React, {Component} from 'react'
import ProgressRing from '../components/ProgressRing'
import {View, TextInput, Text, Button, Card, Assets, Colors} from 'react-native-ui-lib'
import {StyleSheet} from 'react-native'
import createLayoutStyles from '../navigation/layoutStyles'


export default class Home extends Component {
  constructor(props) {
      super(props)
      this.finishStuff = this.finishStuff.bind(this)

      this.state = {
        percentComplete: 0,
      }
  }

  static get options() {
    const options = createLayoutStyles()
    options.topBar.title.text = 'Home'
    return options
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
            containerStyle={styles.cardContainer}
            borderRadius={0}
            enableShadow={false}
            style={styles.card}
            >
            <Card.Image 
              width={115} 
              imageSource={Assets.images.runWords} 
              />
            <Card.Section body>
              <Card.Section>
                <Text text70 white>
                  Welcome to Moxie!
                </Text>
              </Card.Section>
              <Card.Section>
                <Text text80 white>
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
  cardContainer: {
    marginLeft: 5,
    marginRight: 5,
  },
  card: {
    backgroundColor: Colors.light,
    color: 'white',
  }
})