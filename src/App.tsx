import * as React from "react";
import type { RouteObject } from "react-router-dom";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import routes from './router/routes'

export default function App() {
  let element = useRoutes(routes);

  return (
    <>
      {element}
    </>
  );
}