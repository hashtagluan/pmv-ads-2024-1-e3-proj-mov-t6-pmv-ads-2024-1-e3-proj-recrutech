import { StyleSheet, TextInput, View } from "react-native";

import { useLocalSearchParams } from "expo-router";

import { Colors } from "@/constants/Colors";
import { Spacing } from "@/constants/Sizes";

import AppTitle from "@/components/AppTitle";
import DefaultButton from "@/components/DefaultButton";

export default function Login() {
  const params = useLocalSearchParams();
  console.log(params);

  return (
    <View style={styles.container}>
      <AppTitle />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <DefaultButton title="Login" />
      <DefaultButton title="Sign Up" variant="secondary" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.black,
    margin: Spacing.small,
    padding: Spacing.small,
    width: 200,
  },
});
