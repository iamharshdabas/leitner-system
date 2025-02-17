import { Route, Routes, Outlet } from "react-router-dom";

import DefaultLayout from "./components/default-layout";

import HomePage from "@/pages/home";

function App() {
  return (
    <Routes>
      <Route
        element={
          <DefaultLayout>
            <Outlet />
          </DefaultLayout>
        }
      >
        <Route index element={<HomePage />} path="/" />
      </Route>
    </Routes>
  );
}

export default App;
