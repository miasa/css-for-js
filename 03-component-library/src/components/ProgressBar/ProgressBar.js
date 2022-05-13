/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: {
    height: '8px',
    padding: '0',
    radius: '4px',
  },
  medium: {
    height: '12px',
    padding: '0',
    radius: '4px',
  },
  large: {
    height: '24px',
    padding: '4px',
    radius: '8px',
  },
};

const ProgressBar = ({ value, size }) => {

  const renderedSize = sizes[size];

  if(!renderedSize) {
    throw new Error(`[ProgressBar] unknown size '${size}'`)
  }

  return (
    <Track
      role="progressbar"
      aria-label="Loading"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={value}
      style={{
        '--height': renderedSize.height,
        '--padding': renderedSize.padding,
        '--radius': renderedSize.radius,
      }}
    >
      <ProgressWrapper>
        <Progress style={{
          '--width': value + '%',
        }} />
      </ProgressWrapper>
    </Track>
  );
};


const Track = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
  padding: var(--padding);
`;

const ProgressWrapper = styled.div`
  border-radius: 4px;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

const Progress = styled.div`
  background: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  display: block;
  height: 100%;
  width: var(--width);
`;

export default ProgressBar;
