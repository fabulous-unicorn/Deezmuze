import React from 'react';
import { Icon } from '../index';

const ArrowLeft = (props) => {
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
        d="M56 20L36 40L56 60L52 68L24 40L52 12L56 20Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default (props) => {
  return <Icon {...props}><ArrowLeft {...props} /></Icon>;
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
