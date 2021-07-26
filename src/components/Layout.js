import { Link } from "gatsby";
import React from "react";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";
const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link className={navLinkText} to="/">
            Home Page
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link className={navLinkText} to="/about">
            About Us
          </Link>
        </li>
      </ul>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default Layout;
