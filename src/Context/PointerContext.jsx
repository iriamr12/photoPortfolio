// PointerContext.js
import React, { createContext, useState, useContext } from 'react';

const PointerContext = createContext();

export const PointerProvider = ({ children }) => {
  const [isPointer2Visible, setIsPointer2Visible] = useState(false);

  return (
    <PointerContext.Provider value={{ isPointer2Visible, setIsPointer2Visible }}>
      {children}
    </PointerContext.Provider>
  );
};

export const usePointer = () => useContext(PointerContext); // Ensure this is correctly defined and exported
