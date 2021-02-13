import React from 'react';
import TextInput from '../TextInput';
import Select from '../Select';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import Submit from '../Submit';
import TextArea from '../TextArea/';
import FileInput from '../FileInput/';

const FormItem = ({ type, ...props }) => {
  let formElement;
  switch (type) {
    case 'text':
      formElement = <TextInput {...props} />;
      break;
    case 'file':
      formElement = <FileInput {...props} />;
      break;
    case 'select':
      const selectOptions = props.options.map(({ value, text }) => (
        <option value={value}>{text}</option>
      ));
      formElement = <Select {...props}>{selectOptions}</Select>;
      break;
    case 'textarea':
      formElement = <TextArea {...props} />;
      break;
    case 'checkbox':
      formElement = <Checkbox {...props} />;
      break;
    case 'radio':
      formElement = <Radio {...props} />;
      break;
    case 'submit':
      formElement = <Submit type={type} {...props} />;
      break;
  }

  return <>{formElement}</>;
};

export default FormItem;
