import React from 'react';
import { Collapse } from 'antd';
import styled from '@emotion/styled';
import { PlusOutlined } from '@ant-design/icons';
import Text from './text/Text';
import { co } from '../styles/theme';
import { layout, space } from 'styled-system';

const { Panel } = Collapse;

const CollapseWrapper = styled.div`
  width: 100%;
  ${space}
  ${layout}
`;

function callback(key) {
  console.log(key);
}

const Accordion = ({ lista, customType, onClick, firstOneActive, ...rest }) => {
  return (
    <CollapseWrapper {...rest}>
      <Collapse
        onChange={callback}
        defaultActiveKey={firstOneActive ? ['0'] : []}
        expandIconPosition="right"
        expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 45 : 0} />}
      >
        {lista.map((accordionItem, idx) => (
          <Panel
            header={
              <Text color={co.primaryColor} marginless medium>
                {accordionItem.header}
              </Text>
            }
            key={idx}
          >
            {accordionItem.customBody
              ? accordionItem.body
              : accordionItem.body.map((text) => (
                  <Text markdown light>
                    {text}
                  </Text>
                ))}
          </Panel>
        ))}
      </Collapse>
    </CollapseWrapper>
  );
};

export default Accordion;
