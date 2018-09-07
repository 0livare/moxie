import React, {PureComponent} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {View, Text, Card, MaskedInput, Colors, Picker, Stepper} from 'react-native-ui-lib';
import { Navigation } from 'react-native-navigation';
import _ from 'lodash'

class Screen1 extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      language: 'python',
      itemsCount: 1,
    }

    Navigation.events().bindComponent(this)
    this.dismiss = this.dismiss.bind(this)
  }

  static get options() {
    return {
      topBar: {
        title: { text: 'Kierstyn is cute' },
        rightButtons: [{
          id: 'saveBtn',
          text: 'Save',
        }]
      }
    }
  }

  dismiss() {
    Navigation.pop(this.props.componentId)
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'saveBtn') {
      this.dismiss()
    }
  }


  renderTimeText(value) {
    let hours = 2
    let minutes = 40

    return (
      <View>
        <Text text20 dark20 center>
          {hours}
          <Text red10>h</Text>
          {minutes}
          <Text red10>m</Text>
        </Text>
      </View>
    );
  }



  render() {
    const options = [
      {label: 'JavaScript', value: 'js'},
      {label: 'Java', value: 'java'},
      {label: 'Python', value: 'python'},
      {label: 'C++', value: 'c++', disabled: true},
      {label: 'Perl', value: 'perl'},
    ];


    return (
      <ScrollView flex center style={styles.container}>
          <Text>Zach is cool</Text>

          <Picker
            placeholder="Pick a single language"
            value={this.state.language}
            enableModalBlur={true}
            onChange={item => this.setState({language: item})}
            topBarProps={{title: 'Languages'}}
            style={styles.picker}
            hideUnderline
            showSearch
            searchPlaceholder={'Search a language'}
            // onSearchChange={value => console.warn('value', value)}
          >
            {_.map(options, option => <Picker.Item key={option.value} value={option} disabled={option.disabled} />)}
          </Picker>

          <Text>Stepper</Text>
          <Stepper
            label={this.state.itemsCount === 1 ? 'Item' : 'Items'}
            min={1}
            max={50}
            onValueChange={count => this.setState({itemsCount: count})}
            initialValue={1}
          />

          <Text>Zach is cool</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  picker: {
    height: 30,
  }
})

export default Screen1
