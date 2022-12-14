// All photos by Matt Perry https://citizenofnowhe.re

import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import App from "../App";
import Works from "../pages/Works";

export default function Routes() {
  const element = useRoutes([
    {
      path: "/",
      element: <App />
    },
    {
      path: "/works",
      element: (
        <Works />
      )
    },
    {
      path: "/london",
      element: (
        <App/>
      )
    }
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}
