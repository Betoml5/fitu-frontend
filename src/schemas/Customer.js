import * as yup from "yup";

export const customerSchema = yup.object().shape({
  firstName: yup.string().required("Este campo es obligatorio"),
  lastName: yup.string().required("Este campo es obligatorio"),
  phone: yup
    .string()
    .min(10, "Introduce un numero de telefono valido")
    .max(10, "Introduce un numero de telefono valido")
    .required("Este campo es obligatorio"),
  email: yup
    .string()
    .email("Introduce un email valido")
    .required("Este campo es obligatorio"),
  age: yup
    .number()
    .typeError("La edad debe ser un numero")
    .max(99, "La edad maxima es de 99 años")
    .min(8, "La edad minima es de 8 años")
    .required("Este campo es obligatorio"),
  sex: yup.string().required("Este campo es obligatorio"),
  weight: yup
    .number()
    .typeError("Este campo debe ser un numero")
    .min(20, "El peso minimo es de 20kg")
    .max(250, "El paso maximo son 250kg")
    .required("Este campo es obligatorio"),
  height: yup
    .number()
    .typeError("Este campo debe ser un numero")
    .min(100, "La altura minima es de 100cm")
    .max(230, "La altura maxima es de 230cm")
    .required("Este campo es obligatorio"),
  leg: yup
    .number()
    .typeError("Este campo debe ser un numero")
    .min(5)
    .max(50)
    .required("Este campo es obligatorio"),
  arm: yup
    .number()
    .typeError("Este campo debe ser un numero")
    .min(5)
    .max(50)
    .required("Este campo es obligatorio"),
  waist: yup
    .number()
    .typeError("Este campo debe ser un numero")
    .min(10, "El valor minimo es de 10cm")
    .max(100, "El valor maximo es de 100cm")
    .required("Este campo es obligatorio"),
  abdomen: yup
    .number()
    .typeError("Este campo debe ser un numero")
    .min(10, "El valor minimo es de 10cm")
    .max(100, "El valor maximo es de 100cm")
    .required("Este campo es obligatorio"),
});
