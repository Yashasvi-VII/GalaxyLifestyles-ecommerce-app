import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { DarkModeContextProvider } from "./Context/DarkModeContext";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
