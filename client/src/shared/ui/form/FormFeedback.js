 

import React from 'react';

export default function FormFeedback(props) {

  const {
    error
  } = props;

  return (
    <React.Fragment>
      { error && (
        <div className="invalid-feedback">
          { error }
        </div>
      ) }
    </React.Fragment>
  );
}
