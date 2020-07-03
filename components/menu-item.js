import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default props => {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.item} onPress={() => props.getDetails(props.item_name)}>
        <Text style={styles.item}>{props.item_name}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    color: '#d68910',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  main: {
    borderRadius: 5,
    backgroundColor: '#fdebd0',
    margin: 5,
    flex: 1,
    alignItems: 'center',
  },
})
