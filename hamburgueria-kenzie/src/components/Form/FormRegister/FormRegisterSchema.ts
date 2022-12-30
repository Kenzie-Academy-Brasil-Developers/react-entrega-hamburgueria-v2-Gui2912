import * as yup from 'yup';

export const formRegisterSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().required('E-mail é obrigatório'),
  password: yup.string().required('Digite uma senha'),
  confirmPassword: yup
    .string()
    .required('Este campo é obrigatório')
    .oneOf([yup.ref('password')], 'As senhas devem coincidir')
    .min(6, 'A senha deve conter no mínimo 6 caractéres'),
});
