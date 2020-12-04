import React from "react";

import LayoutContainer from "./layout.styles";

const Layout = ({ children, ...props }) => (
  <LayoutContainer {...props}>{children}</LayoutContainer>
);

export default Layout;
