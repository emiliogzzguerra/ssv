import React from 'react';
import styled from '@emotion/styled';
import { space } from 'styled-system';

const StyledContentBase = styled.div`
  ${space}
`;

const determineContentProps = (type, props) => {
  switch (type) {
    case 'landing':
      return { px: [20, 20, 60, 100, '20vw'], ...props };
    default:
      return { ...props };
  }
};

const Content = ({ type, children, ...rest }) => {
  const StyledContentProps = determineContentProps(type, rest);
  return <StyledContentBase {...StyledContentProps}>{children}</StyledContentBase>;
};
export default Content;
