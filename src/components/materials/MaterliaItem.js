import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SIZES, COLORS, FONTS } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MaterliaItem = ({ material, handleDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={[styles.text, styles.title]}>{material.name}</Text>
        <View style={styles.dataContainer}>
          <Text style={[styles.text, styles.textSecondary]}>
            Poder Calorifico: {material.heatValue} Mcal/Kg
          </Text>
          <Text style={[styles.text, styles.textSecondary]}>
            Peso: {material.Sector_Material.weight} kg
          </Text>
          <Text style={[styles.text, styles.textSecondary]}>
            Ci: {material.Sector_Material.ci}
          </Text>
        </View>
      </View>

      <View style={styles.containerFireloadData}>
        <Text
          style={[styles.text, styles.fireloadData, { fontSize: SIZES.font }]}
        >
          Total:{" "}
        </Text>
        <View style={styles.containerTotal}>
          <MaterialCommunityIcons name="fire" size={20} color="white" />
          <Text style={[styles.text, styles.fireloadData]}>
            {material.Sector_Material.total} Mcal
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.delete}
        onPress={() => {
          handleDelete(material.id);
        }}
      >
        <MaterialCommunityIcons
          name="delete"
          size={SIZES.font * 1.5}
          color={COLORS.white}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#021D34",
    marginVertical: SIZES.padding - 5,
    marginHorizontal: SIZES.padding,
    borderRadius: 5,
    paddingVertical: SIZES.padding,
    paddingLeft: SIZES.padding,
    paddingRight: SIZES.padding * 3,
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {
    flex: 1,
  },
  dataContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  text: {
    color: COLORS.white,
  },
  title: {
    fontFamily: FONTS.InterBold,
    fontSize: SIZES.large,
  },
  textSecondary: {
    fontFamily: FONTS.InterRegular,
    fontSize: SIZES.small,
  },
  fireloadData: {
    fontFamily: FONTS.InterBold,
    fontSize: SIZES.small,
  },
  containerFireloadData: {
    flexDirection: "column",
    backgroundColor: "#C53101",
    borderRadius: 5,
    padding: 4,
    justifyContent: "flex-start",
    minWidth: 125,
  },
  containerTotal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  delete: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 5,
    borderRadius: 5,
  },
});

export default MaterliaItem;
