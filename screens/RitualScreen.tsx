import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RitualScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔥 Rituel du jour</Text>
      <Text style={styles.subtitle}>Pierre • Huile • Symbole</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 20, fontWeight: "700", color: "#D4AF37" },
  subtitle: { marginTop: 8, fontSize: 14, color: "#FFFFFF" },
});