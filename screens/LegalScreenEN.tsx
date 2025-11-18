// screens/LegalScreenEN.tsx
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ThemedText } from "../components/themed-text";
import { ThemedView } from "../components/themed-view";
import { getLoryaneTheme } from "../constants/theme";

export default function LegalScreenEN() {
  const theme = getLoryaneTheme("light");

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* TITLE */}
        <ThemedText
          type="title"
          style={{
            color: theme.primary,
            textAlign: "center",
            marginTop: 40,
            marginBottom: 20,
          }}
        >
          Legal Notice & GDPR
        </ThemedText>

        {/* 1. PUBLISHER */}
        <ThemedText style={styles.sectionTitle}>Application Publisher</ThemedText>
        <ThemedText style={styles.text}>
          Loryane Ritual Mind — wellness and guided ritual application.{"\n"}
          Created & directed by: Séverine BORÉ{"\n"}
          Address: 177 B rue Pelisserie, 84700 Sorgues, France{"\n"}
          Contact: support@loryane.com
        </ThemedText>

        {/* 2. CONTENT MANAGER */}
        <ThemedText style={styles.sectionTitle}>Content Manager</ThemedText>
        <ThemedText style={styles.text}>
          Séverine BORÉ — Creator of the Loryane universe.{"\n"}
          All texts, rituals, daily messages, visuals and graphic elements are original works protected under international copyright law.
        </ThemedText>

        {/* 3. HOSTING */}
        <ThemedText style={styles.sectionTitle}>Hosting</ThemedText>
        <ThemedText style={styles.text}>
          The application uses a backend hosted by a third-party provider (private server or cloud service).{"\n"}
          Full hosting details will be provided upon production release.
        </ThemedText>

        {/* 4. INTELLECTUAL PROPERTY */}
        <ThemedText style={styles.sectionTitle}>Intellectual Property</ThemedText>
        <ThemedText style={styles.text}>
          All contents within the application (texts, UI, rituals, symbols, visual identity, photos, audio)
          are protected under French and international intellectual property laws.{"\n"}
          Reproduction, in whole or in part, is strictly forbidden without written authorization.
        </ThemedText>

        {/* 5. PERSONAL DATA / GDPR */}
        <ThemedText style={styles.sectionTitle}>Personal Data (GDPR)</ThemedText>
        <ThemedText style={styles.text}>
          Loryane Ritual Mind complies with European GDPR regulations.{"\n"}
          In the current mode (no account creation), no personal data is collected or transmitted to third parties.
        </ThemedText>

        {/* Subsection — Data collected */}
        <ThemedText style={styles.sectionTitleSmall}>Data Collected</ThemedText>
        <ThemedText style={styles.text}>
          • Ritual history (stored locally on your device){"\n"}
          • Favorites (stored locally){"\n"}
          • No third-party sharing{"\n"}
          • No advertising tracking{"\n"}
          • No mandatory account
        </ThemedText>

        {/* Subsection — Purpose */}
        <ThemedText style={styles.sectionTitleSmall}>Purpose</ThemedText>
        <ThemedText style={styles.text}>
          These data are used solely to improve your personal experience.
        </ThemedText>

        {/* Subsection — Rights */}
        <ThemedText
          style={styles.sectionTitleSmall}
        >
          User Rights
        </ThemedText>
        <ThemedText style={styles.text}>
          Under GDPR, you may request:{"\n"}
          • Access{"\n"}
          • Rectification{"\n"}
          • Deletion{"\n"}
          • Portability{"\n"}
          • Objection to processing{"\n"}
          Contact: support@loryane.com
        </ThemedText>

        {/* 6. COOKIES */}
        <ThemedText style={styles.sectionTitle}>Cookies & Trackers</ThemedText>
        <ThemedText style={styles.text}>
          Loryane Ritual Mind does not use cookies, advertising trackers, or intrusive analytics tools.
        </ThemedText>

        {/* 7. LIABILITY */}
        <ThemedText style={styles.sectionTitle}>Limitation of Liability</ThemedText>
        <ThemedText style={styles.text}>
          The rituals and messages provided are intended for wellness and inspirational purposes.{"\n"}
          They do not replace medical or therapeutic advice.
        </ThemedText>

        {/* 8. CONTACT */}
        <ThemedText style={styles.sectionTitle}>Contact</ThemedText>
        <ThemedText style={styles.text}>
          For any inquiries related to data protection:{"\n"}
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
  sectionTitle: { marginTop: 24, fontSize: 17, fontWeight: "600", color: "#3f2f28" },
  sectionTitleSmall: { marginTop: 14, fontSize: 15, fontWeight: "600", color: "#3f2f28" },
  text: { marginTop: 6, fontSize: 15, color: "#3f2f28", lineHeight: 21 },
});