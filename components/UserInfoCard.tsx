// components/UserInfoCard.tsx
// @ts-nocheck
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "../constants/layout";
import { getLoryaneTheme } from "../constants/theme";
import { typography } from "../constants/typography";

export default function UserInfoCard() {
  const theme = getLoryaneTheme("light");

  return (
    <View style={[styles.card, { borderColor: theme.primary }]}>
      {/* AVATAR */}
      <Image
        source={require("../assets/images/avatar_placeholder.png")}
        style={styles.avatar}
      />

      {/* INFOS */}
      <View style={{ alignItems: "center" }}>
        <Text style={[styles.name, { color: theme.text }]}>
          Utilisateur Loryane
        </Text>

        <Text style={styles.email}>user@example.com</Text>

        <Text style={styles.status}>Compte non connecté</Text>
      </View>

      {/* BOUTON */}
      <TouchableOpacity style={[styles.button, { borderColor: theme.primary }]}>
        <Text style={[styles.buttonText, { color: theme.primary }]}>
          Se connecter / Créer un compte
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: scale(20),
    borderRadius: scale(16),
    borderWidth: 1,
    backgroundColor: "#f7efe8",
    alignItems: "center",
    marginBottom: verticalScale(28),
  },
  avatar: {
    width: scale(70),
    height: scale(70),
    borderRadius: 50,
    marginBottom: verticalScale(12),
  },
  name: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.semibold,
    marginBottom: 4,
  },
  email: {
    fontSize: typography.size.sm,
    color: "#6f5b55",
    marginBottom: 6,
  },
  status: {
    fontSize: typography.size.xs,
    color: "#8c7c77",
    fontStyle: "italic",
    marginBottom: verticalScale(14),
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: typography.size.sm,
    fontWeight: "600",
  },
});