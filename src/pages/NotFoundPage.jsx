import { Suspense } from "react";
import { Outlet } from "react-router";

import SuspenseLoader from "../components/Loader/SuspenseLoader"

const NotFoundPage = () => {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Outlet />
    </Suspense>
  );
};

export default NotFoundPage;
