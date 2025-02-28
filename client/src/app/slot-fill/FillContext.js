 

import React from 'react';

const defaultValue = {
  addFill() {},
  removeFill() {}
};

const FillContext = React.createContext(defaultValue);

export default FillContext;