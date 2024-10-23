import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { useStore } from "@/src/store/store";
import { getCategoriesFromData } from "@/src/utils/getCategoriesFromData";
import { getCoffeeList } from "@/src/utils/getCoffeeList";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "@/src/theme/theme";
import HeaderBar from "@/src/components/Header/HeaderBar";
import SearchInput from "@/src/components/Home/SearchInput";
import CategoryCoffee from "@/src/components/Home/CategoryCoffee";
import CoffeeList from "@/src/components/Home/CoffeeList";
import BeansList from "@/src/components/Home/BeansList";
import { Bean, Coffee } from "@/src/store/typeStore";

const indexHome = () => {
  const coffeList = useStore((state) => state.CoffeeList);
  const beanList = useStore((state) => state.BeanList);
  const addToCart = useStore((state) => state.addToCart);
  const [categories, setCategories] = useState(
    getCategoriesFromData(coffeList)
  );
  const [searchText, setSearchText] = useState("");
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, coffeList)
  );

  const listRef = useRef<FlatList<any>>(null);

  const coffeCardAddToCart = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    prices,
  }: Coffee | Bean) => {
    addToCart(
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices
    );
  };

  const searchCoffee = (search: string) => {
    if (search != "") {
      listRef?.current?.scrollToOffset({ animated: true, offset: 0 });
      setCategoryIndex({ index: 0, category: categories[0] });
      setSortedCoffee([
        ...coffeList.filter((item: Coffee) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ),
      ]);
    }
  };

  const resetSearchCoffee = () => {
    listRef?.current?.scrollToOffset({ animated: true, offset: 0 });
    setCategoryIndex({ index: 0, category: categories[0] });
    setSortedCoffee([...coffeList]);
    setSearchText("");
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryOrangeHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}
      >
        <HeaderBar />
        <Text style={styles.screenTitle}>
          Find the best {"\n"} coffee for you
        </Text>
        <SearchInput
          searchText={searchText}
          setSearchText={setSearchText}
          resetSearchCoffee={resetSearchCoffee}
          searchCoffee={searchCoffee}
        />
        <CategoryCoffee
          categories={categories}
          setCategoryIndex={setCategoryIndex}
          setSortedCoffee={setSortedCoffee}
          getCoffeeList={getCoffeeList}
          CoffeeList={coffeList}
          categoryIndex={categoryIndex}
          listRef={listRef}
        />
        <CoffeeList
          sortedCoffee={sortedCoffee}
          coffeCardAddToCart={coffeCardAddToCart}
          listRef={listRef}
        />
        <Text style={styles.coffeeBeansTitle}>Coffee Beans</Text>

        <BeansList
          beanList={beanList}
          coffeCardAddToCart={coffeCardAddToCart}
        />
      </ScrollView>
    </View>
  );
};

export default indexHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
  screenTitle: {
    fontSize: FONTSIZE.size_24,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  coffeeBeansTitle: {
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryLightGreyHex,
    fontFamily: FONTFAMILY.poppins_medium,
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_20,
  },
});
