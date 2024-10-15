import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Bean } from "@/src/store/typeStore";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import CoffeeCard from "./CoffeeCard";
import { SPACING } from "@/src/theme/theme";

interface BeansListProps {
  beanList: Bean[];
  coffeCardAddToCart: () => void;
}

const BeansList: React.FC<BeansListProps> = ({
  beanList,
  coffeCardAddToCart,
}) => {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={beanList}
      contentContainerStyle={[
        styles.flatListContainer,
        { marginBottom: tabBarHeight },
      ]}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => console.log(item.id)}>
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

export default BeansList;

const styles = StyleSheet.create({
  flatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },
});
