import React from "react";
import styles from "./MenuLink.module.css";

import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

export default function MenuLink({ children, to }) {
  const localizacao = useLocation();
  return (
    <Link
      className={`${styles.link} ${
        localizacao.pathname === to ? styles.linkDestacado : ""
      } `}
      to={to}
    >
      {children}
    </Link>
  );
}
