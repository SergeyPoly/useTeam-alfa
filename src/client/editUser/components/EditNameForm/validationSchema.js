import * as yup from 'yup';
import validationRegExp from '../../constants/validationRegExp';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Required')
    .min(2, 'Name must be more then 1 character')
    .max(60, 'Name must be less then 60 characters')
    .matches(validationRegExp.name.regExp, validationRegExp.name.text),
});

export default validationSchema;
