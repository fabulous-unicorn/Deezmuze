import React from 'react';
import { Icon } from '../index';

const FastRewindLeft = (props) => {
  const { size, ...rest } = props;
  const iconSize = IconSize[size];
  return(
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M18.3333 26.7833V13.2167C18.3333 11.8667 16.8167 11.0833 15.7 11.85L6.08333 18.6333C5.15 19.3 5.15 20.7 6.08333 21.35L15.7 28.1333C16.8167 28.9167 18.3333 28.1333 18.3333 26.7833ZM21.1 21.3667L30.7167 28.15C31.8167 28.9333 33.35 28.1333 33.35 26.7833V13.2167C33.35 11.8667 31.8333 11.0833 30.7167 11.85L21.1 18.6333C20.8799 18.7869 20.7002 18.9914 20.5762 19.2293C20.4521 19.4673 20.3873 19.7316 20.3873 20C20.3873 20.2683 20.4521 20.5327 20.5762 20.7707C20.7002 21.0086 20.8799 21.2131 21.1 21.3667Z"
        fill="currentColor"/>
    </svg>
  );
}

export default (props) => {
  return <Icon {...props}><FastRewindLeft {...props}/></Icon>;
};

const IconSize = {
  xs: 12,
  s: 16,
  m: 24,
  l: 32,
  xl: 40,
  xxl: 60,
  logo: 50,
  big: 80
}
