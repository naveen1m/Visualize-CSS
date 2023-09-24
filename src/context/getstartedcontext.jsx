import { createContext, useState } from "react";

const GetStartedContext = createContext();

export const GetStartedProvider = ({ children }) => {
  const [getstart, setGetstart] = useState(false);
  return (
    <GetStartedContext.Provider value={{getstart, setGetstart}}>
      {children}
    </GetStartedContext.Provider>
  )
};

export default GetStartedContext;