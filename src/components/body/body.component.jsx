import React from "react";
import BodyContainer from "./body.styles.jsx";

const Body = ({ children, ...props }) => (
  <BodyContainer {...props}>{children}</BodyContainer>
);

export default Body;
