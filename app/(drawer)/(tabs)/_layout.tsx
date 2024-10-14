import { StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { COLORS } from '@/src/theme/theme'
import CustomIcon from '@/src/components/CustomIcon'

const TabsLayout = () => {

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,

      })}
    >
      <Tabs.Screen
        name='home/index'
        options={{
          tabBarLabel: 'Home',
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon name='home' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
          )
        }}
      />
      <Tabs.Screen
        name='cart/index'
        options={{
          tabBarLabel: 'Cart',
          title: 'Cart',
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon name='cart' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
          )
        }}
      />
      <Tabs.Screen
        name='favorite/index'
        options={{
          tabBarLabel: 'Favorite',
          title: 'Favorites',
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon name='like' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
          )
        }}
      />
      <Tabs.Screen
        name='history/index'
        options={{
          tabBarLabel: 'History',
          title: 'Order History',
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon name='bell' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
          )
        }}
      />
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent'
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
})