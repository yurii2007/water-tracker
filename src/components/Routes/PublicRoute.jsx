import { useSelector } from "react-redux";
import { Navigate } from "react-router";

import { selectIsAuth } from "../../redux/selectors";

const PublicRoute = ({ children, navigate = "/" }) => {
  const isAuth = useSelector(selectIsAuth);

  if (isAuth) return <Navigate to={navigate} />;

  return children;
};

export default PublicRoute;
