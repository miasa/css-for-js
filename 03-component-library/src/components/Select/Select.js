import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Visual>
        {displayedValue}
        <Icon id="chevron-down" size="24" />
      </Visual>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const NativeSelect = styled.select`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Visual = styled.span`
  align-items: center;
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: 0;
  color: ${COLORS.gray700};
  display: flex;
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  gap: 18px;
  height: 43px;
  line-height: 19px;
  padding: 12px 10px 12px 16px;

  ${NativeSelect}:focus + & {
    outline: 2px auto Highlight;
    outline: 2px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
