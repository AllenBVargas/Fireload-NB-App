import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { LayoutScroll, Layout } from "../../layouts";
import { BannerImage, RectButton, Input } from "../../components";
import { COLORS, SIZES, FONTS, assets } from "../../constants";

import SelectList from "react-native-dropdown-select-list";

const MaterialFormScreen = ({ navigation }) => {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);
  const [materialsAPI, setMaterialsAPI] = useState([
    {
      id: 1,
      name: "Aceite de algodón",
      heatValue: 9,
      heatValue2: 37.2,
    },
    {
      id: 2,
      name: "Aceite de creosota",
      heatValue: 9,
      heatValue2: 37.2,
    },
    {
      id: 3,
      name: "Aceite de lino",
      heatValue: 9,
      heatValue2: 37.2,
    },
    {
      id: 4,
      name: "Aceite mineral",
      heatValue: 10,
      heatValue2: 42,
    },
    {
      id: 5,
      name: "Aceite de oliva",
      heatValue: 10,
      heatValue2: 42,
    },
    {
      id: 17,
      name: "Papel",
      heatValue: 4,
      heatValue2: 16.7,
    },
    {
      id: 18,
      name: "Cartón",
      heatValue: 4,
      heatValue2: 16.7,
    },
  ]);
  const [material, setMaterial] = useState({
    material_id: 0,
    weight: 0,
    heatValue: 0,
  });

  const createSelectList = (data) => {
    const selectList = data.map((item) => {
      return {
        key: item.id,
        value: item.name,
      };
    });
    return selectList;
  };

  const calculateTotalCalorificValue = () => {
    const total = material.weight * material.heatValue;
    return total;
  };

  const handleChanges = (name, value) => {
    setMaterial({ ...material, [name]: value });
  };

  const handleListChanges = () => {
    const materialSelected = materialsAPI.find((item) => item.id === selected);
    setMaterial({
      ...material,
      material_id: materialSelected.id,
      heatValue: materialSelected.heatValue,
    });
  };

  const handleSummit = async () => {
    try {
      const sendObject = {
        material_id: material.material_id,
        weight: + material.weight,
        heatValue: material.heatValue,
        totalCalorificValue: calculateTotalCalorificValue(),
      };
      console.log(sendObject);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const dataSelectList = createSelectList(materialsAPI);
    setData(dataSelectList);
  }, []);

  return (
    <LayoutScroll
      style={{
        justifyContent: "center",
      }}
    >
      <BannerImage
        image={assets.addMaterial}
        title="Agregar Material"
        subtitle="Agrega un material a la lista"
      />

      <View style={styles.container}>
        <View style={styles.InputSelect}>
          <Text style={styles.label}>Material</Text>
          <SelectList
            setSelected={setSelected}
            data={data}
            onSelect={handleListChanges}
            placeholder="Selecciona un material"
            searchPlaceholder="Buscar material"
          />

          {selected != "" && (
            <View style={styles.containerMaterialInfo}>
              <Text style={styles.labelExtra}>
                kcal/kg: {material.heatValue.toFixed(3).replace(".", ",")}{" "}
              </Text>
            </View>
          )}
        </View>

        <Input
          label="Peso"
          placeholder="Peso"
          value={material.weight}
          onChangeText={(value) => {
            handleChanges("weight", value);
          }}
          keyboardType="numeric"
        />

        <View style={styles.containerTotal}>
          <Text style={styles.textTotal}>Total Calorifico: </Text>
          <Text style={styles.textTotal}>
            {calculateTotalCalorificValue().toFixed(3).replace(".", ",")} kcal
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <RectButton
            label="Agregar"
            fontSize={SIZES.font}
            color={COLORS.primary}
            handlePress={handleSummit}
            width="80%"
          />
        </View>
      </View>
    </LayoutScroll>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.padding,
  },
  containerTotal: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: SIZES.padding,
  },
  textTotal: {
    fontSize: SIZES.font,
    fontFamily: FONTS.InterSemiBold,
    color: COLORS.primary,
  },

  InputSelect: {
    flex: 1,
    marginTop: SIZES.padding,
  },
  label: {
    fontSize: SIZES.font,
    fontFamily: FONTS.InterSemiBold,
    color: COLORS.primary,
  },
  labelExtra: {
    fontSize: SIZES.font,
    fontFamily: FONTS.InterSemiBold,
    color: COLORS.textGray,
  },
  containerMaterialInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: SIZES.padding,
    paddingTop: SIZES.padding,
  },
});

export default MaterialFormScreen;
