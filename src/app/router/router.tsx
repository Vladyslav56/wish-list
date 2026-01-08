import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { appRouterRoutes } from "./appRouterRoutes";
import { MainLayout } from "@/widgets/layouts/MainLayout";

// Suspense for each lazy page
const childrenRoutes = appRouterRoutes.map((route) => {
  const { path, Component } = route;

  return {
    path,
    element: (
      <Suspense fallback={<div>Loading page...</div>}>
        <Component />
      </Suspense>
    ),
  };
});

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: childrenRoutes,
  },
]);
