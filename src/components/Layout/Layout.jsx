import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsLoading } from "../../redux/selectors";

import ModalContextProvider from "../ModalContext/ModalContextProvider";
import Header from "../Header/Header";
import Overlay from "../Overlay/Overlay";
import Loader from "../Loader/Loader";

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <ModalContextProvider>
      <Header />
      <main>
        {isLoading ? <Loader /> : null}
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Overlay />
    </ModalContextProvider>
  );
};

export default Layout;
