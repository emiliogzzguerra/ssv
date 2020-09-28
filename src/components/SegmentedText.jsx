import React, { Component, Fragment } from 'react';
import Text from './text/Text';
import Markdown from 'react-remarkable';

import styled from '@emotion/styled';
import { co } from '../styles/theme';

const StyledSeeMoreSpan = styled.div`
  color: ${co.accentColor};
  cursor: pointer;
  text-decoration: underline;
  text-align: right;
  margin-top: -10px;
`;

const Wrapper = styled.div`
  width: 100%;
`;

export default class SegmentedText extends Component {
  state = {
    open: false,
  };
  render() {
    const { open } = this.state;
    const { text, textType, teaserTextSize, style } = this.props;
    return !open ? (
      <Wrapper style={style}>
        <Text type={textType}>
          <Markdown>
            {text.length > teaserTextSize
              ? `
            ${text.substring(0, teaserTextSize)}... 
            `
              : text.substring(0, teaserTextSize)}
          </Markdown>

          {text.length > teaserTextSize && (
            <StyledSeeMoreSpan
              onClick={() => {
                this.setState((state) => ({ open: !state.open }));
              }}
            >
              Ver más
            </StyledSeeMoreSpan>
          )}
        </Text>
      </Wrapper>
    ) : (
      <Wrapper style={style}>
        <Text type={textType}>
          <Markdown>{text}</Markdown>{' '}
          <StyledSeeMoreSpan
            onClick={() => {
              this.setState((state) => ({ open: !state.open }));
            }}
          >
            Ver menos
          </StyledSeeMoreSpan>
        </Text>
      </Wrapper>
    );
  }
}
