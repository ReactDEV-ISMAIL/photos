import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main style={{ padding: "10px" }}>
      <Outlet />
    </main>
  );
};

export default Layout;
