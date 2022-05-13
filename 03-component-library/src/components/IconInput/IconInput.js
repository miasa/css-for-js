import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const styles = {
  small: {
    iconSize: '16',
    borderWidth: '1px',
    fontSize: '14px',
    padding: '24px',
  },
  large: {
    iconSize: '24',
    borderWidth: '2px',
    fontSize: '18px',
    padding: '36px',
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const style = styles[size];

  if(!style) {
    throw new Error(`[IconInput] unkwown size '${size}'`);
  }

  return (
    <Wrapper style={{'--width': width + 'px'}}>
      <StyledIcon id={icon} size={style.iconSize} aria-hidden={true} />
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input
        type="text"
        placeholder={placeholder}
        style={{
          '--borderWidth': style.borderWidth,
          '--fontSize': style.fontSize,
          '--padding': style.padding,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  color: ${COLORS.gray700};
  display: block;
  position: relative;
  width: var(--width);

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  left: 0;
  position: absolute;
  top: 0;
`;

const Input = styled.input`
  border: 0;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  color: inherit;
  font-size: var(--fontSize);
  font-weight: 700;
  outline-offset: 2px;
  padding-left: var(--padding);
  width: 100%;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

`;

export default IconInput;
