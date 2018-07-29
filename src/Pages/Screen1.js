import React, {PureComponent} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Card, MaskedInput} from 'react-native-ui-lib';
import { Navigation } from 'react-native-navigation';

class Screen1 extends PureComponent {

  constructor(props) {
    super(props)

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
      <Text text20 dark20 center>
        {hours}
        <Text red10>h</Text>
        {minutes}
        <Text red10>m</Text>
      </Text>
    );
  }



  render() {
    return (
      <View flex center style={styles.container}>
        import {Card} from 'react-native-ui-lib';

      <Card
        row // control the children flow direction
        borderRadius={12}
        height={150}
        containerStyle={{marginRight: 20}}
        onPress={this.dismiss}
        enableShadow={true}

      >
        <Card.Image width={80} imageSource={'https://www.google.com/search?q=puppy&rlz=1C5CHFA_enUS806US806&tbm=isch&source=iu&ictx=1&fir=ciMn5t5_ozcpjM%253A%252CMz_FsB1Qn4d1WM%252C_&usg=__PEqzDeQ-dsDb2uJ9MNJKE1GHS_g%3D&sa=X&ved=2ahUKEwjo7JWbk8XcAhVD44MKHXACB8IQ9QEwAXoECAMQBg#imgrc=ciMn5t5_ozcpjM:'} />
        <MaskedInput
          centerH
          renderMaskedText={this.renderTimeText}
          caretHidden
          keyboardType={'numeric'}
          maxLength={4}
        />
      </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  }
})

export default Screen1
