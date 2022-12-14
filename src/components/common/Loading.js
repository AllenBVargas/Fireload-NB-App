import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { COLORS } from "../../constants";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.quaternary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loading;
