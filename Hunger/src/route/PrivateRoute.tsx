import {Navigate } from "react-router-dom";
import { userLoggedContext } from "../utils/context";
import { useContext } from "react";

const PrivateRoute = ({ element }: any): JSX.Element => {
  const { loggedUser } = useContext(userLoggedContext);
  if (loggedUser) return element;
  return <Navigate to={"/"} />;
};

export default PrivateRoute;
