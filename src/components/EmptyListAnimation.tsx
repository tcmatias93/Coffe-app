import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTFAMILY, FONTSIZE } from "../theme/theme";
import LottieView from "lottie-react-native";

interface EmptyListAnimationProps {
  title: string;
}

const EmptyListAnimation: React.FC<EmptyListAnimationProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.lottieStyle}
        autoPlay
        loop
        source={require("@/src/lottie/coffeecup.json")}
      />
      <Text style={styles.lottieText}>{title}</Text>
    </View>
  );
};

export default EmptyListAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  lottieStyle: {
    height: 300,
  },
  lottieText: {
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_medium,
    textAlign: "center",
  },
});
