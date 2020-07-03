import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

export default props => (
  <View style={styles.main}>
    <ActivityIndicator size='large'></ActivityIndicator>
    <Text style={styles.quoteText}>A fit, healthy body—that is the best fashion statement.</Text>
  </View>
)

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  quoteText: {
    textAlign: 'center',
    paddingHorizontal: 5,
    paddingTop: 20,
    color: '#d68910',
    fontStyle: 'italic',
  },
})
