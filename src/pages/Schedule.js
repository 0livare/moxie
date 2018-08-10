import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {View, Text} from 'react-native-ui-lib'
import {marathonNoviceHigdonPlan} from '../running-plans'
import {Navigation} from 'react-native-navigation'
import Agenda from '../components/Agenda'

export default class Schedule extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: {},
      startDate: new Date(),
      runningPlan: marathonNoviceHigdonPlan,
    }

    // Listen for this components button presses 
    Navigation.events().bindComponent(this); 
  }

  static get options() {
    return {
      topBar: {
        title: {
          text: 'Your Schedule',
        },
        rightButtons: {
          id: 'edit',
          text: 'Edit',
        }
      }
    }
  }

  render() {
    return (
      <Agenda 
        items={this.state.items}
        runningPlan={this.state.runningPlan}
        startDate={this.state.startDate}
        />
    )
  }




  navigationButtonPressed({ buttonId }) {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'moxie.Screen1',
      }
    })
  }
}

