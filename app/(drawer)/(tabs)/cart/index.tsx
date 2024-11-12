import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, SPACING } from "@/src/theme/theme";
import { useStore } from "@/src/store/store";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import HeaderBar from "@/src/components/Header/HeaderBar";
import EmptyListAnimation from "@/src/components/EmptyListAnimation";
import CartItem from "@/src/components/Cart/CartItem";

const indexCart = () => {
  const cartList = useStore((state) => state.CartList);
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}
      >
        <View
          style={[styles.scrollViewInnerView, { marginBottom: tabBarHeight }]}
        >
          <View style={styles.itemContainer}>
            <HeaderBar title="Cart" />
            {cartList.length == 0 ? (
              <EmptyListAnimation title="Cart is Empty" />
            ) : (
              <View style={styles.listItemContainer}>
                {cartList.map((data) => (
                  <TouchableOpacity
                    key={data.id}
                    onPress={() => console.log(data.index)}
                  >
                    <CartItem
                      id={data.id}
                      name={data.name}
                      imagelink_square={data.imagelink_square}
                      special_ingredient={data.special_ingredient}
                      roasted={data.roasted}
                      prices={data.prices}
                      type={data.type}
                      incrementCartItemQuantityHandler={() =>
                        console.log("incrementa")
                      }
                      decrementCartItemQuantityHandler={() =>
                        console.log("decrementa")
                      }
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default indexCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
  scrollViewInnerView: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemContainer: {
    flex: 1,
  },
  listItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});
