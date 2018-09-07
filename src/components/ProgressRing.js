import React from 'react'
import {StyleSheet, View} from 'react-native'
import {AnimatedCircularProgress} from 'react-native-circular-progress'
import {Colors} from 'react-native-ui-lib'


const ProgressRing = ({percentComplete}) => {

  return (
    <AnimatedCircularProgress
      size={200}
      width={15}
      fill={100}
      tintColor={Colors.accent}
      backgroundColor={Colors.light} 
      fill={percentComplete}
      />
  )
}

export default ProgressRing