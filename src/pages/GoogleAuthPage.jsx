import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { routes } from "../constants/routes";
import { setStateToken } from "../redux/User/UserSlice";
import { getCurrentThunk } from "../redux/User/UserThunk";

import Loader from "../components/Loader/Loader";

const GoogleAuthPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      if (!token) return navigate(routes.SignIn);
      dispatch(setStateToken(token));
      dispatch(getCurrentThunk())
        .unwrap()
        .then(() => {
          navigate(routes.Home);
        })
        .catch(() => {
          navigate(routes.Home);
        });
    })();
  }, [dispatch, navigate, token]);

  return <Loader />;
};

export default GoogleAuthPage;
