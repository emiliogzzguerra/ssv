import React from 'react';
import styled from '@emotion/styled';
import { co, mq } from '../styles/theme';
import { useHistory } from 'react-router';

export const NAV_HEIGHT_MOBILE = 80;
export const NAV_HEIGHT_MEDIUM = 65;
export const NAV_HEIGHT_DESKTOP = 80;

const StyledHeader = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  font-weight: 700;
  font-size: 1.6em;
  text-align: center;

  width: 100%;
  z-index: 1000000;
  padding: 5px;
  height: ${NAV_HEIGHT_MOBILE}px;
  top: 0;
  /* border-bottom: 2px solid ${co.gray1}; */
  ${mq.md} {
    height: ${NAV_HEIGHT_DESKTOP}px;
  }
`;

const TakeUpSpace = styled.div`
  width: 100%;
  height: ${({ heights }) => `${heights[0]}px`};
  ${mq.md} {
    height: ${({ heights }) => `${heights[1]}px`};
  }
  ${mq.lg} {
    height: ${({ heights }) => `${heights[2]}px`};
  }
`;

const Navbar = () => {
  const history = useHistory();
  return (
    <>
      <TakeUpSpace heights={[NAV_HEIGHT_MOBILE, NAV_HEIGHT_MOBILE, NAV_HEIGHT_DESKTOP]} />
      <StyledHeader
        onClick={() => {
          history.push('/');
        }}
      >
        <span style={{ color: co.accentColor, display: 'contents' }}>S</span>olidaridad con los{' '}
        <span style={{ color: co.accentColor, display: 'contents' }}>S</span>alvadores de{' '}
        <span style={{ color: co.accentColor, display: 'contents' }}>V</span>idas
      </StyledHeader>
    </>
  );
};
export default Navbar;
