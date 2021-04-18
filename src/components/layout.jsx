import React from "react";
import { Link } from "gatsby";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  layout: {},
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.layout}>{children}</div>;
};

export default Layout;
