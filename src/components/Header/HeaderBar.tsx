import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '@/src/theme/theme'
import ProfilePic from './ProfilePic'
import GradientBGIcon from './GradientBGIcon'

interface HeaderBarProps {
  title?: string
}
const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
  return (
    <View style={styles.HeaderContainer}>
      <GradientBGIcon name='menu' size={FONTSIZE.size_16} color={COLORS.primaryLightGreyHex} />
      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePic />
    </View>
  )
}

export default HeaderBar

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex
  }
})