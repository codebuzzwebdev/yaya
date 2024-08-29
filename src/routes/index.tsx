import React, { lazy } from "react";
import { IconName } from "@components/Icon";

const Home = lazy(() => import("@pages/Home"));
const NotFound = lazy(() => import("@pages/NotFound"));
// const User = lazy(() => import("@pages/User"));

export interface RouteType {
  title: string;
  path: string | string[];
  icon: IconName;
  element?: React.ComponentType<any>;
  children?: RouteType[];
}

export const routes: RouteType[] = [
  {
    title: "Home",
    path: ["/", "/home"],
    icon: "speed",
    element: Home,
  },
  // {
  //   title: "User",
  //   path: "/user",
  //   icon: "speed",
  //   element: User,
  // },
  {
    title: "NotFound",
    path: "*",
    icon: "speed",
    element: NotFound,
  },
];
