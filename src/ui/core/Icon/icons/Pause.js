import React from 'react';
import { Icon } from '../index';

const Pause = (props) => {
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
        d="M13 27H10C9.73478 27 9.48043 26.8946 9.29289 26.7071C9.10536 26.5196 9 26.2652 9 26V6C9 5.73479 9.10536 5.48043 9.29289 5.2929C9.48043 5.10536 9.73478 5 10 5H13C13.2652 5 13.5196 5.10536 13.7071 5.2929C13.8946 5.48043 14 5.73479 14 6V26C14 26.2652 13.8946 26.5196 13.7071 26.7071C13.5196 26.8946 13.2652 27 13 27Z"
        fill="currentColor"/>
      <path
        d="M22 27H19C18.7348 27 18.4804 26.8946 18.2929 26.7071C18.1054 26.5196 18 26.2652 18 26V6C18 5.73479 18.1054 5.48043 18.2929 5.2929C18.4804 5.10536 18.7348 5 19 5H22C22.2652 5 22.5196 5.10536 22.7071 5.2929C22.8946 5.48043 23 5.73479 23 6V26C23 26.2652 22.8946 26.5196 22.7071 26.7071C22.5196 26.8946 22.2652 27 22 27Z"
        fill="currentColor"/>
    </svg>
  );
}

export default (props) => {
  return <Icon {...props}><Pause {...props}/></Icon>;
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
