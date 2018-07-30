import React from 'react'
import {StyleSheet, View} from 'react-native'
import {AnimatedCircularProgress} from 'react-native-circular-progress'


const ProgressRing = ({percentComplete}) => {

  return (
    <AnimatedCircularProgress
      size={200}
      width={15}
      fill={100}
      tintColor="#00e0ff"
      backgroundColor="#3d5875" 
      fill={percentComplete}
      />
  )
}

export default ProgressRing