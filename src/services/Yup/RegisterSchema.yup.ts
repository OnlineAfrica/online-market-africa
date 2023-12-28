import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address field is Required'),
  password: Yup.string()
    .min(6, 'Password Too Short!')
    .max(30, 'Password Too Long!')
    .matches(/\d/, 'Password must include a number')
    .matches(/\w*[a-z]\w*/, 'Password must include a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must include a capital letter')
    .required('Password field is Required'),
  firstName: Yup.string()
    .min(2, 'Name must contain at least 2 characters!')
    .max(50, 'Name may not be longer than 50 characters!')
    .required('Name field is Required'),
  middleName: Yup.string()
    .min(2, 'Middle Name must contain at least 2 characters!')
    .optional()
    .max(50, 'Middle Name may not be longer than 50 characters!'),
  lastName: Yup.string()
    .min(2, 'Surname must contain at least 2 characters!')
    .max(50, 'Surname may not be longer than 50 characters!')
    .required('Surname field is Required'),
});
