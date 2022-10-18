import { Outlet } from "react-router-dom";
import { Aside } from "../components/Aside/Aside";

export const AdminPanel = () => {
  return (
    <div className="flex items-start justify-center py-4 px-3">
      <Aside />

      <main className="admin-panel">
        <Outlet />
      </main>
    </div>
  );
};
