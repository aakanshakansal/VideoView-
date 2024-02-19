import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-1nu74np8hg0lxxlb.us.auth0.com"
    clientId="kJxkJcdftYlODiVHnR10JtGZ43KpuGIs"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,

);
