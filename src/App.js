import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Simples from './components/Simples'
import Inverter from './components/Inverter'
import Random from './components/Random'

class App extends Component {
  render() {
    const text = 'Que do caralho!'
    return (
      <View style={styles.container}>
        <Simples text={text} />
        <Inverter text={text} style={styles.f20} />
        <Random numeros={9} />
        <Text>27</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  f20: {
    fontSize: 40
  }
})

export default App
