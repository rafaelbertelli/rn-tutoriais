import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './components/Simples'
import Inverter from './components/Inverter'
import Random from './components/Random'
import Contador from './components/Contador'

export default createDrawerNavigator({
  Contador: {
    screen: () => <Contador contado={70} />
  },
  Random: {
    screen: () => <Random numeros={6} />,
    navigationOptions: { title: 'Mega Sega'}
  },
  Simples: {
    screen: () => <Simples text={'Meu coração ta batendo forte porque você chegou'} />,
    navigationOptions: { title: 'Texto'}
  },
  Inverter: {
    screen: () => <Inverter text={'Rafael'} />,
    navigationOptions: { title: 'Inverter texto'}
  }
},
{ 
  drawerWidth: 300
})
