import * as Yup from "yup";

export const email = Yup.object().shape({
   email: Yup.string()
      .email()
      .min(5)
      .max(20)
      .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
      .trim()
      .required(),
});
