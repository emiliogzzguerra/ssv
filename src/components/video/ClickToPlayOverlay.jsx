import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as playButton } from '../../static/svg/play-button.svg';
import { ReactComponent as mute } from '../../static/svg/muted.svg';

import { flexcenter, mq } from '../../styles/theme';
import { useState } from 'react';
import { layout } from 'styled-system';

const ClickToPlayOverlayWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  ${flexcenter}
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 10000;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  cursor: pointer;
`;

const PlayButton = styled(playButton)`
  /* width: 100px; */
  height: auto;
  fill: white;
  ${layout}
`;

const Mute = styled(mute)`
  /* width: 100px; */
  height: auto;
  fill: white;
  ${layout}
  background-color: red;
  width: 40px;
  border-radius: 25px;
  margin: 20px 10px 20px 10px;

  ${mq.lg} {
    width: 40px;
  }
`;

const NoSoundDisclaimer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 10px;
  left: 10px;

  ${mq.sm} {
    width: 180px;
    height: 70px;
  }
  ${mq.lg} {
    width: 160px;
    height: 60px;
  }
`;

const ClickToUnmuteText = styled.p`
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 0.8em;
  font-weight: 500;
  ${mq.sm} {
    font-size: 1.2em;
    width: 100px;
  }
  ${mq.lg} {
    font-size: 1.1em;
  }
`;

export default function ClickToPlayOverlay({ show, onClick }) {
  const [visible, setVisible] = useState(true);
  return (
    <ClickToPlayOverlayWrapper
      visible={visible}
      onClick={() => {
        setVisible(false);
        onClick();
      }}
    >
      <NoSoundDisclaimer>
        <Mute />
        <ClickToUnmuteText>Click para escuchar</ClickToUnmuteText>
      </NoSoundDisclaimer>
      <PlayButton width={{ _: '50px', sm: '80px', md: '120px', lg: '100px' }} />
    </ClickToPlayOverlayWrapper>
  );
}
