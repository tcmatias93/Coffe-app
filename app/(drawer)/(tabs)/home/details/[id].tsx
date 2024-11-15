import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useStore } from "@/src/store/store";
import { COLORS, SPACING } from "@/src/theme/theme";
import ImageBackgroundInfo from "@/src/components/Home/Details/ImageBackgroundInfo";
import Description from "@/src/components/Home/Details/Description";
import Size from "@/src/components/Home/Details/Size";
import PaymentFooter from "@/src/components/Home/Details/PaymentFooter";
import { Bean, Coffee } from "@/src/store/typeStore";

const Details = () => {
  const { id, index, type } = useLocalSearchParams();
  const navigation = useNavigation();
  // Convertir el índice a número si es un string
  const numericIndex = Array.isArray(index)
    ? parseInt(index[0])
    : parseInt(index as string);
  const itemOfIndex = useStore((state) =>
    type == "Coffee" ? state.CoffeeList : state.BeanList
  )[numericIndex];
  const [price, setPrice] = useState(itemOfIndex.prices[0]);
  const addToFavoriteList = useStore((state) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state) => state.deleteFromFavoriteList
  );
  const addToCart = useStore((state) => state.addToCart);
  const calculateCartPrice = useStore((state) => state.calculateCartPrice);

  const backHandler = () => {
    navigation.goBack();
  };

  const toggleFavourite = (favourite: any, type: any, id: any) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };

  const addToCarthandler = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    price,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices: [{ ...price, quantity: 1 }],
    });
    //calculateCartPrice();
    navigation.navigate("cart/index");
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <ImageBackgroundInfo
          imagelink_portrait={itemOfIndex.imagelink_portrait}
          EnableBackHandler={true}
          backHandler={backHandler}
          favourite={itemOfIndex.favourite}
          type={itemOfIndex.type}
          id={itemOfIndex.id}
          name={itemOfIndex.name}
          special_ingredient={itemOfIndex.special_ingredient}
          ingredients={itemOfIndex.ingredients}
          average_rating={itemOfIndex.average_rating}
          ratings_count={itemOfIndex.ratings_count}
          roasted={itemOfIndex.roasted}
          toggleFavourite={toggleFavourite}
        />
        <View style={styles.footerInfo}>
          <Description description={itemOfIndex.description} />
          <Size
            prices={itemOfIndex.prices}
            price={price}
            setPrice={setPrice}
            type={itemOfIndex.type}
          />
          <PaymentFooter
            price={price}
            buttonTitle="Add to Cart"
            buttonPresHandler={() =>
              addToCarthandler({
                id: itemOfIndex.id,
                index: itemOfIndex.index,
                name: itemOfIndex.name,
                roasted: itemOfIndex.roasted,
                imagelink_square: itemOfIndex.imagelink_square,
                special_ingredient: itemOfIndex.special_ingredient,
                type: itemOfIndex.type,
                price: price,
              })
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  footerInfo: {
    padding: SPACING.space_20,
  },
});
