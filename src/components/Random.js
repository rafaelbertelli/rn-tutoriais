import React from 'react'
import { Text } from 'react-native'

export default Random = props => {
  const fill = 0
  const [min, max] = [1,60]
  const numeros = Array(props.numeros || 6).fill(fill)

  for (let i = 0; i < numeros.length; i++) {
    let novo = 0
    while (numeros.includes(novo)) {
      novo = Math.floor(Math.random() * (max - min +1)) + min
    }
    numeros[i] = novo
  }

  numeros.sort((a,b) => a - b)

  return (
    <Text>{numeros.join(', ')}</Text>
  )
}