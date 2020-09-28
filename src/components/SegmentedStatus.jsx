import React, { Component, Fragment } from 'react';
import Text from './text/Text';
import Markdown from 'react-remarkable';

import styled from '@emotion/styled';
import { co } from '../styles/theme';
import StatusCard from './StatusCard';

const StyledSeeMoreSpan = styled.div`
  color: ${co.accentColor};
  cursor: pointer;
  text-decoration: underline;
  text-align: right;
  margin-top: 10px;
  font-size: 1.2em;
`;

const Wrapper = styled.div`
  width: 100%;
`;

export default class SegmentedStatus extends Component {
  state = {
    open: false,
  };
  render() {
    const { open } = this.state;
    const { milestones, numberShown, style } = this.props;
    return !open ? (
      <Wrapper style={style}>
        {milestones.length > numberShown && (
          <>
            {milestones.slice(0, numberShown).map((milestone) => (
              <StatusCard title={milestone.title} text={milestone.text} date={milestone.date} />
            ))}
            <StyledSeeMoreSpan
              onClick={() => {
                this.setState((state) => ({ open: !state.open }));
              }}
            >
              Ver más
            </StyledSeeMoreSpan>
          </>
        )}
      </Wrapper>
    ) : (
      <Wrapper style={style}>
        {milestones.map((milestone) => (
          <StatusCard title={milestone.title} text={milestone.text} date={milestone.date} />
        ))}
        <StyledSeeMoreSpan
          onClick={() => {
            this.setState((state) => ({ open: !state.open }));
          }}
        >
          Ver menos
        </StyledSeeMoreSpan>
      </Wrapper>
    );
  }
}
