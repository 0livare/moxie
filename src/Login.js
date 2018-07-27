import React, {Component} from 'react'
import {View, TextInput, Text, Button} from 'react-native-ui-lib'
import {Navigation} from 'react-native-navigation'


export default class Screen2 extends Component {

  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
  }

  static get options() {
    return {
      topBar: {
        title: {
          text: 'Login',
        }
      }
    }
  }

  login() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'moxie.Screen1',
      }
    })
  }

  render() {
    return (
      <View flex paddingH-25 paddingT-120>
        <Text blue50 text20>Welcome</Text>
        <TextInput text50 placeholder="username" dark10/>
        <TextInput text50 placeholder="password" secureTextEntry dark10/>
        <View marginT-100 center>
          <Button text70 white background-orange30 label="Login" onPress={this.login} />
          <Button link text70 orange30 label="Sign Up" marginT-20 />
        </View>
      </View>
    );
  }
}