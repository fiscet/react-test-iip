import React from "react";

import MainContentContainer from "./main-content.styles";

const MainContent = ({ children, ...props }) => {
  return (
    <MainContentContainer {...props}>
      {children}
    </MainContentContainer>
  );
};

export default MainContent;
