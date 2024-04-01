import { StyleSheet, Text } from "react-native";

import { Colors } from "@/constants/Colors";
import { FontSize } from "@/constants/Sizes";

export default function AppTitle() {
  return (
    <Text style={styles.appTitle}>
      <Text>Recru</Text>
      <Text style={styles.titleSuffix}>Tech</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.black,
    fontSize: FontSize.extraLarge,
  },
  titleSuffix: {
    color: Colors.green,
  },
});
