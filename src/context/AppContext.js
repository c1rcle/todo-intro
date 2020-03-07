import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppState = props => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [lists, setLists] = useState([]);

  const addList = name => {
    let newId = lists.length === 0 ? 0 : lists[lists.length - 1].id + 1;
    setLists([...lists, { id: newId, name: name }]);
  };

  return (
    <AppContext.Provider
      value={{
        dialogVisible,
        lists,
        setDialogVisible,
        addList
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
