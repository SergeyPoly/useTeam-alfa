// regExp: /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]+$/,

const validationRegExp = {
  name: {
    regExp: /^[a-zA-Z0-9\s]*$/,
    text: 'Only latin letters, numbers and spaces',
  },
  passwordNumber: {
    regExp: /(?=.*\d)+/,
    text: 'Must consist minimum 1 number',
  },
    passwordUpperCaseLetter: {
        regExp: /(?=.*[A-Z])+/,
        text: 'Must consist minimum 1 letter in Upper Case',
    },
    passwordFormat: {
        regExp: /^[a-zA-Z0-9]*$/,
        text: 'Invalid format: can consist only numbers and latin letters',
    },
};
export default validationRegExp;
