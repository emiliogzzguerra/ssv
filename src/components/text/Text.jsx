import React from 'react';
import styled from '@emotion/styled';
import { getTypographySharedStyle, getTypographySize } from './shared';
import { space, layout } from 'styled-system';

const _determineTextType = (secondary, terciary, subheader, body) => {
  return (
    (secondary && 'secondary') ||
    (terciary && 'terciary') ||
    (subheader && 'subheader') ||
    (body && 'body') ||
    (true && 'default')
  );
};

const StyledText = styled.p`
  font-family: 'Poppins', sans-serif;
  ${({ secondary, terciary, subheader, body }) =>
    getTypographySize(_determineTextType(secondary, terciary, subheader, body))}
  ${({ type = 'default' }) => getTypographySize(type)}
  ${(props) => {
    let typographyStyles = '';
    Object.keys(props).map((prop) => {
      typographyStyles += getTypographySharedStyle(prop, props[prop]);
    });
    return typographyStyles;
  }}
  ${({ level }) => (level ? getTypographySize(`h${level}`) : '')}
  
  ${space}
  ${layout}
  ${({ styles }) => styles}
`;

const Text = ({ link = null, children, styles, ...rest }) => {
  return (
    <StyledText link={link !== null ? true : false} styles={styles} {...rest}>
      {children}
    </StyledText>
  );
};

export default Text;
