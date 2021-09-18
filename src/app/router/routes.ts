import React from "react";
import Welcome from "../components/pages/Welcome";
import Chatroom from "../components/pages/Chatroom";

export const publicRoutes: Array<{
  path: string;
  exact: boolean;
  component: React.FC;
}> = [
  {
    path: "/",
    exact: true,
    component: Welcome,
  },
];

export const privateRoutes: Array<{
  path: string;
  exact: boolean;
  component: React.FC;
}> = [
  {
    path: "/chatroom",
    exact: true,
    component: Chatroom,
  },
];
