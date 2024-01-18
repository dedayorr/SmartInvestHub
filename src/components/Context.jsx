/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { createContext, useState } from "react";

export const ContextProvider = createContext();

export default function Context({ children }) {
  const [hideSignUp, setHideSignUp] = useState(true);
  const [hideSignIn, sethideSignIn] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  const hold = {
    hideSignUp,
    setHideSignUp,
    hideSignIn,
    sethideSignIn,
    hideNavbar,
    setHideNavbar,
  };
  return (
    <div>
      <ContextProvider.Provider value={hold}>
        {children}
      </ContextProvider.Provider>
    </div>
  );
}
