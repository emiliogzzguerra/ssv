import React from 'react';
import styled from '@emotion/styled';
import { getTypographySharedStyle, getTypographySize } from './shared';
import { layout } from 'styled-system';

const TitleConstructor = ({ tag, children, ...props }) => React.createElement(tag, props, children);
const StyledTitle = styled(TitleConstructor)`
  font-family: Poppins, sans-serif;
  ${(props) => {
    let typographyStyles = '';
    Object.keys(props).map((prop) => {
      typographyStyles += getTypographySharedStyle(prop, props[prop]);
    });
    return typographyStyles;
  }}
  ${({ tag = 'h1' }) => getTypographySize(tag)}
  ${layout};
  ${({ styles }) => styles};
`;

const determineFancyRemark = (remark) => {
  switch (remark) {
    case 'minimal':
      return styled.div`
        margin-left: 0px;
        margin-top: 10px;
        width: 25px;
        height: 4px;
        background-image: linear-gradient(45deg, #08aeea 0%, #3dbc94 100%);
      `;
    default:
      return null;
  }
};

const Title = ({ level, children, styles, remark, ...rest }) => {
  const Remark = determineFancyRemark(remark);
  return (
    <>
      <StyledTitle tag={`h${level}`} styles={styles} {...rest}>
        {children}
        {remark && <Remark />}
      </StyledTitle>
    </>
  );
};

export default Title;
