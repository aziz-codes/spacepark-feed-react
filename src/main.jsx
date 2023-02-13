import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Suspense, lazy } from "react";
const App = lazy(() => import("./App"));
import { BrowserRouter } from "react-router-dom";
import Main from "./skeleton/Main";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback={<Main />}>
      <App />
    </Suspense>
  </BrowserRouter>
);
