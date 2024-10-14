import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '@/src/theme/theme'

const indexHistory = () => {
  return (
    <View style={styles.container}>
      <Text>indexHistory</Text>
    </View>
  )
}

export default indexHistory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  }
})