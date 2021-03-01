import * as yup from 'yup';
import validationRegExp from '../../constants/validationRegExp';

const validationSchema = yup.object({
  oldPassword: yup
    .string()
    .required('Required')
    .min(6, 'Password must be more then 6 character')
    .max(60, 'Password must be less then 60 characters')
    .matches(
      validationRegExp.passwordFormat.regExp,
      validationRegExp.passwordFormat.text,
    )
    .matches(
      validationRegExp.passwordNumber.regExp,
      validationRegExp.passwordNumber.text,
    )
    .matches(
      validationRegExp.passwordUpperCaseLetter.regExp,
      validationRegExp.passwordUpperCaseLetter.text,
    ),
  newPassword: yup
    .string()
    .required('Required')
    .min(6, 'Password must be more then 6 character')
    .max(60, 'Password must be less then 60 characters')
    .matches(
      validationRegExp.passwordFormat.regExp,
      validationRegExp.passwordFormat.text,
    )
    .matches(
      validationRegExp.passwordNumber.regExp,
      validationRegExp.passwordNumber.text,
    )
    .matches(
      validationRegExp.passwordUpperCaseLetter.regExp,
      validationRegExp.passwordUpperCaseLetter.text,
    ),
  newPasswordRepeat: yup
    .string()
    .required('Required')
    .min(6, 'Password must be more then 6 character')
    .max(60, 'Password must be less then 60 characters')
    .matches(
      validationRegExp.passwordFormat.regExp,
      validationRegExp.passwordFormat.text,
    )
    .matches(
      validationRegExp.passwordNumber.regExp,
      validationRegExp.passwordNumber.text,
    )
    .matches(
      validationRegExp.passwordUpperCaseLetter.regExp,
      validationRegExp.passwordUpperCaseLetter.text,
    ),
});

export default validationSchema;
