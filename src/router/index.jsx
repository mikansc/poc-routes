import { Route, Switch } from "react-router-dom";
import { routes } from "./route_map";

export const Routes = () => {
  return (
    <Switch>
      {routes.map((route, i) => {
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        );
      })}
    </Switch>
  );
};
