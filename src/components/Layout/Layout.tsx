import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./Layout.css";
type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
