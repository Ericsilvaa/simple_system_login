import React from "react";
import RoutesApp from "./routes";
import GlobalStyle from "./styles/global";
import { AuthProvider } from "./Context/auth";


const App = () => {
  return (
    <>
    <AuthProvider >
      {/* childrens of Auth */}
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
    </>
  );
};

export default App;
