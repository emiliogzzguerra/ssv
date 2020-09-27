import React from 'react';
import styled from '@emotion/styled';

import Footer from '../components/Footer';
import Content from '../components/layouts/Content';
import Section from '../components/layouts/Section';
import Separator from '../components/layouts/Separator';
import Navbar from '../components/Navbar';
import Title from '../components/text/Title';

import { space, layout } from 'styled-system';
import { mq } from '../styles/theme';
import VideoPlayer from '../components/video/VideoPlayer';

const VideoWrapper = styled.div`
  ${layout};
  ${space};
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <Content type="landing">
        <Section type="landing">
          <VideoWrapper mx={{ _: 0 }} width={{ _: '100%' }}>
            <VideoPlayer
              teaser
              muted
              light={false}
              clean
              videoName="plan-de-pension"
              loop={1}
              config={{
                playerVars: {
                  start: 52,
                  modestbranding: 1,
                  showinfo: 0,
                  cc_load_policy: 1,
                },
              }}
              url={'https://youtu.be/D2WQ4d_n40o'}
              styles={`
                ${mq.lg} {
                    // margin-top: 20px;
                }
            `}
            />
          </VideoWrapper>
        </Section>
        <Separator />
        <Section type="landing">
          <Title level={2}>Conoce la propuesta</Title>
        </Section>
        <Separator />
        <Section type="landing">Hola</Section>
      </Content>
      <Footer />
    </>
  );
}
