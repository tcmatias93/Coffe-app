import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useStore } from "@/src/store/store";
import { COLORS } from "@/src/theme/theme";
import ImageBackgroundInfo from "@/src/components/Home/Details/ImageBackgroundInfo";

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

  const backHandler = () => {
    navigation.goBack();
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
        />
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
});
