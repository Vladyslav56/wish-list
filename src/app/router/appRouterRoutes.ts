import { frontRoutes } from "@/shared/config/routes/frontRoutes";
import type { ComponentType } from "react";
import { lazy } from "react";

// const pages = import.meta.glob<{ default: ComponentType<unknown> }>(
//   "../../pages/*.tsx"
// );
// const pagesList = Object.keys(frontRoutes.pages);
// import type { ComponentType } from "react";

const pages = import.meta.glob<{ default: ComponentType<unknown> }>(
  "../../pages/*.tsx"
);

export const appRouterRoutes = Object.keys(frontRoutes.pages).map((page) => {
  const importPage = pages[`../../pages/${page}.tsx`];
  if (!importPage) throw new Error(`Page ${page}.tsx not found`);

  return {
    ...frontRoutes.pages[page],
    Component: lazy(importPage),
  };
});
