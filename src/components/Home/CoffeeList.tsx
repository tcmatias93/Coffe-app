import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Coffee } from "@/src/store/typeStore";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "@/src/theme/theme";
import CoffeeCard from "./CoffeeCard";
import { useRouter } from "expo-router";

interface CoffeeListProps {
  sortedCoffee: Coffee[];
  coffeCardAddToCart: () => void;
  listRef: React.RefObject<FlatList<any>>;
}

const CoffeeList: React.FC<CoffeeListProps> = ({
  sortedCoffee,
  coffeCardAddToCart,
  listRef,
}) => {
  const router = useRouter();

  return (
    <FlatList
      ref={listRef}
      horizontal
      ListEmptyComponent={
        <View style={styles.containerEmpty}>
          <Text style={styles.categoryText}>No Coffee Available</Text>
        </View>
      }
      showsHorizontalScrollIndicator={false}
      data={sortedCoffee}
      contentContainerStyle={styles.flatListContainer}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            router.push({
              pathname: `/home/details/[id]`,
              params: { index: item.index, id: item.id, type: item.type },
            })
          }
        >
          <CoffeeCard
            imagelink_square={item.imagelink_square}
            average_rating={item.average_rating}
            name={item.name}
            special_ingredient={item.special_ingredient}
            price={item.prices[2]}
            id={item.id}
            index={item.index}
            type={item.type}
            roasted={item.roasted}
            buttonPressHandler={coffeCardAddToCart}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default CoffeeList;

const styles = StyleSheet.create({
  flatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },
  containerEmpty: {
    width: Dimensions.get("window").width - SPACING.space_30 * 2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SPACING.space_36 * 3.6,
  },
  categoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
});
