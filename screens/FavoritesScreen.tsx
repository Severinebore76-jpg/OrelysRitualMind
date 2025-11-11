// screens/FavoritesScreen.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import OrelysRotatingIcon from "../components/OrelysRotatingIcon";
import type { Theme } from "../constants/theme";
import {
  getErrorColor,
  getOrelysTheme,
  getThemeForMonth,
} from "../constants/theme";

export default function FavoritesScreen() {
  const theme = getOrelysTheme("light");
  const styles = makeStyles(theme);
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadFavorites = async () => {
    try {
      const stored = await AsyncStorage.getItem("favorites");
      const data = stored ? JSON.parse(stored) : [];
      setFavorites(data);
    } catch (err) {
      console.error("❌ Erreur chargement favoris :", err);
    } finally {
      setLoading(false);
    }
  };

  const removeFavorite = async (index: number) => {
    try {
      const updated = [...favorites];
      updated.splice(index, 1);
      await AsyncStorage.setItem("favorites", JSON.stringify(updated));
      setFavorites(updated);
    } catch (err) {
      console.error("Erreur suppression favori :", err);
    }
  };

  const clearFavorites = async () => {
    Alert.alert("Confirmation", "Supprimer tous les favoris ?", [
      { text: "Annuler", style: "cancel" },
      {
        text: "Supprimer",
        style: "destructive",
        onPress: async () => {
          await AsyncStorage.removeItem("favorites");
          setFavorites([]);
        },
      },
    ]);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: "#3f2f28" }}>Chargement des favoris...</Text>
      </View>
    );
  }

  if (favorites.length === 0) {
    return (
      <View style={styles.centered}>
        <Text
          style={{
            color: getErrorColor("light"),
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          Aucun favori pour le moment.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 20 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>⭐ Mes rituels favoris</Text>

      {favorites.map((item, idx) => {
        const themeMonth = getThemeForMonth(
          Number(item.month?.substring(0, 2)) ||
            new Date(item.dateSaved).getMonth() + 1
        );

        // ✅ Corrige la date inconnue
        const date =
          item.dateSaved && !isNaN(Date.parse(item.dateSaved))
            ? new Date(item.dateSaved).toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })
            : new Date().toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              });

        return (
          <TouchableOpacity
            key={idx}
            activeOpacity={0.9}
            // @ts-ignore → on force la navigation sans casser le typage
            onPress={() =>
              // @ts-ignore
              navigation.navigate("Rituel", {
                fromFavorites: true,
                favorite: item,
              })
            }
          >
            <View
              style={[styles.card, { borderColor: themeMonth.primary }]}
            >
              <Text style={[styles.date, { color: "#3f2f28" }]}>{date}</Text>

              {/* 🟤 Message marron comme sur RituelScreen */}
              <Text
                style={[
                  styles.message,
                  { color: "#3f2f28", fontStyle: "italic" },
                ]}
              >
                {item.message}
              </Text>

              <Text style={[styles.details, { color: "#3f2f28" }]}>
                💎 {item.stone} | 🌿 {item.essential_oil} | {item.symbol}
              </Text>

              <TouchableOpacity
                onPress={() => removeFavorite(idx)}
                style={[styles.removeBtn, { backgroundColor: theme.accent }]}
              >
                <Text style={styles.removeText}>RETIRER</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
      })}

      <View style={styles.iconWrapper}>
        <OrelysRotatingIcon />
      </View>

      <TouchableOpacity
        onPress={clearFavorites}
        style={[styles.clearBtn, { backgroundColor: theme.accent }]}
      >
        <Text style={styles.clearText}>🗑️ Supprimer tous les favoris</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.background },
    centered: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.background,
    },
    title: {
      color: theme.primary,
      fontSize: 22,
      fontWeight: "600",
      textAlign: "center",
      marginBottom: 20,
    },
    card: {
      backgroundColor: "rgba(255, 245, 240, 0.85)",
      borderRadius: 12,
      padding: 16,
      marginBottom: 14,
      borderWidth: 1,
    },
    date: {
      fontSize: 13,
      marginBottom: 8,
      textTransform: "capitalize",
    },
    message: {
      fontSize: 16,
      marginBottom: 8,
      lineHeight: 22,
    },
    details: { fontSize: 13, marginBottom: 8 },
    removeBtn: {
      borderRadius: 6,
      paddingVertical: 8,
      alignItems: "center",
    },
    removeText: {
      color: "#f5ede6", // beige clair
      fontWeight: "600",
      letterSpacing: 0.5,
    },
    iconWrapper: {
      alignItems: "center",
      marginVertical: 30,
    },
    clearBtn: {
      marginTop: 20,
      borderRadius: 8,
      paddingVertical: 10,
      alignItems: "center",
    },
    clearText: {
      color: "#f5ede6", // beige clair
      fontWeight: "600",
    },
  });