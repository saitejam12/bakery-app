import { NavLink, Navigate, Outlet, Route, Routes } from "react-router-dom";

import { Icons } from "@/lib/icons";
import Menu from "@/screens/Menu";
import Cart from "@/screens/Cart";
import OrderConfirmation from "@/screens/OrderConfirmation";
import StaffLogin from "@/screens/StaffLogin";
import AdminMenu from "@/screens/AdminMenu";
import ApiDocs from "@/screens/ApiDocs";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "flex items-center gap-2 rounded-[var(--brand-radius)] px-3 py-2 text-sm font-medium transition-colors",
    isActive ? "bg-[var(--brand-hover)] text-[var(--brand-fg)]" : "text-[var(--brand-fg-muted)]",
  ].join(" ");

// The app's menu, drawn around every screen except the ones routed outside it below.
function AppShellLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header
        className="border-b"
        style={{
          backgroundColor: "var(--brand-surface)",
          borderColor: "var(--brand-border)",
        }}
      >
        <div className="flex items-center gap-6 px-6 py-2">
          <p
            className="shrink-0 text-sm font-semibold"
            style={{ fontFamily: "var(--brand-font-heading)" }}
          >
            {"Bakery Kiosk"}
          </p>
          <nav aria-label="App menu" className="flex flex-wrap items-center gap-1">
            <NavLink to="/menu" className={navLinkClass}>
              <Icons.Home size={16} />
              {"Menu"}
            </NavLink>
            <NavLink to="/cart" className={navLinkClass}>
              {"Cart"}
            </NavLink>
            <NavLink to="/admin-menu" className={navLinkClass}>
              <Icons.Settings size={16} />
              {"Menu Management"}
            </NavLink>
            <NavLink to="/api-docs" className={navLinkClass}>
              {"API & Setup Docs"}
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppShellLayout />}>
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/admin-menu" element={<AdminMenu />} />
        <Route path="/api-docs" element={<ApiDocs />} />
      </Route>
      <Route path="/staff-login" element={<StaffLogin />} />
      <Route path="*" element={<Navigate to="/menu" replace />} />
    </Routes>
  );
}
