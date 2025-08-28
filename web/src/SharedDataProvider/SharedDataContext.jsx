// SharedDataContext.js
import React, { createContext, useContext, useState } from 'react';

const SharedDataContext = createContext();

export const SharedDataProvider = ({ children, jsonData }) => {
  const [sharedData, setSharedData] = useState(null);

  // Combine existing sharedData with jsonData if both are available
  const combinedData = {
    sharedData: sharedData || {},
    jsonData: jsonData || {},
    setSharedData,
  };

  return (
    <SharedDataContext.Provider value={combinedData}>
      {children}
    </SharedDataContext.Provider>
  );
};

export const useSharedData = () => {
  return useContext(SharedDataContext);
};
