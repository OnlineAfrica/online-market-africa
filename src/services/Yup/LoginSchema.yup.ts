import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address field is Required'),
  password: Yup.string()
    .min(6, 'Password Too Short!')
    .max(30, 'Password Too Long!')
    .required('Password field is Required'),
});
