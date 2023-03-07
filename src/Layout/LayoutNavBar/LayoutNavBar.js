import React, { createContext } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import Header from "Layout/Component/Header";
import Footer from "Layout/Component/Footer";
import Main from "Layout/Component/Main";
import SubHeader from "Layout/Component/SubHeader";

import styles from "./LayoutNavBar.mudule.scss";

const cl = classNames.bind(styles);
export const LayoutContext = createContext();
export default function LayoutNavBar({
  navBarRight,
  path = "/list",
  children,
}) {
  return (
    <LayoutContext.Provider value={navBarRight}>
      <div className={cl("layout-navbar")}>
        <Header />
        <SubHeader path={path} />
        <Main>{children}</Main>
        <Footer />
      </div>
    </LayoutContext.Provider>
  );
}

LayoutNavBar.propTypes = {
  navBarRight: PropTypes.bool,
  children: PropTypes.node,
};
