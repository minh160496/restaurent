import React from "react";
import classNames from "classnames/bind";

import styles from "./Logo.module.scss";
import Img from "Component/Img";
import logo from "src/assets/img/logo.webp";

const cl = classNames.bind(styles);
export default function Logo() {
  return (
    <div className={cl("Logo")}>
      <div className={cl("image-logo") + " margin-center"}>
        <Img src={logo} width="100%" heigh="auto" />
      </div>
    </div>
  );
}