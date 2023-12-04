import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import ModalContextProvider from "../ModalContext/ModalContextProvider";
import Header from "../Header/Header";
import Overlay from "../Overlay/Overlay";

const Layout = () => {
  return (
    <ModalContextProvider>
      <Header />
      <main>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Overlay />
    </ModalContextProvider>
  );
};

export default Layout;
