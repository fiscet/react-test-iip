import styled, { css } from "styled-components";

const navClose = css`
  // This value should be stored and shared because it's used also by body
  width: 65px;
`;

const navOpen = css`
  width: 300px;
`;

const getNavStyle = props => {
  if (props.open) {
    return navOpen;
  }

  return navClose;
};

const MainNavContainer = styled.div`
  transition: width 0.6s ease;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  ${getNavStyle}
`;

export default MainNavContainer;
