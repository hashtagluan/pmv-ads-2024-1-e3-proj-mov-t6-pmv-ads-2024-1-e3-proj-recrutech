import { useCallback } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import AppTitle from "@/components/AppTitle";
import DefaultButton from "@/components/DefaultButton";

import { Colors } from "@/constants/Colors";
import { FontSize, Spacing } from "@/constants/Sizes";

SplashScreen.preventAutoHideAsync();

export default function Page() {
  const loginPath = "/login/[type]";

  const [fontsLoaded, fontError] = useFonts({
    "Roboto-Bold": require("@/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("@/assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("@/assets/fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.mainContainer} onLayout={onLayoutRootView}>
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
    gap: Spacing.extraLarge,
    justifyContent: "center",
    backgroundColor: Colors.white,
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
    fontFamily: "Roboto-Bold",
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
  image: {
    width: 200,
    height: 200,
    marginTop: Spacing.extraLarge,
  },
});
