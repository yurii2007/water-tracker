import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCurrentThunk } from "./redux/User/UserThunk";
import { selectIsAuth, selectIsLoading } from "./redux/selectors";

import Layout from "./components/Layout/Layout";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import PublicRoute from "./components/Routes/PublicRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(getCurrentThunk());
  }, [dispatch]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            isAuth ? (
              <PrivateRoute navigate="/signin">
                <HomePage />
              </PrivateRoute>
            ) : (
              <PublicRoute navigate="/">
                <WelcomePage />
              </PublicRoute>
            )
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute navigate="/">
              <AuthLayout>
                <SignInPage />
              </AuthLayout>
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute navigate="/">
              <AuthLayout>
                <SignUpPage />
              </AuthLayout>
            </PublicRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
