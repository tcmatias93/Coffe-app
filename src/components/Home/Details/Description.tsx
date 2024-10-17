import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "@/src/theme/theme";

interface DescriptionProps {
  description: string;
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  const [fullDesc, setFullDesc] = useState(false);

  return (
    <>
      <Text style={styles.title}>Description</Text>
      {fullDesc ? (
        <TouchableWithoutFeedback
          onPress={() => {
            setFullDesc((prev) => !prev);
          }}
        >
          <Text style={styles.descriptionText}>{description}</Text>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback
          onPress={() => {
            setFullDesc((prev) => !prev);
          }}
        >
          <Text style={styles.descriptionText} numberOfLines={3}>
            {description}
          </Text>
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

export default Description;

const styles = StyleSheet.create({
  title: {
    color: COLORS.secondaryLightGreyHex,
    marginBottom: SPACING.space_10,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  descriptionText: {
    color: COLORS.primaryWhiteHex,
    letterSpacing: 0.5,
    marginBottom: SPACING.space_30,
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.poppins_regular,
  },
});
