import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "@/src/theme/theme";

interface CategoryCoffeeProps {
  categories: string[];
  categoryIndex: { index: number; category: string };
  setCategoryIndex: (category: { index: number; category: string }) => void;
  setSortedCoffee: (coffeeList: any[]) => void;
  getCoffeeList: (category: string, coffeeList: any[]) => any[];
  CoffeeList: any[];
  listRef: React.RefObject<FlatList<any>>;
}

const CategoryCoffee: React.FC<CategoryCoffeeProps> = ({
  categories,
  setCategoryIndex,
  setSortedCoffee,
  getCoffeeList,
  CoffeeList,
  categoryIndex,
  listRef,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((category, index) => (
        <View key={index.toString()} style={styles.categoryView}>
          <TouchableOpacity
            style={styles.categoryTouch}
            onPress={() => {
              listRef?.current?.scrollToOffset({ animated: true, offset: 0 });
              setCategoryIndex({ index: index, category: categories[index] });
              setSortedCoffee([
                ...getCoffeeList(categories[index], CoffeeList),
              ]);
            }}
          >
            <Text style={styles.categoryText}>{category}</Text>
            {categoryIndex.index == index ? (
              <View style={styles.activeCategory}></View>
            ) : (
              <></>
            )}
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default CategoryCoffee;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  categoryView: {
    paddingHorizontal: SPACING.space_12,
  },
  categoryTouch: {
    alignItems: "center",
  },
  categoryText: {
    color: COLORS.primaryLightGreyHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    marginBottom: SPACING.space_4,
  },
  activeCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: BORDERRADIUS.radius_10,
  },
});
