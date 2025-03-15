import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { TempoDevtools } from "tempo-devtools";
TempoDevtools.init();

const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode className="w-2">
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
    <div className="w-[329px] h-[253px]"></div>
  </React.StrictMode>,
);
