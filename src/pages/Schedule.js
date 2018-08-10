import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {View, Text} from 'react-native-ui-lib'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import {marathonNoviceHigdonPlan} from '../running-plans'
import {Navigation} from 'react-native-navigation'

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

    this.loadItems = this.loadItems.bind(this)
    this.renderItem = this.renderItem.bind(this)
    this.renderEmptyDate = this.renderEmptyDate.bind(this)
    this.rowHasChanged = this.rowHasChanged.bind(this)
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
        loadItemsForMonth={this.loadItems}
        selected={this.dateToString(new Date())}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        rowHasChanged={this.rowHasChanged}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={1}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={2}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#666'},
        //    '2017-05-09': {textColor: '#666'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
         // monthFormat={'yyyy'}
        //  theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  loadItems({month, timestamp}) {

    for(let w = 1; w < this.state.runningPlan.length; ++w) {
      let week = this.state.runningPlan[w]
      
      for (let d = 1; d < week.length; ++d) {
        let daysInFuture = (w-1) * 7 + d - 1
        let dayOf = this.state.startDate.addDays(daysInFuture)

        this.state.items[this.dateToString(dayOf)] = [{
          name: week[d],
          height: 20,
        }]
      }
    }

    const newItems = {};
    Object.keys(this.state.items)
          .forEach(key => newItems[key] = this.state.items[key])

    this.setState( {items: newItems} )
  }

  renderItem(item) {
    return (
      <View 
        style={[styles.item]}>{/*, {height: item.height}]}>*/}
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View 
        style={styles.emptyDate}>
        <Text>Rest</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  dateToString(date) {
    return date.toISOString().split('T')[0];
  }

  timeToString(time) {
    const date = new Date(time);
    return this.dateToString(date)
  }


  navigationButtonPressed({ buttonId }) {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'moxie.Screen1',
      }
    })
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    paddingTop: 20,
    marginRight: 10,
    marginTop: 17
  },
  itemText: {
    fontSize: 25,
    // fontWeight: 'bold',
    color: '#424242',
  },
  emptyDate: {
    height: 30,
    flex:1,
    paddingTop: 40
  }
})