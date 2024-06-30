import { Navigate, Outlet } from "react-router-dom";

import Header from "./header";
import { Sidebar } from "./sidebar";

export function Layout() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-col flex-1 gap-4 p-4 bg-yellow-200 lg:gap-6 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
