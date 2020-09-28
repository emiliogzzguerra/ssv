import styled from '@emotion/styled';
import React from 'react';
import { flexcenter, flexcolumn } from '../styles/theme';
import BaseCard from './Card';
import Text from './text/Text';
import Title from './text/Title';

const StatusCardWrapper = styled.div`
  ${flexcolumn}
  ${flexcenter}
  align-items: flex-start;
`;

export default function StatusCard({ title, text, date }) {
  return (
    <BaseCard>
      <StatusCardWrapper>
        <Title level={5}>{title}</Title>
        <Text type="small">{text}</Text>
        <Text type="small" style={{ alignSelf: 'flex-end' }}>
          {date}
        </Text>
      </StatusCardWrapper>
    </BaseCard>
  );
}
