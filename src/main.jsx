import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Suspense, lazy } from "react";
const App = lazy(() => import("./App"));
import { BrowserRouter } from "react-router-dom";
import Main from "./skeleton/Main";
import { AppContextProvider } from "./context/Context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback={<Main />}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Suspense>
  </BrowserRouter>
);
