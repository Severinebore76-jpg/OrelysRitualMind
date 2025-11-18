// screens/FavoritesScreen.tsx
// @ts-nocheck

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import LoryaneRotatingIcon from "../components/LoryaneRotatingIcon";
import type { Theme } from "../constants/theme";
import {
    getErrorColor,
    getLoryaneTheme,
    getThemeForMonth,
} from "../constants/theme";

import SymbolDisplay from "../components/SymbolDisplay";
import { SYMBOLS_MAP } from "../constants/symbols";

export default function FavoritesScreen() {
  const theme = getLoryaneTheme("light");
  const styles = makeStyles(theme);
  const navigation = useNavigation();

  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ---------------------------------------------------------
  // MIGRATION ANCIENS FAVORIS
  // ---------------------------------------------------------
  const migrateOldFavorites = async (oldList: any[]) => {
    let updated = [...oldList];
    let changed = false;

    updated = updated.map((fav) => {
      if (fav.dateSaved && fav.day && fav.monthNumber && fav.year) return fav;

      changed = true;

      const monthNumber = fav.month
        ? parseInt(fav.month.substring(0, 2))
        : fav.monthNumber || new Date().getMonth() + 1;

      const day = fav.day || new Date().getDate();
      const d = new Date(2025, monthNumber - 1, day);

      return {
        ...fav,
        day,
        monthNumber,
        year: 2025,
        dateSaved: d.toISOString(),
        monthKey: fav.monthKey || fav.month,
      };
    });

    if (changed) {
      await AsyncStorage.setItem("favorites", JSON.stringify(updated));
    }

    return updated;
  };

  // ---------------------------------------------------------
  // CHARGEMENT FAVORIS
  // ---------------------------------------------------------
  const loadFavorites = async () => {
    try {
      const stored = await AsyncStorage.getItem("favorites");
      const data = stored ? JSON.parse(stored) : [];
      const migrated = await migrateOldFavorites(data);

      setFavorites(migrated);
    } catch (err) {
      console.error("❌ Erreur chargement favoris :", err);
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------------------------------------
  // SUPPRESSION
  // ---------------------------------------------------------
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

  // ---------------------------------------------------------
  // LOADING
  // ---------------------------------------------------------
  if (loading) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: "#3f2f28" }}>Chargement des favoris...</Text>
      </View>
    );
  }

  // ---------------------------------------------------------
  // LISTE VIDE — AFFICHER LE TITRE + MESSAGE
  // ---------------------------------------------------------
  if (favorites.length === 0) {
    return (
      <View style={[styles.centered, { paddingHorizontal: 20 }]}>
        <Text style={styles.pageTitle}>⭐ Mes rituels favoris</Text>

        <Text
          style={{
            color: getErrorColor("light"),
            fontSize: 16,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Aucun favori pour le moment.
        </Text>
      </View>
    );
  }

  // ---------------------------------------------------------
  // LISTE FAVORIS
  // ---------------------------------------------------------
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 20 }}
      showsVerticalScrollIndicator={false}
    >
      {/* TITRE */}
      <Text style={styles.pageTitle}>⭐ Mes rituels favoris</Text>

      {favorites.map((item, idx) => {
        const themeMonth = getThemeForMonth(
          item.monthNumber ||
            parseInt(item.month?.substring(0, 2)) ||
            new Date().getMonth() + 1
        );

        // Reconstruction date
        let date;
        if (item.dateSaved && !isNaN(Date.parse(item.dateSaved))) {
          date = new Date(item.dateSaved).toLocaleDateString("fr-FR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          });
        } else {
          const d = new Date(item.year || 2025, item.monthNumber - 1, item.day);
          date = d.toLocaleDateString("fr-FR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          });
        }

        return (
          <TouchableOpacity
            key={idx}
            activeOpacity={0.9}
            onPress={() =>
              navigation.navigate("Rituel", {
                fromFavorites: true,
                favorite: item,
              })
            }
          >
            <View style={[styles.card, { borderColor: themeMonth.primary }]}>
              <Text style={[styles.date, { color: "#3f2f28" }]}>{date}</Text>

              <Text style={[styles.message, { color: "#3f2f28" }]}>
                “{item.message}”
              </Text>

              <View style={styles.elementsRow}>
                {item.stone && (
                  <View style={styles.elementItem}>
                    <Image
                      source={require("../assets/symbols/symbol_crystal.png")}
                      style={styles.elementIcon}
                    />
                    <Text style={styles.elementText}>{item.stone}</Text>
                  </View>
                )}

                {item.essential_oil && (
                  <View style={styles.elementItem}>
                    <Image
                      source={require("../assets/symbols/symbol_oil.png")}
                      style={styles.elementIcon}
                    />
                    <Text style={styles.elementText}>
                      {item.essential_oil}
                    </Text>
                  </View>
                )}

                {item.symbol && SYMBOLS_MAP[item.symbol] && (
                  <SymbolDisplay symbol={item.symbol} />
                )}
              </View>

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
        <LoryaneRotatingIcon />
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

// ===================================================================
// 🎨 STYLES
// ===================================================================
const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },

    centered: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.background,
    },

    pageTitle: {
  fontSize: 26,
  fontWeight: "700",
  textAlign: "center",
  color: getThemeForMonth().primary,
  marginBottom: 25,
  marginTop: 40,
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
      fontStyle: "italic",
      marginBottom: 12,
      lineHeight: 22,
    },

    elementsRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      marginBottom: 8,
    },

    elementItem: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },

    elementIcon: {
      width: 28,
      height: 28,
      resizeMode: "contain",
    },

    elementText: {
      fontSize: 15,
      fontWeight: "500",
      color: "#3f2f28",
    },

    removeBtn: {
      borderRadius: 6,
      paddingVertical: 8,
      alignItems: "center",
    },

    removeText: {
      color: "#f5ede6",
      fontWeight: "600",
      letterSpacing: 0.5,
    },

    iconWrapper: {
      alignItems: "center",
      marginVertical: 40,
    },

    clearBtn: {
      marginTop: 20,
      borderRadius: 8,
      paddingVertical: 10,
      alignItems: "center",
    },

    clearText: {
      color: "#f5ede6",
      fontWeight: "600",
    },
  });