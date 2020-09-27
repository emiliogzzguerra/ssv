import React from 'react';
import { co } from '../../styles/theme';
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';
import { space, layout } from 'styled-system';
import { useState } from 'react';
import ClickToPlayOverlay from './ClickToPlayOverlay';

const VideoWrapper = styled.div`
  position: relative;
  ${space}
  ${layout}
  ${({ styles }) => styles}
`;

const VideoFrame = styled.div`
  width: 100%;
  padding-top: 56.25%;
`;

const VideoPlayer = ({
  teaser,
  muted = false,
  light = true,
  clean,
  url,
  config,
  loop,
  videoName,
  ...rest
}) => {
  const [mute, setMute] = useState(true);
  const [player, setPlayer] = useState(null);
  const [captions, setCaptions] = useState(1);

  const ref = (playerRef) => {
    console.log('setting player');
    setPlayer(playerRef);
  };

  const startOver = (videoName) => {
    setMute(false);
    setCaptions(0);
    player.seekTo(parseFloat(0));
  };

  return (
    <>
      <VideoWrapper {...rest}>
        {teaser && (
          <ClickToPlayOverlay
            onClick={() => {
              startOver(videoName);
            }}
          />
        )}
        <VideoFrame>
          <ReactPlayer
            ref={ref}
            playing={teaser}
            url={url}
            light={light}
            controls
            width="100%"
            height="100%"
            config={config}
            muted={mute}
            loop={loop}
            style={{
              // padding: clean ? 0 : 10,
              background: `${co.island5}`,
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </VideoFrame>
      </VideoWrapper>
    </>
  );
};
export default VideoPlayer;
