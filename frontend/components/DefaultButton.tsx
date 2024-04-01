import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { Colors } from "@/constants/Colors";
import { ButtonProps } from "@/types/DefaultButton";
import { FontSize, Spacing } from "@/constants/Sizes";

export default function DefaultButton({
  title,
  variant,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, variant === "secondary" && styles.bgGreen]}
      onPress={onPress}
    >
      <Text style={[styles.text, variant === "secondary" && styles.textBlack]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    color: Colors.white,
    padding: Spacing.small,
    backgroundColor: Colors.black,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.white,
    fontSize: FontSize.medium,
  },
  bgGreen: {
    backgroundColor: Colors.green,
  },
  textBlack: {
    color: Colors.black,
  },
});
