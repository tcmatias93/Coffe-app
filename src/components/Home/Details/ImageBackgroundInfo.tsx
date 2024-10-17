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
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "@/src/theme/theme";

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
  ToggleFavourite: any;
}

const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
  imagelink_portrait,
  EnableBackHandler,
  backHandler,
  favourite,
  type,
  id,
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

        <View style={styles.imageInfoOuterContainer}></View>
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
});
