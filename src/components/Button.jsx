import React from 'react';
import { co, mq } from '../styles/theme';
import PoliglotLink from './base/PoliglotLink';
import ConditionalWrapper from './base/ConditionalWrapper';
import styled from '@emotion/styled';
import { space } from 'styled-system';
import { Mixpanel } from './mixpanel';

const StyledButton = styled.button`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  padding: 10px 15px;
  border-radius: 10px;
  ${(props) => getButtonTypeStyles(props)}
  ${space}
  ${({ styles }) => styles}
`;

const getButtonTypeStyles = (props) => {
  switch (props.type) {
    case 'green':
      return `
        font-size: 1.3rem;
        font-weight: 500;
        width: 250px;
        min-width: fit-content;
        background-color: ${props.color ? props.color : co.secondaryColor};
        color: white;
        border: none;
        &:hover {
          background-color: ${props.colorHover ? props.colorHover : co.secondaryColorDark};
        }

        ${mq.sm} {
          width: 300px;
        }

        ${mq.md} {
          width: 320px;
        }
        ${mq.xl} {
          width: 400px;
        }
      `;
    case 'valueprop':
      return `
        font-size: 1.3rem;
        font-weight: 500;
        width: 100%;
        min-width: fit-content;
        background-color: ${props.color ? props.color : co.secondaryColor};
        color: white;
        border: none;
        &:hover {
          background-color: ${props.colorHover ? props.colorHover : co.secondaryColorDark};
        }

        ${mq.sm} {
          width: 210px;
        }

        ${mq.md} {
          width: 280px;
        }
      `;
    case 'webinar1':
      return `
        color: rgb(255, 255, 255);
        font-weight: 600;
        background-color: ${co.secondaryColor};
        padding-top: 20px !important;
        padding-bottom: 20px !important;

        padding-left: 40px !important;
        padding-right: 40px !important;

        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 8px;
        box-shadow: inset 0 1px 1px 0 rgba(255,255,255,0.22);

        font-size: 20px;

        &:hover {
          box-shadow: inset 0 2px 2px 0 rgba(255,255,255,0.22), 0 233px 233px 0 rgba(255,255,255,0.12) inset;
        }
      `;
    case 'webinar2':
      return `
          color: rgb(255, 255, 255);
          font-weight: 600;
          background-color: ${co.secondaryColor};
          padding-top: 20px !important;
          padding-bottom: 20px !important;
  
          padding-left: 40px !important;
          padding-right: 40px !important;
  
          border: 1px solid rgba(0,0,0,0.2);
          border-radius: 8px;
          box-shadow: inset 0 1px 1px 0 rgba(255,255,255,0.22);
  
          font-size: 20px;
          width: 100%;

          ${mq.lg} {
            font-size: 38px;
          }
   
          &:hover {
            box-shadow: inset 0 2px 2px 0 rgba(255,255,255,0.22), 0 233px 233px 0 rgba(255,255,255,0.12) inset;
          }
        `;
    default:
      return '';
  }
};

const Button = ({ event, events, link, children, onClick = () => {}, styles, ...rest }) => {
  return (
    <ConditionalWrapper
      condition={link}
      wrapper={(children) => <PoliglotLink link={link}>{children}</PoliglotLink>}
    >
      <StyledButton
        onClick={() => {
          if (events) {
            Mixpanel.trackMultiple(events);
          } else if (event) {
            Mixpanel.track(event);
          }
          onClick();
        }}
        styles={styles}
        {...rest}
      >
        {children}
      </StyledButton>
    </ConditionalWrapper>
  );
};

export default Button;
