import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCurrentThunk } from "./redux/User/UserThunk";
import { selectIsAuth } from "./redux/selectors";
import { routes } from "./constants/routes";

import Layout from "./components/Layout/Layout";

const PublicRoute = React.lazy(() => import("./components/Routes/PublicRoute"));
const AuthLayout = React.lazy(() =>
  import("./components/AuthLayout/AuthLayout")
);
const WelcomePage = React.lazy(() => import("./pages/WelcomePage/WelcomePage"));
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));
const ForgotPasswordPage = React.lazy(() =>
  import("./pages/ForgotPasswordPage")
);
const GoogleAuthPage = React.lazy(() => import("./pages/GoogleAuthPage"));

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(getCurrentThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={routes.Home} element={<Layout />}>
        <Route index element={isAuth ? <HomePage /> : <WelcomePage />} />
        <Route
          path={routes.SignIn}
          element={
            <PublicRoute navigate={routes.Home}>
              <AuthLayout>
                <SignInPage />
              </AuthLayout>
            </PublicRoute>
          }
        />
        <Route
          path={routes.ForgotPassword}
          element={
            <PublicRoute navigate={routes.Home}>
              <AuthLayout>
                <ForgotPasswordPage />
              </AuthLayout>
            </PublicRoute>
          }
        />
        <Route
          path={routes.SignUp}
          element={
            <PublicRoute navigate={routes.Home}>
              <AuthLayout>
                <SignUpPage />
              </AuthLayout>
            </PublicRoute>
          }
        />
        <Route path="/google" element={<GoogleAuthPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
