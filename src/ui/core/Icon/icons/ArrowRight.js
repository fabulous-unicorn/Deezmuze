import React from 'react';
import { Icon } from '../index';

const ArrowRight = (props) => {
  const { size, ...rest } = props;
  const iconSize = IconSize[size];
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M24 20L44 40L24 60L28 68L56 40L28 12L24 20Z"
        fill="currentColor"/>
    </svg>
  );
}

export default (props) => {
  return <Icon {...props}><ArrowRight {...props}/></Icon>;
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
