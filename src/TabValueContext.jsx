import React from "react";

const TabValueContext = React.createContext({
  tabValue: "experience",
  setTabValue: () => {},
});

export default TabValueContext;
