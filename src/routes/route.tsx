import IconFinderIcon from "@/assets/IconFinderIcon";
import { PATH_NAME, ROUTE_LIST } from "./enum";
import { RouteList } from "./type";

export const getRoutePath = (key: string): string => {
  switch (key) {
    case ROUTE_LIST.CATEGORIES:
      return PATH_NAME.CATEGORIES;
    case ROUTE_LIST.MOVIES:
      return PATH_NAME.MOVIES;
    case ROUTE_LIST.TV_SHOW:
      return PATH_NAME.TV_SHOW;
    case ROUTE_LIST.LOGIN:
      return ROUTE_LIST.LOGIN;
    default:
      return "/";
  }
};

export const menuRoutes: RouteList[] = [
  {
    key: ROUTE_LIST.CATEGORIES,
    name: "Categories",
    icon: <IconFinderIcon />,
    path: getRoutePath(ROUTE_LIST.CATEGORIES),
  },
  {
    key: ROUTE_LIST.MOVIES,
    name: "Movies",
    path: getRoutePath(ROUTE_LIST.MOVIES),
  },
  {
    key: ROUTE_LIST.TV_SHOW,
    name: "TV Show",
    path: getRoutePath(ROUTE_LIST.TV_SHOW),
  },
  {
    key: ROUTE_LIST.LOGIN,
    name: "Login",
    path: getRoutePath(ROUTE_LIST.LOGIN),
  },
];
