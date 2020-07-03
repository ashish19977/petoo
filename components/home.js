import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default props => {
  return (
    <View style={styles.main}>
      <Text style={styles.brandText}>Petoo</Text>
      <View style={styles.msgView}>
        <Text style={styles.primaryText}>Welcome Foodie</Text>
        <Text style={styles.secondaryText}>Have a look at what we have for you</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => props.navigation.push('menu')}>
        <Text style={[styles.secondaryText, { color: '#d68910' }]}>Check Our Latest Menu</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msgView: {
    marginBottom: 40,
    alignItems: 'center',
  },
  primaryText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
    color: '#7d3c98',
  },
  secondaryText: {
    fontSize: 18,
    color: '#7d3c98',
  },
  brandText: {
    marginBottom: 50,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#d68910',
  },
  btn: {
    borderRadius: 5,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fad7a0',
  },
})
