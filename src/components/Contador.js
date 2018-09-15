import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends Component {
  state = {
    contado: 0
  }

  _onPress = () => {
    this.setState({ contado: this.state.contado + 1 })
  }

  _onLongPress = () => {
    this.setState({ contado: 0 })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerCounter}>
          <Text style={styles.textCounter}>
            {this.state.contado}
          </Text>
        </View>
        <TouchableHighlight onPress={this._onPress} onLongPress={this._onLongPress}>
          <Text style={styles.buttonCounter}>
            Incrementar/Zerar
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerCounter: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCounter: {
    fontSize: 90,
    backgroundColor: 'red'
  },
  buttonCounter: {
    fontSize: 25,
    backgroundColor: 'lightblue'
  }
})