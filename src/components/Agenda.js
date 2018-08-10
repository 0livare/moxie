import React from 'react'
import {StyleSheet} from 'react-native'
import { Calendar, CalendarList, Agenda as WixAgenda } from 'react-native-calendars'
import {View, Text} from 'react-native-ui-lib'


const Agenda = ({items, runningPlan, startDate}) => {

  return (
    <WixAgenda
      items={items}
      loadItemsForMonth={loadItems}
      selected={dateToString(new Date())}
      renderItem={renderItem}
      renderEmptyDate={renderEmptyDate}
      rowHasChanged={rowHasChanged}
      rowHasChanged={rowHasChanged}
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
  )


  function loadItems({month, timestamp}) {

    for(let w = 1; w < runningPlan.length; ++w) {
      let week = runningPlan[w]
      
      for (let d = 1; d < week.length; ++d) {
        let daysInFuture = (w-1) * 7 + d - 1
        let dayOf = startDate.addDays(daysInFuture)

        items[dateToString(dayOf)] = [{
          name: week[d],
          height: 20,
        }]
      }
    }

    const newItems = {};
    Object.keys(items)
          .forEach(key => newItems[key] = items[key])

    items = newItems
  }

  function renderItem(item) {
    return (
      <View 
        style={[styles.item]}>{/*, {height: item.height}]}>*/}
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    );
  }

  function renderEmptyDate() {
    return (
      <View 
        style={styles.emptyDate}>
        <Text>Rest</Text>
      </View>
    );
  }

  function rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  function dateToString(date) {
    return date.toISOString().split('T')[0];
  }

  function timeToString(time) {
    const date = new Date(time);
    return dateToString(date)
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




export default Agenda