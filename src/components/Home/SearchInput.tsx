import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CustomIcon from "../CustomIcon";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "@/src/theme/theme";

interface SearchInputProps {
  searchText: string;
  setSearchText: (text: string) => void;
  resetSearchCoffee: () => void;
  searchCoffee: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchText,
  setSearchText,
  resetSearchCoffee,
  searchCoffee,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => searchCoffee(searchText)}>
        <CustomIcon
          style={styles.inputIcon}
          name="search"
          size={FONTSIZE.size_18}
          color={
            searchText.length > 0
              ? COLORS.primaryOrangeHex
              : COLORS.primaryLightGreyHex
          }
        />
      </TouchableOpacity>
      <TextInput
        style={styles.inputText}
        placeholder="Find your coffee...."
        value={searchText}
        placeholderTextColor={COLORS.primaryLightGreyHex}
        onChangeText={(text) => {
          setSearchText(text);
          searchCoffee(text);
        }}
      />
      {searchText.length > 0 ? (
        <TouchableOpacity onPress={() => resetSearchCoffee()}>
          <CustomIcon
            name="close"
            size={FONTSIZE.size_16}
            color={COLORS.primaryLightGreyHex}
            style={styles.inputIcon}
          />
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: "center",
  },
  inputIcon: {
    marginHorizontal: SPACING.space_20,
  },
  inputText: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
});
