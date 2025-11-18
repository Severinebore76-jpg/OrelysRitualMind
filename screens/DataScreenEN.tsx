import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ThemedText } from "../components/themed-text";
import { ThemedView } from "../components/themed-view";
import { getLoryaneTheme } from "../constants/theme";

export default function DataScreenEN() {
  const theme = getLoryaneTheme("light");

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* TITLE */}
        <ThemedText
          type="title"
          style={{ color: theme.primary, textAlign: "center", marginTop: 40, marginBottom: 20 }}
        >
          Personal Data
        </ThemedText>

        {/* INTRO */}
        <ThemedText style={styles.text}>
          Loryane Ritual Mind uses a simple, transparent and privacy-respectful
          approach to data management.{"\n"}
          The goal is to offer a secure and intimate experience,
          without any form of commercial exploitation.
        </ThemedText>

        {/* DATA NOT COLLECTED */}
        <ThemedText style={styles.sectionTitle}>Data We Do Not Collect</ThemedText>
        <ThemedText style={styles.text}>
          Loryane Ritual Mind does not collect:{"\n"}
          • your identity (name, email, phone number){"\n"}
          • your browsing activity on other apps or websites{"\n"}
          • any profiling or advertising-related data{"\n"}
          • any information used for commercial or marketing purposes
        </ThemedText>

        {/* LOCAL DATA */}
        <ThemedText style={styles.sectionTitle}>Data Stored Locally</ThemedText>
        <ThemedText style={styles.text}>
          The following data remains stored exclusively on your device:{"\n"}
          • favorites{"\n"}
          • ritual history{"\n"}
          • visual preferences{"\n"}
          • guest profile configuration{"\n"}
          None of this information is sent to a server.
        </ThemedText>

        {/* CONNECTED MODE */}
        <ThemedText style={styles.sectionTitle}>Connected Mode (coming soon)</ThemedText>
        <ThemedText style={styles.text}>
          When account creation becomes available, only essential data
          will be synchronized to a secure server:{"\n"}
          • your email{"\n"}
          • your Loryane+ subscription{"\n"}
          • optional personal progression
        </ThemedText>

        {/* PURPOSE */}
        <ThemedText style={styles.sectionTitle}>Purpose of Data Use</ThemedText>
        <ThemedText style={styles.text}>
          Data is used solely to:{"\n"}
          • personalize your experience{"\n"}
          • synchronize the premium subscription{"\n"}
          • retrieve past rituals{"\n"}
          • improve your comfort of use
        </ThemedText>

        {/* SHARING */}
        <ThemedText style={styles.sectionTitle}>Data Sharing</ThemedText>
        <ThemedText style={styles.text}>
          No data is sold, shared or transmitted to third parties.{"\n"}
          No external tracking. No targeted advertising.
        </ThemedText>

        {/* SECURITY */}
        <ThemedText style={styles.sectionTitle}>Data Security</ThemedText>
        <ThemedText style={styles.text}>
          Local data security depends on your device protection
          (PIN code, FaceID, biometrics).{"\n"}
          Synchronized data will be protected with secure protocols.
        </ThemedText>

        {/* RIGHTS */}
        <ThemedText style={styles.sectionTitle}>Your Rights (GDPR)</ThemedText>
        <ThemedText style={styles.text}>
          Under GDPR, you may request:{"\n"}
          • access{"\n"}
          • correction{"\n"}
          • deletion{"\n"}
          • objection{"\n"}
          • portability{"\n"}
          You can contact us anytime.
        </ThemedText>

        {/* CONTACT */}
        <ThemedText style={styles.sectionTitle}>Contact</ThemedText>
        <ThemedText style={styles.text}>
          📧 support@loryane.com
        </ThemedText>

        <ThemedText
          style={[styles.text, { marginTop: 40, textAlign: "center", opacity: 0.6 }]}
        >
          Last update: {new Date().getFullYear()}
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
    marginTop: 6,
    fontSize: 15,
    lineHeight: 21,
    color: "#3f2f28",
  },
});