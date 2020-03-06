import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppState = props => {
  const [dialogVisible, setDialogVisible] = useState(false);

  return (
    <AppContext.Provider value={{ dialogVisible, setDialogVisible }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
