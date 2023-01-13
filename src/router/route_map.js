import { DashboardPage } from "./containers/Dashboard";
import { HomePage } from "./containers/HomePage";
import { LoginPage } from "./containers/LoginPage";
import { NotFoundPage } from "./containers/NotFoundPage";
import { ProductsPage } from "./containers/ProductsPage";
import { ProfilePage } from "./containers/ProfilePage";

export const routes = [
  { path: "/", exact: true, component: HomePage },
  { path: "/login", exact: true, component: LoginPage },
  { path: "/profile", exact: true, component: ProfilePage },
  { path: "/products", exact: true, component: ProductsPage },
  { path: "/dashboard", exact: true, component: DashboardPage },

  { path: "*", exact: false, component: NotFoundPage },
];
