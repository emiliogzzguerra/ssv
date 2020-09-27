import React from 'react';
import { space } from 'styled-system';
import { co } from '../../styles/theme';
import styled from '@emotion/styled';

const StyledSeparator = styled.div`
  width: ${({ width }) => width && `${width}%`};
  height: ${({ size }) => size && `${size}px`};
  border-bottom: ${({ size }) => size && `${size}px`} solid ${({ color }) => color && color};
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  ${space}
`;

export default function Separator({ width = 100, size = 2, color = co.gray1, ...rest }) {
  return <StyledSeparator width={width} size={size} color={color} {...rest} />;
}
