import { Redirect } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Dashboard from "../../pages/Dashboard/Dashboard";

export const DashboardPage = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return <Dashboard />;
};
