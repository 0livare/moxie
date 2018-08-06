import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {View, Text} from 'react-native-ui-lib'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import {marathonNoviceHigdonPlan} from '../running-plans'

export default class Schedule extends Component {

  constructor(props) {
    super(props)
    this.state = {items: {}}

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
        }
      }
    }
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems}
        selected={'2018-8-01'}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        rowHasChanged={this.rowHasChanged}
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
    console.log('loading items for ', month)
    let today = new Date()
    let plan = marathonNoviceHigdonPlan

    console.log('foobar: PLAN IS ', plan)


    setTimeout(() => {
    //   for (let i = -15; i < 85; i++) {
    //     const time = timestamp + i * 24 * 60 * 60 * 1000
    //     const strTime = this.timeToString(time)

    //     if (this.state.items[strTime]) continue

    //     this.state.items[strTime] = []
    //     const numItems = 1//Math.floor(Math.random() * 5)

    //     for (let j = 0; j < numItems; j++) {
    //       this.state.items[strTime].push({
    //         name: 'Item for ' + strTime,
    //         height: 20//Math.max(50, Math.floor(Math.random() * 150))
    //       })
    //     }
    //   }

      for(let w = 1; w<plan.length; ++w) {
        let week = plan[w]
        console.log('week is ', week)
        for (let d = 1; d<week.length; ++d) {
          let daysInFuture = w * 7 + d
          let dayOf = today.addDays(daysInFuture)

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
      console.log('foobar: state is', this.state)
    }, 1000);
  }

  renderItem(item) {
    return (
      <View 
        style={[styles.item]}>{/*, {height: item.height}]}>*/}
        <Text>{item.name}</Text>
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
  emptyDate: {
    height: 30,
    flex:1,
    paddingTop: 40
  }
})