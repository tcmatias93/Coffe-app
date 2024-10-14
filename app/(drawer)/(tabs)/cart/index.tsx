import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '@/src/theme/theme'

const indexCart = () => {
  return (
    <View style={styles.container}>
      <Text>indexCart</Text>
    </View>
  )
}

export default indexCart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  }
})