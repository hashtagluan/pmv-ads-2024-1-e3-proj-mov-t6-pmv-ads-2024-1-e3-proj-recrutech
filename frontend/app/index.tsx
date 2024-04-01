import { Image, StyleSheet, Text, View } from "react-native";

import AppTitle from "@/components/AppTitle";
import DefaultButton from "@/components/DefaultButton";

import { Colors } from "@/constants/Colors";
import { FontSize, Spacing } from "@/constants/Sizes";

export default function Page() {
  const loginPath = "/login/[type]";

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.defaultText}>Bem vindo(a) ao</Text>
        <AppTitle />
        <Text style={styles.defaultText}>Como podemos te ajudar hoje?</Text>
      </View>

      <View style={styles.bodyContainer}>
        <DefaultButton
          title="Procuro vagas"
          variant="secondary"
          link={{
            pathname: loginPath,
            params: { type: "dev" },
          }}
        />
        <DefaultButton
          title="Quero contratar"
          link={{
            pathname: loginPath,
            params: { type: "recruiter" },
          }}
        />
        <Image
          source={require("@/assets/images/welcome.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.white,
    gap: Spacing.extraLarge,
    justifyContent: "center",
  },
  headerContainer: {
    alignItems: "center",
    gap: Spacing.medium,
  },
  bodyContainer: {
    gap: Spacing.small,
    maxWidth: 200,
  },
  defaultText: {
    color: Colors.black,
    fontWeight: "bold",
    fontSize: FontSize.medium,
  },
  appTitle: {
    color: Colors.blue,
    fontWeight: "bold",
    fontSize: FontSize.extraLarge,
  },
  titleSuffix: {
    color: Colors.green,
  },
  buttonGreen: {
    backgroundColor: Colors.green,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: Spacing.extraLarge,
  },
});
