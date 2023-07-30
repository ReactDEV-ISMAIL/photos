import Layout from "components/Layout";
import RequireAuth from "components/RequireAuth";
import { useAuth } from "hooks";
import Home from "pages/Home";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const user = useAuth.getState()?.user;

  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        {/* public routes */}
        <Route
          path="login"
          element={user?.username ? <Navigate to={"/"} /> : <Login />}
        />
        {/* protected these routes */}
        <Route element={<RequireAuth />}>
          <Route path={"/"} element={<Home />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
