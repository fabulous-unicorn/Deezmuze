import React from 'react';
import { Icon } from '../index';

const ArrowUp = (props) => {
  const { size, ...rest } = props;
  const iconSize = IconSize[size];
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M15 42L30 27L45 42L51 39L30 18L9 39L15 42Z"
        fill="currentColor"/>
    </svg>
  );
}

export default (props) => {
  return <Icon {...props}><ArrowUp {...props}/></Icon>;
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
