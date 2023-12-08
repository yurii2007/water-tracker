import { useSelector } from "react-redux";
import { Navigate } from "react-router";

import { selectIsAuth } from "../../redux/selectors";
import { routes } from "../../constants/routes";

const PublicRoute = ({ children, navigate = routes.Home }) => {
  const isAuth = useSelector(selectIsAuth);

  if (isAuth) return <Navigate to={navigate} />;

  return children;
};

export default PublicRoute;
