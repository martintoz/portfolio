import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { LanguageProvider } from "./components/LanguageProvider";
import { fetchTranslations } from "./utils/index"
require("dotenv").config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3000";

ReactDOM.render(
  <Router>
    <React.StrictMode>
    <LanguageProvider fetchTranslations={fetchTranslations}>
        <App />
      </LanguageProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
