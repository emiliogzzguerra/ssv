import React from 'react';
import { space, layout } from 'styled-system';
import styled from '@emotion/styled';

const StyledImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  ${space}
  ${layout}
`;

const Image = ({ src, styles, type, ...rest }) => <StyledImage src={src} alt="image" {...rest} />;

export default Image;
