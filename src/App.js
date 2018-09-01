import React from "react";
import { Provider } from "react-redux";
import { LoginContainerComp } from "./Modules/Login";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div>
        <LoginContainerComp />
      </div>
    </Provider>
  );
};

export default App;
