import React from 'react'
import {Text} from 'react-native'

export default Inverter = props => {
  const toBeInverted = props.text
  const inverted = toBeInverted.split('').reverse().join('')
  
  return <Text>{inverted}</Text>
}
