import React from 'react';
import { Icon } from '../index';

const Plus = (props) => {
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
          d="M32 20C32 21.106 31.904 22 30.798 22H22V30.798C22 31.902 21.106 32 20 32C18.894 32 18 31.902 18 30.798V22H9.202C8.098 22 8 21.106 8 20C8 18.894 8.098 18 9.202 18H18V9.202C18 8.096 18.894 8 20 8C21.106 8 22 8.096 22 9.202V18H30.798C31.904 18 32 18.894 32 20Z"
          fill="currentColor"/>
      </svg>
    );
  }

export default (props) => {
  return <Icon {...props}><Plus {...props}/></Icon>;
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
