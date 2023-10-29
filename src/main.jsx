import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { AdsListContextProvider } from "./context/ProductsContext"; // Import your ProductsContext provider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <AdsListContextProvider>
          <App />
        </AdsListContextProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
