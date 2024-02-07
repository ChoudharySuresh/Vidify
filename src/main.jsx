import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "./Store/store.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="mx-4">
      <Auth0Provider
        domain="dev-u2xdm6mulzm4657q.us.auth0.com"
        clientId="GPs5DkdqQ4CJcFtUh6mecmUTfPHQS7h4"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </Auth0Provider>
    </div>
  </React.StrictMode>
);
