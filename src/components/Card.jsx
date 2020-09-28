import React from 'react';
import styled from '@emotion/styled';
import { co } from '../styles/theme';

const StyledCard = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ maxWidth }) => (Number.isInteger(maxWidth) ? `${maxWidth}px` : maxWidth)};
  padding: 10px;
  margin: 5px 0;
  box-sizing: border-box;

  background: #ffffff;
  border: 1px solid ${({ borderColor }) => borderColor};
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  align-self: ${({ alignSelf }) => alignSelf};

  ${({ noBorder }) =>
    noBorder &&
    `
      border: none;
    `};

  ${({ styles }) => styles}
`;

const BaseCard = ({ children, maxWidth, alignSelf, styles, className, noBorder, borderColor }) => (
  <StyledCard
    borderColor={borderColor}
    maxWidth={maxWidth}
    alignSelf={alignSelf}
    styles={styles}
    className={className}
    noBorder={noBorder}
  >
    {children}
  </StyledCard>
);

export default BaseCard;
