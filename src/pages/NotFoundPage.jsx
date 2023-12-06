import { Suspense } from "react";
import { Outlet } from "react-router";

const NotFoundPage = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Outlet />
    </Suspense>
  );
};

export default NotFoundPage;
