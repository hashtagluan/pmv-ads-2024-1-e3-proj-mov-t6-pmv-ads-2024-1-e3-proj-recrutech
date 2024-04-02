import { StyleSheet, Text, View, Platform } from "react-native";

import { Link, useLocalSearchParams } from "expo-router";

import axios, { AxiosError } from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { Colors } from "@/constants/Colors";
import { Spacing } from "@/constants/Sizes";

import loginSchema from "@/schemas/loginSchema";

import AppTitle from "@/components/AppTitle";
import TextField from "@/components/TextField";
import DefaultButton from "@/components/DefaultButton";
import { FormModel, RenderTextFieldProps } from "@/types/Login.interfaces";

const getVariant = (type: string | string[]): "primary" | "secondary" =>
  type === "dev" ? "secondary" : "primary";

const renderTextField = ({
  field: { onChange, value },
  label,
  error,
  variant,
  placeholder,
  secureTextEntry,
}: RenderTextFieldProps) => (
  <>
    <TextField
      {...{ label, value, variant, placeholder, secureTextEntry }}
      onChangeText={onChange}
    />
    {error && <Text style={styles.error}>{error}</Text>}
  </>
);

const API_URL = "https://recrutech-webapi.azurewebsites.net/api/Users/Login";

export default function Login() {
  const { type } = useLocalSearchParams();
  const elementVariant = getVariant(type);

  const defaultValues: FormModel = {
    email: "email@meuemail.com",
    password: "senha",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormModel>({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormModel> = async (data: FormModel) => {
    try {
      const response = await axios.post(
        `${API_URL}?email=${encodeURIComponent(data.email)}&password=${
          data.password
        }`,
        {}
      );

      if (response.data) {
        const { data } = response;

        console.log("Login successful");
        console.log({
          email: data.email,
          username: data.username,
        });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Error fetching data", error.response?.data);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <AppTitle />
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
          }}
          render={(props) =>
            renderTextField({
              ...props,
              label: "Email",
              variant: elementVariant,
              placeholder: "Digite seu email",
              error: errors.email?.message,
            })
          }
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: true,
          }}
          render={(props) =>
            renderTextField({
              ...props,
              label: "Senha",
              secureTextEntry: true,
              variant: elementVariant,
              placeholder: "Digite sua senha",
              error: errors.password?.message,
            })
          }
        />
        <View style={styles.signIn}>
          <DefaultButton
            title="Entrar"
            variant={elementVariant}
            onPress={handleSubmit(onSubmit)}
          />
          <Text style={styles.text}>Esqueci minha senha</Text>
        </View>

        <View style={styles.register}>
          <Text style={styles.text}>
            Não tem uma conta?
            <Link href="/">
              <Text style={[styles.text, styles.link]}> Cadastre-se</Text>
            </Link>
          </Text>
        </View>

        <Link href="/">
          <Text style={styles.text}>Voltar</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentWrapper: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.medium,
    padding: Spacing.medium,
    borderRadius: Spacing.medium,
    backgroundColor: Colors.white,

    ...Platform.select({
      ios: {
        shadowRadius: 3,
        shadowOpacity: 0.2,
        shadowColor: "#171717",
        shadowOffset: { width: 0, height: 2 },
      },
      android: {
        elevation: 20,
      },
    }),
  },
  signIn: {
    alignItems: "center",
    gap: Spacing.medium,
    marginVertical: Spacing.smallMedium,
  },
  register: {
    alignItems: "center",
    gap: Spacing.small,
    marginVertical: Spacing.smallMedium,
  },
  link: {
    color: Colors.blue,
  },
  text: {
    color: Colors.black,
    fontFamily: "Roboto-Regular",
  },
  error: {
    color: Colors.red,
  },
});
