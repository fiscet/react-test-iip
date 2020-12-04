import React, { useState } from "react";

import MainNavContainer from "./main-nav.styles";

const MainNav = ({ ...props }) => {
  // Until we don't implenet a state manager like redux
  const [isOpen, setOpen] = useState(false);

  return (
    <MainNavContainer
      open={isOpen}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      Menu
    </MainNavContainer>
  );
};

export default MainNav;
