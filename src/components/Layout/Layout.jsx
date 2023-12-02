import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import ModalContextProvider from "../ModalContext/ModalContextProvider";

const Layout = () => {
  return (
    <ModalContextProvider>
      <Header />
      <main>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </ModalContextProvider>
  );
};

export default Layout;
