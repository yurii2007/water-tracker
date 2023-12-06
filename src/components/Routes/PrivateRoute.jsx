import { useSelector } from "react-redux";
import { Navigate } from "react-router";

import { selectIsAuth } from "../../redux/selectors";

const PrivateRoute = ({ children, navigate = "/signin" }) => {
  const isAuth = useSelector(selectIsAuth);

  if (!isAuth) return <Navigate to={navigate} />;

  return children;
};

export default PrivateRoute;
