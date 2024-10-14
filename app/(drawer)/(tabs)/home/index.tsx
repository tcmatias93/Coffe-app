import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '@/src/store/store'
import { getCategoriesFromData } from '@/src/utils/getCategoriesFromData'
import { getCoffeeList } from '@/src/utils/getCoffeeList'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '@/src/theme/theme'
import HeaderBar from '@/src/components/Header/HeaderBar'

const indexHome = () => {
  const CoffeList = useStore((state) => state.CoffeeList)
  const BeanList = useStore((state) => state.BeanList)
  const [categories, setCategories] = useState(getCategoriesFromData(CoffeList))
  const [searchText, setSearchText] = useState('')
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0]
  })
  const [sortedCoffee, setSortedCoffee] = useState(getCoffeeList(categoryIndex.category, CoffeList))


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryOrangeHex} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewFlex}>
        <HeaderBar />
        <Text style={styles.screenTitle}>Find the best {'\n'} coffee for you</Text>
      </ScrollView>
    </View>
  )
}

export default indexHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  },
  scrollViewFlex: {
    flexGrow: 1
  },
  screenTitle: {
    fontSize: FONTSIZE.size_24,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30
  }
})