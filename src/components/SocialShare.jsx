import styled from '@emotion/styled';
import React from 'react';

import { FacebookIcon, TwitterIcon, LinkedinIcon, WhatsappIcon, EmailIcon } from 'react-share';

import { flexrow } from '../styles/theme';
import { Mixpanel } from './mixpanel';

const ShareList = styled.div`
  width: 100%;
  ${flexrow}
  justify-content: space-around;
  align-items: center;
  max-width: 500px;
`;

export default function SocialShare({ links }) {
  return (
    <ShareList>
      <FacebookIcon
        size={'4rem'}
        style={{ cursor: 'pointer' }}
        round
        onClick={() => {
          Mixpanel.track('Shared - Facebook');
          window.open(links.facebook);
        }}
      />
      <TwitterIcon
        size={'4rem'}
        style={{ cursor: 'pointer' }}
        round
        onClick={() => {
          Mixpanel.track('Shared - Twitter');
          window.open(links.twitter);
        }}
      />

      <WhatsappIcon
        size={'4rem'}
        style={{ cursor: 'pointer' }}
        round
        onClick={() => {
          Mixpanel.track('Shared - WhatsApp');
          window.open(links.whatsapp);
        }}
      />

      <LinkedinIcon
        size={'4rem'}
        style={{ cursor: 'pointer' }}
        round
        onClick={() => {
          Mixpanel.track('Shared - Linkedin');
          window.open(links.linkedin);
        }}
      />

      <EmailIcon
        size={'4rem'}
        style={{ cursor: 'pointer' }}
        round
        onClick={() => {
          window.open(links.email);
        }}
      />
    </ShareList>
  );
}
