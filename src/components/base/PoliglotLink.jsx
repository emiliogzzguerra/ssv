import React from 'react';
import styled from '@emotion/styled';
import { layout } from 'styled-system';
import { Link } from 'react-router-dom';

const StyledA = styled.a`
  cursor: pointer !important;
  text-decoration: none;
  ${layout};
`;

const StyledLink = styled(Link)`
  cursor: pointer !important;
  text-decoration: none;
  ${layout};
`;

export default function PoliglotLink({ link, children, ...rest }) {
  return !link.local ? (
    <StyledA href={link.link} target={link.blank ? '_blank' : '_self'} {...rest}>
      {children}
    </StyledA>
  ) : (
    <StyledLink to={link.link} {...rest}>
      {children}
    </StyledLink>
  );
}
