import React from 'react';
import styled from '@emotion/styled';
import { space, flexbox, color } from 'styled-system';

const StyledSectionBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${flexbox}
  ${space}
  ${color}
  ${({ styles }) => styles}
`;

const determineSectionProps = (type, props) => {
  switch (type) {
    case 'landing':
      return { py: { _: 35, sm: 50, lg: 70 }, ...props };
    default:
      return { ...props };
  }
};

export default function Section({ children, type, ...rest }) {
  const StyledSectionProps = determineSectionProps(type, rest);
  return <StyledSectionBase {...StyledSectionProps}>{children}</StyledSectionBase>;
}
