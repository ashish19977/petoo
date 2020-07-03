import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './components/home'
import Menu from './components/menu'
import { Provider } from 'react-redux'
import store from './redux/store'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode={false} screenOptions={{ animationEnabled: false }}>
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='menu' component={Menu} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
