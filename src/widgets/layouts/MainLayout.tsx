import Header from "@/widgets/Header/Header";
import { Outlet } from "react-router";

export function MainLayout() {
  return (
    <div>
      <Header />
      <main>{<Outlet />}</main>
    </div>
  );
}
