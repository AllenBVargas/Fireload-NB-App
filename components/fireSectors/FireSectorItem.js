import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { IconLabelItem } from "../common/SubInfo";
import { COLORS, SIZES, FONTS, assets } from "../../constants";

const FireSectorItem = ({ sector, navigation }) => {
  const handlePress = () => {
    navigation.navigate("Fire Sector Screen", { sector });
  };

  return (
    <View style={styles.container}>
      <Image
        source={assets.place}
        resizeMode="contain"
        style={styles.imageIcon}
      />
      <View style={styles.informationContainer}>
        <Text style={styles.title}>{sector.name}</Text>
        <Text style={styles.date}>{sector.date}</Text>
      </View>
      <IconLabelItem icon="🔥" label={sector.totalFireload} />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Ver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.base * 2,
  },
  imageIcon: {
    width: 48,
    height: 48,
  },
  informationContainer: {
    flex: 1,
    marginLeft: SIZES.base,
  },
  title: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  date: {
    fontFamily: FONTS.InterRegular,
    fontSize: SIZES.small - 2,
    color: COLORS.textGray,
    marginTop: 3,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.base,
    paddingHorizontal: SIZES.base,
    paddingVertical: SIZES.base / 2,
  },
  buttonText: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: SIZES.small,
    color: COLORS.white,
  },
});

export default FireSectorItem;