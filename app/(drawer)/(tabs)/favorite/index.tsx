import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '@/src/theme/theme'

const indexFavorite = () => {
  return (
    <View style={styles.container} >
      <Text>indexFavorite</Text>
    </View>
  )
}

export default indexFavorite

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  }
})