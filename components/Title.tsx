import React from "react";
import { StyleSheet, Text } from "react-native";
import { getLoryaneTheme } from "../constants/theme";

interface TitleProps {
  children: React.ReactNode;
  color?: string;
  style?: any;
}

const Title: React.FC<TitleProps> = ({ children, color, style }) => {
  const theme = getLoryaneTheme("light");

  return (
    <Text
      style={[
        styles.title,
        { color: color || theme.primary },
        style
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Title;