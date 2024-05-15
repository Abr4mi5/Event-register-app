import Login from "../pages/Login/Login";
import NewClient from "../pages/NewClient/NewClient";
import Clients from "../pages/Clients/Clients";

export const ROUTES = {
  LOGIN: "/",
  NEWCLIENT: "/newclient",
  CLIENTS: "/clients",
};

export const routes = [
  {
    path: ROUTES.LOGIN,
    Component: Login,
  },
  {
    path: ROUTES.NEWCLIENT,
    Component: NewClient,
  },
  {
    path: ROUTES.CLIENTS,
    Component: Clients,
  },
];
