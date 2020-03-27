import React from 'react';
import { Icon } from '../index';

const FastRewindRight = (props) => {
  const { size, ...rest } = props;
  const iconSize = IconSize[size];
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M20.4 26.7833V13.2167C20.4 11.8667 21.9166 11.0833 23.0333 11.85L32.65 18.6333C33.5833 19.3 33.5833 20.7 32.65 21.35L23.0333 28.1333C21.9166 28.9167 20.4 28.1333 20.4 26.7833ZM17.6333 21.3667L8.01664 28.15C6.91664 28.9333 5.38331 28.1333 5.38331 26.7833V13.2167C5.38331 11.8667 6.89998 11.0833 8.01664 11.85L17.6333 18.6333C17.8534 18.7869 18.0331 18.9914 18.1572 19.2293C18.2812 19.4673 18.346 19.7316 18.346 20C18.346 20.2683 18.2812 20.5327 18.1572 20.7707C18.0331 21.0086 17.8534 21.2131 17.6333 21.3667Z"
        fill="currentColor"/>
    </svg>
  );
}

export default (props) => {
  return <Icon {...props}><FastRewindRight {...props}/></Icon>;
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
