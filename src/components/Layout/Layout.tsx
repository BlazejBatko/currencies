import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <main className="App">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
