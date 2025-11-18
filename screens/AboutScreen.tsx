// screens/AboutScreen.tsx
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ThemedText } from "../components/themed-text";
import { ThemedView } from "../components/themed-view";
import { getLoryaneTheme } from "../constants/theme";

export default function AboutScreen() {
  const theme = getLoryaneTheme("light");

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }}>

        <ThemedText type="title" style={{ color: theme.primary, textAlign: "center", marginBottom: 20 }}>
          ✦ À propos d’Loryane ✦
        </ThemedText>

        <ThemedText style={styles.paragraph}>
          Loryane Ritual Mind est une application pensée pour t’accompagner dans ton
          bien-être quotidien grâce à des rituels simples, une philosophie
          douce et un univers visuel apaisant.
        </ThemedText>

        <ThemedText style={styles.paragraph}>
          Chaque rituel est conçu pour t’aider à te recentrer, respirer, te reconnecter
          à l’essentiel — en quelques minutes par jour.
        </ThemedText>

        <View style={styles.block}>
          <ThemedText style={styles.subtitle}>Mission</ThemedText>
          <ThemedText style={styles.content}>
            T’offrir une bulle quotidienne de calme, de douceur et d’alignement.
          </ThemedText>
        </View>

        <View style={styles.block}>
          <ThemedText style={styles.subtitle}>L’univers Loryane</ThemedText>
          <ThemedText style={styles.content}>
            Un design inspiré du luxe naturel : couleurs crème, symboles dorés,
            ambiance méditative et expériences sensorielles.
          </ThemedText>
        </View>

        <View style={styles.block}>
          <ThemedText style={styles.subtitle}>Loryane Essentielle</ThemedText>
          <ThemedText style={styles.content}>
            Pour retrouver l’univers complet : pierres naturelles,
            huiles essentielles, packs bien-être premium et rituels holistiques.
          </ThemedText>
        </View>

      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 26,
    paddingTop: 40,
  },
  paragraph: {
    color: "#3f2f28",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 16,
  },
  block: {
    marginTop: 28,
    padding: 16,
    backgroundColor: "#fff5f0",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d6b98c",
  },
  subtitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#3f2f28",
    marginBottom: 6,
  },
  content: {
    fontSize: 15,
    color: "#3f2f28",
    lineHeight: 20,
  },
});