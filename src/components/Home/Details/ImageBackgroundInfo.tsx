import {
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import GradientBGIcon from "../../GradientBGIcon";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "@/src/theme/theme";
import CustomIcon from "../../CustomIcon";

interface ImageBackgroundInfoProps {
  EnableBackHandler: boolean;
  imagelink_portrait: ImageProps;
  type: string;
  id: string;
  favourite: boolean;
  name: string;
  special_ingredient: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  backHandler: () => void;
  toggleFavourite: any;
}

const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
  imagelink_portrait,
  EnableBackHandler,
  backHandler,
  favourite,
  type,
  id,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  toggleFavourite,
}) => {
  return (
    <View>
      <ImageBackground
        source={imagelink_portrait}
        style={styles.backgroundImage}
      >
        {EnableBackHandler ? (
          <View style={styles.headerBarContainerWithBack}>
            <TouchableOpacity onPress={() => backHandler()}>
              <GradientBGIcon
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => toggleFavourite(favourite, type, id)}
            >
              <GradientBGIcon
                name="like"
                size={FONTSIZE.size_16}
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.headerBarContainerWithoutBack}>
            <TouchableOpacity onPress={() => console.log(favourite, type, id)}>
              <GradientBGIcon
                name="like"
                size={FONTSIZE.size_16}
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
              />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.imageInfoOuterContainer}>
          <View style={styles.imageInfoInnerContainer}>
            <View style={styles.infoContainerRow}>
              <View>
                <Text style={styles.itemTitleText}>{name}</Text>
                <Text style={styles.itemSubtitleText}>
                  {special_ingredient}{" "}
                </Text>
              </View>
              <View style={styles.itemPropertiesContainer}>
                <View style={styles.properFirst}>
                  <CustomIcon
                    name={type == "Bean" ? "bean" : "beans"}
                    size={type == "Bean" ? FONTSIZE.size_18 : FONTSIZE.size_24}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text
                    style={[
                      styles.propertyTextFirst,
                      {
                        marginTop:
                          type == "Bean"
                            ? SPACING.space_4 + SPACING.space_2
                            : 0,
                      },
                    ]}
                  >
                    {type}
                  </Text>
                </View>
                <View style={styles.properFirst}>
                  <CustomIcon
                    name={type == "Bean" ? "location" : "drop"}
                    size={FONTSIZE.size_16}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text style={styles.propertyTextLast}>{ingredients}</Text>
                </View>
              </View>
            </View>
            <View style={styles.infoContainerRow}>
              <View style={styles.ratingContainer}>
                <CustomIcon
                  name="star"
                  color={COLORS.primaryOrangeHex}
                  size={FONTSIZE.size_20}
                />
                <Text style={styles.ratingText}>{average_rating} </Text>
                <Text style={styles.ratingCountText}>({ratings_count}) </Text>
              </View>
              <View style={styles.roastedContainer}>
                <Text style={styles.roastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ImageBackgroundInfo;

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    aspectRatio: 20 / 25,
    justifyContent: "space-between",
  },
  headerBarContainerWithBack: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: SPACING.space_20,
  },
  headerBarContainerWithoutBack: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: SPACING.space_20,
  },
  imageInfoOuterContainer: {
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_30,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
    borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
  },
  imageInfoInnerContainer: {
    justifyContent: "space-between",
    gap: SPACING.space_15,
  },
  infoContainerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitleText: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_24,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  itemSubtitleText: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  itemPropertiesContainer: {
    flexDirection: "row",
    gap: SPACING.space_20,
    alignItems: "center",
  },
  properFirst: {
    height: 55,
    width: 55,
    borderRadius: BORDERRADIUS.radius_15,
    backgroundColor: COLORS.primaryBlackHex,
    justifyContent: "center",
    alignItems: "center",
  },
  propertyTextFirst: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_10,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  propertyTextLast: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_10,
    fontFamily: FONTFAMILY.poppins_medium,
    marginTop: SPACING.space_2 + SPACING.space_4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.space_8,
  },
  ratingText: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_18,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  ratingCountText: {
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLORS.secondaryLightGreyHex,
  },
  roastedContainer: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 55,
    width: 55 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: "center",
    alignItems: "center",
  },
  roastedText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
  },
});
