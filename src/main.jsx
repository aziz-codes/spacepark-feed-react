import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Suspense, lazy } from "react";
const App = lazy(() => import("./App"));
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback="Your App is loading....">
      <App />
    </Suspense>
  </BrowserRouter>
);
