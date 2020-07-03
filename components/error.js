import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => (
  <View style={styles.main}>
    <Text style={styles.erText}>{props.text}</Text>
    <Icon name='frown-o' size={50} color='orangered' />
  </View>
)

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  erText: {
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: '#ffbfbe',
    color: '#f13734',
  },
})
