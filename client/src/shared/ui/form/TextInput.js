 

import React from 'react';

import classNames from 'classnames';

import FormFeedback from './FormFeedback';

import {
  fieldError as defaultFieldError
} from './Util';


export default function TextInput(props) {

  const {
    hint,
    label,
    field,
    form,
    fieldError,
    children,
    multiline,
    description,
    ...restProps
  } = props;

  const {
    name: fieldName,
    value: fieldValue
  } = field;

  const meta = form.getFieldMeta(fieldName);

  const error = (fieldError || defaultFieldError)(meta, fieldName);

  function textElement() {
    function getTextarea() {
      return <textarea
        { ...field }
        value={ fieldValue || '' }
        disabled={ form.isSubmitting }
        className={ classNames('form-control', {
          'is-invalid': !!error
        }) }
        id={ fieldName }
        placeholder={ hint }
        { ...restProps }
      />;
    }

    if (multiline) {
      return getTextarea();
    } else {
      return <React.Fragment>
        <input
          { ...field }
          type="text"
          value={ fieldValue || '' }
          disabled={ form.isSubmitting }
          className={ classNames('form-control', {
            'is-invalid': !!error
          }) }
          id={ fieldName }
          placeholder={ hint }
          { ...restProps }
        />
      </React.Fragment>;
    }
  }

  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor={ fieldName }>{ label }</label>
        { textElement() }
        <FormFeedback
          error={ error }
        />
        { description &&
          <p className="form-control">{ description }</p>
        }
      </div>
    </React.Fragment>
  );
}
