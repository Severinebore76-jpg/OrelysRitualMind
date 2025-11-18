import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ThemedText } from "../components/themed-text";
import { ThemedView } from "../components/themed-view";
import { getLoryaneTheme } from "../constants/theme";

export default function DataScreen() {
  const theme = getLoryaneTheme("light");

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* TITRE */}
        <ThemedText
          type="title"
          style={{ color: theme.primary, textAlign: "center", marginTop: 40, marginBottom: 20 }}
        >
          Données personnelles
        </ThemedText>

        {/* INTRO */}
        <ThemedText style={styles.text}>
          Loryane Ritual Mind adopte une gestion simple, transparente et respectueuse
          de tes données.{"\n"}
          L’objectif est clair : t’offrir une expérience intime, sécurisée
          et sans aucune exploitation commerciale.
        </ThemedText>

        {/* DONNÉES NON COLLECTÉES */}
        <ThemedText style={styles.sectionTitle}>Données non collectées</ThemedText>
        <ThemedText style={styles.text}>
          Loryane Ritual Mind ne collecte pas :{"\n"}
          • ton identité (nom, email, téléphone){"\n"}
          • tes activités sur d’autres sites ou apps{"\n"}
          • de données permettant de te profiler{"\n"}
          • aucune donnée à des fins publicitaires
        </ThemedText>

        {/* DONNÉES LOCALES */}
        <ThemedText style={styles.sectionTitle}>Données stockées localement</ThemedText>
        <ThemedText style={styles.text}>
          Les données suivantes restent uniquement sur ton appareil :{"\n"}
          • favoris{"\n"}
          • historique des rituels{"\n"}
          • préférences visuelles{"\n"}
          • configuration du profil invité{"\n"}
          Aucune de ces informations n’est envoyée sur un serveur.
        </ThemedText>

        {/* MODE CONNECTÉ */}
        <ThemedText style={styles.sectionTitle}>Mode connecté (à venir)</ThemedText>
        <ThemedText style={styles.text}>
          Lorsque la création de compte sera disponible, seules les données utiles
          seront synchronisées sur un serveur sécurisé :{"\n"}
          • email{"\n"}
          • abonnement Loryane+{"\n"}
          • progression personnelle (optionnelle)
        </ThemedText>

        {/* FINALITÉ */}
        <ThemedText style={styles.sectionTitle}>Finalité des données</ThemedText>
        <ThemedText style={styles.text}>
          Les données servent uniquement à :{"\n"}
          • personnaliser ton expérience{"\n"}
          • synchroniser ton abonnement premium{"\n"}
          • retrouver ton historique{"\n"}
          • améliorer ton confort d’utilisation
        </ThemedText>

        {/* PARTAGE */}
        <ThemedText style={styles.sectionTitle}>Partage des données</ThemedText>
        <ThemedText style={styles.text}>
          Aucune donnée n’est vendue, partagée ou transmise à des tiers.{"\n"}
          Aucun tracking externe. Aucune publicité ciblée.
        </ThemedText>

        {/* SÉCURITÉ */}
        <ThemedText style={styles.sectionTitle}>Sécurité des données</ThemedText>
        <ThemedText style={styles.text}>
          Les données locales dépendent de la sécurité de ton appareil
          (code, FaceID, verrouillage biométrique).{"\n"}
          Les données synchronisées seront protégées par des protocoles sécurisés.
        </ThemedText>

        {/* RGPD */}
        <ThemedText style={styles.sectionTitle}>Tes droits (RGPD)</ThemedText>
        <ThemedText style={styles.text}>
          Tu peux exercer à tout moment :{"\n"}
          • droit d’accès{"\n"}
          • rectification{"\n"}
          • effacement{"\n"}
          • opposition{"\n"}
          • portabilité{"\n"}
          Il suffit de nous contacter.
        </ThemedText>

        {/* CONTACT */}
        <ThemedText style={styles.sectionTitle}>Contact</ThemedText>
        <ThemedText style={styles.text}>
          📧 support@loryane.com
        </ThemedText>

        <ThemedText
          style={[styles.text, { marginTop: 40, opacity: 0.6, textAlign: "center" }]}
        >
          Dernière mise à jour : {new Date().getFullYear()}
        </ThemedText>

      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 26 },
  sectionTitle: {
    marginTop: 24,
    fontSize: 17,
    fontWeight: "600",
    color: "#3f2f28",
  },
  text: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 21,
    color: "#3f2f28",
  },
});