import { FormModel } from "@/types/Login.interfaces";
import * as yup from "yup";

const loginSchema = yup.object<FormModel>().shape({
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(8, "Mínimo de 8 caracteres"),
});

export default loginSchema;
