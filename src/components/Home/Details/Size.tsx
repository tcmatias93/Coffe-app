import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "@/src/theme/theme";
import { Price } from "@/src/store/typeStore";

interface SizeProps {
  prices: Price[];
  price: Price;
  setPrice: (newPrice: Price) => void;
  type: string;
}

const Size: React.FC<SizeProps> = ({ prices, price, setPrice, type }) => {
  return (
    <>
      <Text style={styles.title}>Size</Text>
      <View style={styles.sizeOuterContainer}>
        {prices.map((data) => (
          <TouchableOpacity
            key={data.size}
            style={[
              styles.sizeBox,
              {
                borderColor:
                  data.size == price.size
                    ? COLORS.primaryOrangeHex
                    : COLORS.primaryDarkGreyHex,
              },
            ]}
            onPress={() => setPrice(data)}
          >
            <Text
              style={[
                styles.sizeText,
                {
                  fontSize:
                    type == "Bean" ? FONTSIZE.size_14 : FONTSIZE.size_16,
                  color:
                    data.size == price.size
                      ? COLORS.primaryOrangeHex
                      : COLORS.primaryWhiteHex,
                },
              ]}
            >
              {data.size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default Size;

const styles = StyleSheet.create({
  title: {
    color: COLORS.secondaryLightGreyHex,
    marginBottom: SPACING.space_10,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  sizeOuterContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: SPACING.space_20,
  },
  sizeBox: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreyHex,
    height: SPACING.space_24 * 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
  },
  sizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
  },
});
