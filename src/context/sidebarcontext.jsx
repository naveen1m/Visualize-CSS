import { createContext, useState, useEffect, useContext } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <SidebarContext.Provider value={{sidebar, setSidebar}}>
      {children}
    </SidebarContext.Provider>
  )
};

export default SidebarContext;
