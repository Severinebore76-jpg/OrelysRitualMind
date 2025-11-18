import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Moon, Orbit, Scroll, Star, User } from "lucide-react-native";
import React from "react";

import { getLoryaneTheme } from "../constants/theme";

// Écrans
import AboutScreen from "../screens/AboutScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import HistoryScreen from "../screens/HistoryScreen";
import HomeScreen from "../screens/HomeScreen";
import LegalScreen from "../screens/LegalScreen";
import MeditationScreen from "../screens/MeditationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RitualScreen from "../screens/RitualScreen";

// 🆕 Nouveaux écrans réglementaires
import ConfidentialityScreen from "../screens/ConfidentialityScreen";
import DataScreen from "../screens/DataScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// -------------------------------
// 📌 STACK PROFIL = profil + sous-pages
// -------------------------------
function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfilMain"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Apropos"
        component={AboutScreen}
        options={{
          title: "À propos de Loryane",
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="Legal"
        component={LegalScreen}
        options={{
          title: "Mentions légales",
          headerShown: true,
        }}
      />

      {/* 🆕 Politique de confidentialité */}
      <Stack.Screen
        name="Confidentiality"
        component={ConfidentialityScreen}
        options={{
          title: "Politique de confidentialité",
          headerShown: true,
        }}
      />

      {/* 🆕 Données personnelles */}
      <Stack.Screen
        name="Data"
        component={DataScreen}
        options={{
          title: "Données personnelles",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

// -------------------------------
// 📌 TAB PRINCIPALE : 6 ICÔNES
// -------------------------------
export default function AppNavigator() {
  const theme = getLoryaneTheme("light");

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.accent,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopWidth: 0,
          height: 90,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 6,
          elevation: 3,
        },
        tabBarLabelStyle: {
          color: theme.text,
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Home size={26} color={color} strokeWidth={1.3} />
          ),
        }}
      />

      <Tab.Screen
        name="Rituel"
        component={RitualScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Orbit size={24} color={color} strokeWidth={1.2} />
          ),
        }}
      />

      <Tab.Screen
        name="Méditation"
        component={MeditationScreen}
        options={{
          tabBarIcon: ({ color }) => <Moon size={26} color={color} />,
        }}
      />

      <Tab.Screen
        name="Favoris"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Star size={26} color={color} strokeWidth={1.3} />
          ),
        }}
      />

      <Tab.Screen
        name="Historique"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color }) => <Scroll size={26} color={color} />,
        }}
      />

      {/* 👤 PROFIL + sous-écrans */}
      <Tab.Screen
        name="Profil"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => <User size={26} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}