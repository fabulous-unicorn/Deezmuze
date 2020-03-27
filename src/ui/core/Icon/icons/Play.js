import React from 'react';
import { Icon } from '../index';

const Play = (props) => {
  const { size, ...rest } = props;
  const iconSize = IconSize[size];
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M24 16.0016C24 16.48 23.512 16.824 23.512 16.824L9.8144 25.3088C8.816 25.9632 8 25.4784 8 24.2384V7.76322C8 6.52002 8.816 6.03842 9.816 6.69122L23.5136 15.1792C23.512 15.1792 24 15.5232 24 16.0016Z"
        fill="currentColor"/>
    </svg>
  );
}

export default (props) => {
  return <Icon {...props}><Play {...props}/></Icon>;
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
