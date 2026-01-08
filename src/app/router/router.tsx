import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { appRouterRoutes } from "./appRouterRoutes";
import { MainLayout } from "@/widgets/layouts/MainLayout";

// Создаём маршруты с Suspense для каждой ленивой страницы
const childrenRoutes = appRouterRoutes.map((route) => {
  const { path, Component } = route;

  return {
    path,
    element: (
      <Suspense fallback={<div>Завантаження сторінки...</div>}>
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
