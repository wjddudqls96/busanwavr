// 필요한 모듈들을 import합니다.
import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Test from "./routes/Test.jsx";
import Login from "./routes/Login.jsx";
import Signup from "./routes/Signup.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: React.createElement(RootLayout),
      children: [
        {
          path: "/",
          element: React.createElement(App),
          children: [
            {
              path: "/login",
              element: React.createElement(Login),
            },
            {
              path: "/signup",
              element: React.createElement(Signup),
            },
          ],
        },
        {
          path: "/test",
          element: React.createElement(Test),
        },
      ],
    },
  ]);

  ReactDOM.createRoot(rootElement).render(
    React.createElement(React.StrictMode, null,
      React.createElement(RouterProvider, { router: router })
    )
  );
}
