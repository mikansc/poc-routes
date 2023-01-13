import * as React from "react";
import { useHistory } from "react-router-dom";

export const authContext = React.createContext();
const AuthContextProvider = authContext.Provider;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();

  const authenticate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUser("something");
    }, 3000);
  };

  // redirect to dashboard page if logged in
  React.useEffect(() => {
    if (user) {
      history.push("/dashboard");
    }
  }, [user, history]);

  const isLoggedIn = !!user;

  const value = { user, authenticate, isLoggedIn };

  return (
    <AuthContextProvider value={value}>
      {loading && <div>Loading...</div>}
      {!loading && children}
    </AuthContextProvider>
  );
};
