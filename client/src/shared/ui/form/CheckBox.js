 

import React from 'react';

import classNames from 'classnames';

export default function CheckBox(props) {

  const {
    hint,
    label,
    field,
    form,
    ...restProps
  } = props;

  const {
    name: fieldName
  } = field;

  return (
    <React.Fragment>
      <div className="form-group">
        <div className={
          classNames('custom-control', 'custom-checkbox')
        }>
          <input
            { ...field }
            disabled={ form.isSubmitting }
            className="custom-control-input"
            id={ fieldName }
            { ...restProps }
          />
          <label className="custom-control-label" htmlFor={ fieldName }>{ label }</label>
        </div>
      </div>
    </React.Fragment>
  );
}
