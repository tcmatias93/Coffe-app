import { SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Stack } from 'expo-router/stack'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { COLORS } from '@/src/theme/theme'

SplashScreen.preventAutoHideAsync()


const _layout = () => {
  const [loaded, error] = useFonts({
    app_icons: require('@/src/assets/fonts/app_icons.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>

  )
}

export default _layout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  },
})