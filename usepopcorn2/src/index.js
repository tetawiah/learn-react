import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.js";
import StarRating from "./StarRating.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {
      <App />
      // <StarRating />
    }
  </React.StrictMode>
);
