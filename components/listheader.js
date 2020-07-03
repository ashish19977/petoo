import React from 'react'
import { StyleSheet, Text } from 'react-native'

const ListHeader = props => {
  return <Text style={styles.text}>{props.text}</Text>
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#e8daef',
    color: '#7d3c98',
    textAlign: 'center',
    fontSize: 18,
    padding: 5,
  },
})

export default ListHeader
