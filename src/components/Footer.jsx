import React from 'react';
import styled from '@emotion/styled';
import { co, flexrow, flexcenter, mq } from '../styles/theme';
import Text from './text/Text';
import { space, layout } from 'styled-system';
import { MailOutlined } from '@ant-design/icons';

const StyledFooter = styled.div`
  background-color: ${({ color }) => (color ? color : co.gray1)};
  width: 100vw;
  height: fit-content;
  padding: 20px;
`;

const Content = styled.div`
  ${flexrow}
  ${space}
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 5px;
  ${mq.md} {
    justify-content: space-around;
  }
`;

const Section = styled.div`
  width: 50%;
  margin-bottom: 20px;
  margin-top: 20px;
  ${mq.md} {
    width: 25%;
  }
  ${layout}
`;

const FinalSection = styled(Section)`
  ${flexrow}
  ${flexcenter}
  width: 100%;
  flex-wrap: wrap;
`;

const FooterLinkText = styled(Text)`
  cursor: pointer;
  margin-bottom: 0px;
  font-size: 1rem;
`;

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = ({ light, color, fontColor }) => (
  <StyledFooter color={color}>
    <Content>
      <FinalSection style={{ width: '100%' }}>
        <Text
          marginTop={10}
          width={'100vw'}
          color={fontColor ? fontColor : co.accentColor}
          align="center"
          medium
          marginless
        >
          SSV {currentYear}
        </Text>
        <a href="mailto:hola@ssv.mx">
          <Text
            marginTop={10}
            width={'100vw'}
            color={fontColor ? fontColor : co.accentColor}
            align="center"
            medium
            marginless
            underline
          >
            <MailOutlined style={{ marginRight: '10px' }} />
            hola@ssv.mx
          </Text>
        </a>
      </FinalSection>
    </Content>
  </StyledFooter>
);
export default Footer;
