import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsLoading } from "../../redux/selectors";

import ModalContextProvider from "../ModalContext/ModalContextProvider";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import SuspenseLoader from "../Loader/SuspenseLoader";

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <ModalContextProvider>
      {isLoading ? <Loader /> : null}
      <Header />
      <Suspense fallback={<SuspenseLoader />}>
        <Outlet />
      </Suspense>
    </ModalContextProvider>
  );
};

export default Layout;
