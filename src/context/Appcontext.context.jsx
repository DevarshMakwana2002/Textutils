import React, { createContext, useState } from "react";
export const AppContext = createContext();

function Appcontext({ children }) {
  const [text, setText] = useState("hello");
  const value = { text, setText };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Appcontext;
